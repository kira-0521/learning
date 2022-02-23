@extends('layouts.app')

@section('content')
<div class="card">
    <div class="card-header"></div>
    <form action="{{ route('store') }}" class="card-body" method="POST">
        @csrf
        <div class="form-group">
            <textarea name="content" rows="3" class="form-control" placeholder="ここにメモを入力"></textarea>
        </div>
        <button class="btn btn-primary mt-2" type="submit">保存</button>
    </form>
</div>
@endsection
