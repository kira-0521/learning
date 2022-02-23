<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Memo;

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

            // compactメソッドに渡した値をbladeで使用する
        return view('create', compact('memos'));
    }

    public function store(Request $request)
    {
        $posts = $request->all();

        Memo::insert(['content' => $posts['content'], 'user_id' => \Auth::id()]);

        // return無しでも動く
        return redirect( route('home') );
    }
}
