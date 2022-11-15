<?php

namespace App\Http\Controllers;

use App\Http\Requests\MunTwoRequest;
use App\Http\Resources\MunTwoResource;
use App\Models\MunTwo;
use Illuminate\Http\Request;

class MunTwoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $mun_two=MunTwo::all();
        return MunTwoResource::collection($mun_two);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(MunTwoRequest $request)
    {
        $result=MunTwo::firstOrCreate([
            'name'=>$request->name
        ]);
        return $result;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MunTwo  $munTwo
     * @return \Illuminate\Http\Response
     */
    public function show(MunTwo $mun_two)
    {
        return new MunTwoResource($mun_two);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MunTwo  $munTwo
     * @return \Illuminate\Http\Response
     */
    public function edit(MunTwo $munTwo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MunTwo  $munTwo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MunTwo $munTwo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MunTwo  $munTwo
     * @return \Illuminate\Http\Response
     */
    public function destroy(MunTwo $munTwo)
    {
        //
    }
}
