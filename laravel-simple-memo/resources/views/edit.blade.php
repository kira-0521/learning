@extends('layouts.app')

@section('content')
<div class="card">
    <div class="card-header">
        メモ編集
        <form action="{{ route('destroy') }}" class="card-body" method="POST">
            @csrf
            <input type="hidden" name="memo_id" value="{{ $edit_memo[0]['id'] }}">
            <button type="submit">削除</button>
        </form>
    </div>
    <form action="{{ route('update') }}" class="card-body" method="POST">
        @csrf
        <input type="hidden" name="memo_id" value="{{ $edit_memo[0]['id'] }}">
        <div class="form-group">
            <textarea name="content" rows="3" class="form-control" placeholder="ここにメモを入力">{{ $edit_memo[0]['content'] }}</textarea>
            @foreach($tags as $t)
                <div class="form-check form-check-inline mb-3">
                    {{-- $t['id']がinclude_tagsに含まれていればcheckedを付与する --}}
                    <input type="checkbox" class="form-check-input" name="tags[]" id="{{ $t['id'] }}" value="{{ $t['id'] }}"
                    {{ in_array($t['id'], $include_tags) ? 'checked' : '' }}>
                    <label for="{{ $t['id'] }}" class="form-check-lavel">{{ $t['name'] }}</label>
                </div>
            @endforeach
        </div>
        <button class="btn btn-primary mt-2" type="submit">更新</button>
    </form>
</div>
@endsection
