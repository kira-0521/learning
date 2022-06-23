<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if(Auth::attempt($credentials)){
            return response()->json(['status_code' => 200,'message' => 'Login Successful'], 200);
        }
        return response()->json(['message' => 'User not found'], 422);
    }

    public function logout()
    {
        Auth::logout();
        return response(200)->json(['message' => 'Logged out'], 200);
    }

}
