<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class ApiController extends Controller
{
    /**
     * Display a listing of the users.
     *
     * @return \Illuminate\Http\Response
     */
    public function users(Request $request)
    {
        $users = User::all();

        return response()->json($users);
    }

    public function login(Request $request)
    {
        $credentilas = $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);
        
        #Verifica los intentos de login
        if(!Auth::attempt($credentilas))
            return response()->json([
                'status' => false,
                'msg'=>'Correo electrónico o contraseña incorrectos',
            ]);

        #Si todo esta correcto, entonces, generar el token
        $user = $request->user();
        $token = $user->createToken('AccessToken')->plainTextToken;

        return response()->json([
           'status' => true,
           'token' => $token,
           'user' => $user,	
        ]);
    }
}