@extends('layouts.app')

@section('javascript')
<script src="/js/confirm.js"></script>
@endsection

@section('content')
<div class="card">
    <div class="card-header">
        メモ編集

        <form action="{{ route('destroy') }}" id="delete-form" class="card-body" method="POST">
            @csrf
            <input type="hidden" name="memo_id" value="{{ $edit_memo[0]['id'] }}">
            <button type="submit" onclick="deleteHandle(event);">削除</button>
        </form>

    </div>
    <form action="{{ route('update') }}" class="card-body" method="POST">

        {{-- 編集対象のID --}}
        @csrf
        <input type="hidden" name="memo_id" value="{{ $edit_memo[0]['id'] }}">

        <div class="form-group">

            {{-- メモ本文 --}}
            <textarea name="content" rows="3" class="form-control" placeholder="ここにメモを入力">{{ $edit_memo[0]['content'] }}</textarea>

            {{-- エラーメッセージ --}}
            @error('content')
            <div class="alert alert-danger">メモ内容を入力してください！</div>
            @enderror

            {{-- 既存タグ --}}
            @foreach($tags as $t)
                <div class="form-check form-check-inline mb-3">
                    {{-- $t['id']がinclude_tagsに含まれていればcheckedを付与する --}}
                    <input type="checkbox" class="form-check-input" name="tags[]" id="{{ $t['id'] }}" value="{{ $t['id'] }}"
                    {{ in_array($t['id'], $include_tags) ? 'checked' : '' }}>
                    <label for="{{ $t['id'] }}" class="form-check-lavel">{{ $t['name'] }}</label>
                </div>
            @endforeach

            {{-- 新規タグ --}}
            <input type="text" class="form-control w-50 mb-3" name="new_tag" placeholder="新しいタグ名を入力">

        </div>

        {{-- 更新ボタン --}}
        <button class="btn btn-primary mt-2" type="submit">更新</button>

    </form>
</div>
@endsection
