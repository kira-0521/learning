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
        $memos = Memo::select('memos.*')
            // ログインユーザーであること
            ->where('user_id', '=', \Auth::id())
            // 論理削除されてないこと
            ->whereNull('deleted_at')
            // 並び順
            ->orderBy('updated_at', 'DESC')
            // 取得
            ->get();

        // TODO: タグの一覧が取得できない
        $tags = Tag::where('user_id', '=', \Auth::id())->whereNull('deleted_at')->orderBy('id', 'DESC')->get();

            // compactメソッドに渡した値をbladeで使用する
        return view('create', compact('memos', 'tags'));
    }

    public function store(Request $request)
    {
        $posts = $request->all();

        // ＝＝＝　トランザクション開始 ===
        DB::transaction(function () use($posts) {
            // メモをインサートした後にメモIDを取得
            $memo_id = Memo::insertGetId(['content' => $posts['content'], 'user_id' => \Auth::id()]);
            // TODO: メモが入力されていなかった場合、タグだけ入力された場合、何も入力されず保存が押された場合
            // Tagsテーブルからログインユーザーと同じuser_idを持つものを絞り込み、その中で入力と同じものがないかチェック
            $tag_exists = Tag::where('user_id', '=', \Auth::id())->where('name', '=', $posts['new_tag'])->exists();
            // 新規タグが入力されているか
            // すでにDBに同じタグが存在していないか
            if( !empty($posts['new_tag'] || $posts['new_tag'] === "0" && !$tag_exists )){
                // 新規タグがDBに存在しなければ、Tagsテーブルにインサート->ID取得
                $tag_id = Tag::insertGetId(['user_id' => \Auth::id(), 'name' => $posts['new_tag']]);
                // memo_tagsにインサートして、メモとタグを紐付ける
                MemoTag::insert(['memo_id' => $memo_id, 'tag_id' => $tag_id]);
            }
        });
        // === トランザクション終了 ===

        // return無しでも動く
        return redirect( route('home') );
    }

    public function edit($id)
    {
        $memos = Memo::select('memos.*')
            // ログインユーザーであること
            ->where('user_id', '=', \Auth::id())
            // 論理削除されてないこと
            ->whereNull('deleted_at')
            // 並び順
            ->orderBy('updated_at', 'DESC')
            // 取得
            ->get();

        $edit_memo = Memo::find($id);

            // compactメソッドに渡した値をbladeで使用する
        return view('edit', compact('memos', 'edit_memo'));
    }

    public function update(Request $request)
    {
        $posts = $request->all();

        Memo::where('id', $posts['memo_id'])->update(['content' => $posts['content']]);

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
