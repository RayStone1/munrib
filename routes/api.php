<?php

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
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware'=>'auth:sanctum'],function (){

});


Route::group(['prefix'=>'source'],function (){
    Route::get('/',[\App\Http\Controllers\SourceController::class,'index']);
    Route::get('/{source}',[\App\Http\Controllers\SourceController::class,'show']);
});
Route::group(['prefix'=>'mun-one'],function (){
    Route::get('/',[\App\Http\Controllers\MunOneController::class,'index']);
    Route::get('/{mun_one}',[\App\Http\Controllers\MunOneController::class,'show']);
    Route::post('/create',[\App\Http\Controllers\MunOneController::class,'store']);
});
Route::group(['prefix'=>'mun-two'],function (){
    Route::get('/',[\App\Http\Controllers\MunTwoController::class,'index']);
    Route::get('/{mun_two}',[\App\Http\Controllers\MunTwoController::class,'show']);
    Route::post('/create',[\App\Http\Controllers\MunTwoController::class,'store']);
});
Route::group(['prefix'=>'names'],function (){
    Route::get('/',[\App\Http\Controllers\NameController::class,'index']);
    Route::get('/{name}',[\App\Http\Controllers\NameController::class,'show']);
});
Route::group(['prefix'=>'province'],function (){
    Route::get('/',[\App\Http\Controllers\ProvinceController::class,'index']);
    Route::get('/{province}',[\App\Http\Controllers\ProvinceController::class,'show']);
    Route::post('/create',[\App\Http\Controllers\ProvinceController::class,'store']);
});
