<?php

namespace App\Http\Resources;

use App\Models\SourceRules;
use Illuminate\Http\Resources\Json\JsonResource;

class SourceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'header_name'=>$this->header_name,
            'topic_name'=>$this->topic_name,
            'rules'=>new SourceRulesResource($this->rules)
        ];
    }
}
