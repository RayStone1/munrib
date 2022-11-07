<?php

namespace App\Http\Controllers;

use App\Http\Filters\MunOneFilter;
use App\Http\Filters\SourceFilter;
use App\Http\Requests\MunOneRequest;
use App\Http\Resources\MunOneResource;
use App\Models\MunOne;
use App\Models\SourceRules;
use Illuminate\Http\Request;

class MunOneController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(MunOneRequest $request)
    {
        $data=$request->validated();
        if(isset($data['province'])){
            $data=$request->validated();
            $filter=app()->make(MunOneFilter::class,['queryParams'=>array_filter($data)]);
            $mun_one=SourceRules::select('l1_id')->filter($filter)->groupBy('l1_id')->get();

        }
        else{
            $mun_one=MunOne::all();
        }
        return MunOneResource::collection($mun_one);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MunOne  $munOne
     * @return \Illuminate\Http\Response
     */
    public function show(MunOne $mun_one)
    {
        return new MunOneResource($mun_one);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MunOne  $munOne
     * @return \Illuminate\Http\Response
     */
    public function edit(MunOne $munOne)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MunOne  $munOne
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MunOne $munOne)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MunOne  $munOne
     * @return \Illuminate\Http\Response
     */
    public function destroy(MunOne $munOne)
    {
        //
    }
}
