<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Chatroom;
use Illuminate\Support\Facades\Auth;

class AppController extends Controller
{
    public function index () {
        $data = ['user' => Auth::user(), 'rooms' => Chatroom::all(),'users'=> User::all()];
        return view('app', ['data' => $data]);
    }
}
