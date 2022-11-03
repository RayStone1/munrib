<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Source extends Model
{

    protected $table="fs_sources";
    public $timestamps=false;

    public function rules()
    {
        return $this->hasOne(SourceRules::class,'source_id','id');
    }
}
