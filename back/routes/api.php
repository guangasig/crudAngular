<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
pet 4-5
5-7 marzo
julio
817 dolares
15% = 700
10 % = 10
marzo =
|
 */
Route::post('login', [ApiController::class, 'login']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'seguridad', 'middleware' => 'auth:sanctum'], function () {
    Route::get('users', [ApiController::class, 'users']);
    // Route::apiResource('estudiantes', );
});
