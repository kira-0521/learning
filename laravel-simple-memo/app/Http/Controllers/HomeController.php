<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Memo;
use App\Models\Tag;
use App\Models\MemoTag;
use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $tags = Tag::where('user_id', '=', \Auth::id())->whereNull('deleted_at')->orderBy('id', 'DESC')->get();

            // compactメソッドに渡した値をbladeで使用する
        return view('create', compact('tags'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'content' => 'required'
        ]);
        $posts = $request->all();

        // ＝＝＝　トランザクション開始 ===
        DB::transaction(function () use($posts) {
            // メモをインサートした後にメモIDを取得
            $memo_id = Memo::insertGetId(['content' => $posts['content'], 'user_id' => \Auth::id()]);

            // Tagsテーブルからログインユーザーと同じuser_idを持つものを絞り込み、その中で入力と同じものがないかチェック
            $tag_exists = Tag::where('user_id', '=', \Auth::id())->where('name', '=', $posts['new_tag'])->exists();

            // 新規タグが入力されているか
            // すでにDBに同じタグが存在していないか
            if( !empty($posts['new_tag']) || $posts['new_tag'] === "0" && !$tag_exists ){
                // 新規タグがDBに存在しなければ、Tagsテーブルにインサート->ID取得
                $tag_id = Tag::insertGetId(['user_id' => \Auth::id(), 'name' => $posts['new_tag']]);
                // memo_tagsにインサートして、メモとタグを紐付ける
                MemoTag::insert(['memo_id' => $memo_id, 'tag_id' => $tag_id]);
            }

            // タグが選択されなかった場合
            if(!empty($posts['tags'])){
                // 既存タグが紐づけられた場合->memo_tagsにインサート
                foreach($posts['tags'] as $tag){
                    MemoTag::insert(['memo_id' => $memo_id, 'tag_id' => $tag]);
                }
            }

        });
        // === トランザクション終了 ===

        // return無しでも動く
        return redirect( route('home') );
    }

    public function edit($id)
    // 1. 編集対象のメモを取得
    // 2. 編集対象に紐づいているタグを取得
    // 3. 全てのタグ一覧を取得
    // 4. editビューに取得物を渡す
    {
        // memosテーブルから全てのカラムを選択、tagsテーブルのidカラムはtags_idとして扱うよ
        // memosテーブルのidとtagsテーブルのidの衝突を避けるためですよ。
        $edit_memo = Memo::select('memos.*', 'tags.id AS tag_id')

            // memo_tagsテーブルをジョインします。memo_tagsテーブルのmemo_idとmemosテーブルのidが一致していることが条件です。
            ->leftJoin('memo_tags', 'memo_tags.memo_id', '=', 'memos.id')

            // tagsテーブルをジョインします。memo_tagsテーブルのtag_idとtagsテーブルのidが一致していることが条件です。
            ->leftJoin('tags', 'memo_tags.tag_id', '=', 'tags.id')

            // memosテーブルのuser_idとログインユーザーのuser_idが一致している条件で絞り込みます。
            ->where('memos.user_id', '=', \Auth::id())

            // memosテーブルのidと引数のidが一致していることが条件です。
            ->where('memos.id', '=', $id)

            // memosテーブルのdeleted_atがnullなことが条件です。
            ->whereNull('memos.deleted_at')

            // タグが複数紐づいてる可能性があるため紐づいてるタグ分取得。
            ->get();


        // 含まれるタグだけを抽出したい
        $include_tags = [];
        foreach($edit_memo as $memo) {
            array_push($include_tags, $memo['tag_id']);
        }


        // 全てのタグ一覧取得
        $tags = Tag::where('user_id', '=', \Auth::id())->whereNull('deleted_at')->orderBy('id', 'DESC')->get();


            // compactメソッドに渡した値をbladeで使用する
        return view('edit', compact('edit_memo', 'include_tags', 'tags'));
    }

    public function update(Request $request)
    {
        $request->validate([
            'content' => 'required'
        ]);
        $posts = $request->all();

        DB::transaction(function () use($posts) {
            // メモの内容をこうしん
            Memo::where('id', $posts['memo_id'])->update(['content' => $posts['content']]);

            // 一旦メモとタグの紐付けを解除 / memo_idがpostsのidと一致するもの
            MemoTag::where('memo_id', '=', $posts['memo_id'])->delete();

            // 再度メモとタグの紐付け
            foreach($posts['tags'] as $tag){
                // memotagsにmemo_idとtag_idを紐付けてインサート
                MemoTag::insert(['memo_id' => $posts['memo_id'], 'tag_id' => $tag]);
            }

            // Tagsテーブルからログインユーザーと同じuser_idを持つものを絞り込み、その中で入力と同じものがないかチェック
            $tag_exists = Tag::where('user_id', '=', \Auth::id())->where('name', '=', $posts['new_tag'])->exists();
            // 新規タグが入力されているか
            // すでにDBに同じタグが存在していないか
            if( !empty($posts['new_tag']) || $posts['new_tag'] === "0" && !$tag_exists ){
                // 新規タグがDBに存在しなければ、Tagsテーブルにインサート->ID取得
                $tag_id = Tag::insertGetId(['user_id' => \Auth::id(), 'name' => $posts['new_tag']]);
                // memo_tagsにインサートして、メモとタグを紐付ける
                MemoTag::insert(['memo_id' => $posts['memo_id'], 'tag_id' => $tag_id]);
            }
        });


        // return無しでも動く
        return redirect( route('home') );
    }

    public function destroy(Request $request)
    {
        $posts = $request->all();

        Memo::where('id', $posts['memo_id'])->update(['deleted_at' => date("Y-m-d H:i:s", time())]);

        // return無しでも動く
        return redirect( route('home') );
    }
}
