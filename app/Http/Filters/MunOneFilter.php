<?php

namespace App\Http\Filters;

<<<<<<< HEAD
use Illuminate\Database\Eloquent\Builder;

class MunOneFilter extends AbstractFilter
{
    public const PROVINCE='province';

    protected function getCallbacks(): array
    {
        return [
            self::PROVINCE=>[$this,'province'],
        ];
    }
    public function province(Builder $builder,$value){
        $builder->where('province_id',$value);
    }
=======
class MunOneFilter
{

>>>>>>> bedcd6e (deУ)
}
