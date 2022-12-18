<template>
    <v-dialog
        v-model="value"
        persistent
        max-width="600px"
    >
        <v-card>
            <v-card-title>
                <span class="text-h5">Добавить  </span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-text-field
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Субъекты РФ"
                        v-model="item.name"
                    ></v-text-field>
                    <v-select
                        class="main--input"
                        :items="[1,2,3,4]"
                        clearable
                        label="MinD"
                        v-model="item.minD"
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
                    @click="create"
                >
                    Добавить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    name: "CreateSubject",
    props:{
        value:{
            type:Boolean,
        },
    },
    data:()=>({
        errors:null,
       item:{
           name:null,
           minD:null,
       }
    }),
    computed:{
        ...mapGetters(['activeType']),

    },
    methods:{
        closeDialog(){
            this.$emit('input',false)
            this.item.name=this.item.minD=this.errors=null
        },
        create(){
            axios.post(`/api/${this.activeType}`,this.item)
                .then(res=>{
                    this.closeDialog()
                })
                .catch(err=>{
                    this.errors=err.response.data.errors
                })
        }
    }
}
</script>

<style scoped>

</style>
