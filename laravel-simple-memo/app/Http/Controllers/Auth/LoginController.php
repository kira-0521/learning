<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(Auth::attempt($credentials)){
            return response(200)->json(['status_code' => 200,'message' => 'success']);
        } else {
            return response()->json(['status_code' => 500,'message' => 'Unauthorized']);
        }
    }

    public function logout()
    {
        Auth::logout();
        return response(200)->json(['status_code' => 200,'message' => 'Logged out']);
    }

}
