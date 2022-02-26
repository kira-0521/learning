<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Memo;
use App\Models\Tag;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // 全てのメソッドが呼ばれる前に先に呼ばれるメソッド
        view()->composer('*', function($view) {

            // クエリパラメータtagの有無によってメモ取得数を分岐
            $query_tag = \Request::query('tag');

            if(!empty($query_tag)) {
                $memos = Memo::select('memos.*')

                    // memo_tagsテーブルのmemo_idとmemosテーブルのidが一致する部分をジョイン
                    ->leftJoin('memo_tags', 'memo_tags.memo_id', '=', 'memos.id')

                    // memo_tagsテーブルのtag_idとクエリパラメータが一致するもの
                    ->where('memo_tags.tag_id', '=', $query_tag)

                    ->where('user_id', '=', \Auth::id())
                    ->whereNull('deleted_at')
                    ->orderBy('updated_at', 'DESC')
                    ->get();
            } else {
                $memos = Memo::select('memos.*')
                    ->where('user_id', '=', \Auth::id())
                    ->whereNull('deleted_at')
                    ->orderBy('updated_at', 'DESC')
                    ->get();
            }


            $tags = Tag::select('tags.*')
                ->where('user_id', '=', \Auth::id())
                ->whereNull('deleted_at')
                ->orderBy('id', 'DESC')
                ->get();

            $view->with('memos', $memos)->with('tags', $tags);
        });
    }
}
