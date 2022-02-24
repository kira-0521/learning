@extends('layouts.app')

@section('content')
<div class="card">
    <div class="card-header">
        メモ編集
        <form action="{{ route('destroy') }}" class="card-body" method="POST">
            @csrf
            <input type="hidden" name="memo_id" value="{{ $edit_memo['id'] }}">
            <button type="submit">削除</button>
        </form>
    </div>
    <form action="{{ route('update') }}" class="card-body" method="POST">
        @csrf
        <input type="hidden" name="memo_id" value="{{ $edit_memo['id'] }}">
        <div class="form-group">
            <textarea name="content" rows="3" class="form-control" placeholder="ここにメモを入力">{{ $edit_memo['content'] }}</textarea>
        </div>
        <button class="btn btn-primary mt-2" type="submit">更新</button>
    </form>
</div>
@endsection
