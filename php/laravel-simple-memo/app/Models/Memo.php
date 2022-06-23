<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Memo extends Model
{
    use HasFactory;

    public function getMyMemo() {
        // クエリパラメータtagの有無によってメモ取得数を分岐
        $query_tag = \Request::query('tag');

        // === ベースのメソッド ===
        $query = Memo::query()->select('memos.*')
                ->where('user_id', '=', \Auth::id())
                ->whereNull('deleted_at')
                ->orderBy('updated_at', 'DESC');
        // === ベースのメソッドここまで ===

        if(!empty($query_tag)) {
            $query
                // memo_tagsテーブルのmemo_idとmemosテーブルのidが一致する部分をジョイン
                ->leftJoin('memo_tags', 'memo_tags.memo_id', '=', 'memos.id')
                // memo_tagsテーブルのtag_idとクエリパラメータが一致するもの
                ->where('memo_tags.tag_id', '=', $query_tag);
        }

        $memos = $query->get();
        return $memos;
    }
}
