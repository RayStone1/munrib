<?php

namespace App\Http\Controllers;

use App\Http\Filters\SourceFilter;
use App\Http\Requests\SourceRequest;
use App\Http\Resources\SearchSourceResource;
use App\Http\Resources\SourceResource;
use App\Http\Resources\SourcesResources;
use App\Models\Source;
use App\Models\SourceRules;
use Illuminate\Http\Request;

class SourceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(SourceRequest $request)
    {
        $data=$request->validated();
        $filter=app()->make(SourceFilter::class,['queryParams'=>array_filter($data)]);
        return $data;
        $sources=SourceRules::filter($filter)->get();
        return SourceResource::collection($sources);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Source $source)
    {

        return new SourceResource($source);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
