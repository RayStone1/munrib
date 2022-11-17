<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateRequest;
use App\Models\MunOne;
use App\Models\MunTwo;
use App\Models\Name;
use App\Models\Province;
use Illuminate\Http\Request;

class CreateController extends Controller
{
    public function __invoke(CreateRequest $request)
    {
        $data=$request->validated();
        $modal="";
        switch ($data['model']){
            case "name":
                $modal=Name::class;
                break;
            case "mun-one":
                $modal=MunOne::class;
                break;
            case "mun-two":
                $modal=MunTwo::class;
                break;
        }
        unset($data['model']);
        $modal::firstOrCreate($data);

    }
}
