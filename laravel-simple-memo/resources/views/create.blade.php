@extends('layouts.app')

@section('content')
<div class="card">
    <div class="card-header">新規作成</div>
    <form action="{{ route('store') }}" class="card-body" method="POST">
        @csrf
        <div class="form-group">
            <textarea name="content" rows="3" class="form-control" placeholder="ここにメモを入力"></textarea>
        </div>
        @foreach($tags as $t)
            <div class="form-check form-check-inline mb-3">
                <input type="checkbox" class="form-check-input" name="tags[]" id="{{ $t['id'] }}" value="{{ $t['id'] }}">
                <label for="{{ $t['id'] }}" class="form-check-lavel">{{ $t['name'] }}</label>
            </div>
        @endforeach
        <input type="text" class="form-control w-50 mb-3" name="new_tag" placeholder="新しいタグ名を入力">
        <button class="btn btn-primary mt-2" type="submit">保存</button>
    </form>
</div>
@endsection
