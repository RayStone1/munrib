<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Name extends Model
{
    protected $table="fs_names";
    public $timestamps=false;
    protected $guarded=false;

    public function synonyms()
    {
        return $this->hasMany(NameSyn::class,'name_id','id');
    }
}
