<template>
    <v-dialog
        v-model="value"
        persistent
        max-width="600px"
    >
        <v-card>
            <v-card-title>
                <span class="text-h5">{{title}} </span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-text-field
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Субъекты РФ"
                        v-model="name"
                    ></v-text-field>
                    <v-select
                        class="main--input"
                        :items="[1,2,3,4]"
                        clearable
                        label="MinD"
                        v-model="minD"
                        outlined
                    ></v-select>
                    <div v-if="errors" class="errors">
                        <v-alert
                            dense
                            outlined
                            type="error"
                            v-for="(val,name) in errors"
                            :key="name"

                        >
                            {{ val[0] }}
                        </v-alert>
                    </div>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="closeDialog()"
                >
                    Отменить
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="sendRequest"
                >
                    {{ title }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "DialogSubject",
    props:{
        value:{
            type:Boolean,
        },
        method:{
            type:String
        },
        item:{
            type:Object
        }
    },
    data:()=>({
        errors:null,
        name:null,
        minD:null,
        parent_id:null,
    }),
    methods: {
        closeDialog(){
            this.$emit('input',false)
            this.name=this.minD=this.errors=null
        },
        sendRequest(){
            let type=this.activeType,
                method=this.method=='edit'?'PUT':'POST',
                url
            switch (this.method) {
                case "create":
                    url=`/api/${type}`
                    break
            }
            console.log(url)
            axios({
                method,
                url,
                data:{
                    name:this.name,
                    minD:this.minD
                }
            })
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    this.errors=err.response.data.errors
                })
        }
    },
    computed:{
        ...mapGetters(['activeType',"synonym"]),
        title(){
            return this.method=='edit'?'Изменить' : 'Добавить'
        },
    }
}
</script>

<style scoped>

</style>
