<?php

use App\Http\Controllers\MunOneController;
use App\Http\Controllers\MunOneSynonymController;
use App\Http\Controllers\MunTwoController;
use App\Http\Controllers\MunTwoSynonymController;
use App\Http\Controllers\NameController;
use App\Http\Controllers\NameSynonymController;
use App\Http\Controllers\ProvinceController;
use App\Http\Controllers\SourceController;
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
//
//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
//Route::group(['middleware'=>'auth:sanctum'],function (){
//
//});

Route::post('create',\App\Http\Controllers\CreateController::class);


Route::resource('mun-one',MunOneController::class)->only(['show','index','store']);
Route::resource('mun-one.synonym',MunOneSynonymController::class)->except(['edit','create'])->scoped();

Route::resource('mun-two',MunTwoController::class)->only(['show','index','store']);
Route::resource('mun-two.synonym',MunTwoSynonymController::class)->except(['edit','create'])->scoped();

Route::resource('names',NameController::class)->only(['show','index','store']);
Route::resource('names.synonym',NameSynonymController::class)->except(['edit','create'])->scoped();

Route::resource('province',ProvinceController::class)->only(['show','index']);


Route::resource('source',SourceController::class)->only(['show','index']);
