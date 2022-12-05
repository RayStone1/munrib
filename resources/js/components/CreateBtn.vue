<template>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="mt-7"
                outlined
                v-bind="attrs"
                v-on="on"
            >
                <v-icon>
                    mdi-plus-box
                </v-icon>
                Добавить {{typeSubject.text}}
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Добавить {{typeSubject.text}}</span>
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
                        outlined
                        v-model="minD"
                    ></v-select>
                    <div v-if="errors" class="errors">
                        <v-alert
                            dense
                            outlined
                            type="error"
                            v-for="(val,name) in errors"
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
                    @click="closeDialog"
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
export default {
    name: "CreateBtn",
    props:{
        typeSubject:{
            type:[Array,Object],
        },

    },
    mounted() {
    },
    data:()=>({
        dialog: false,
        name:null,
        minD:null,
        errors:null,
    }),
    computed:{
        subject(){
            return {
                name:this.name,
                type: this.typeSubject.name,
                minD: this.minD,
                isLoading:false
            }
        }
    },
    methods:{
        create(){
            axios.post(`api/${this.subject.type}`, this.subject)
                .then(res => {
                    this.name = null
                    this.minD = null
                    this.errors = null
                })
                .catch(err => {
                    if(err.response){
                        this.errors = err.response.data.errors
                    }
                })
        },
        closeDialog(){
            this.dialog=false,
            this.name=null
            this.minD=null
            this.errors=null
        }
    }
}
</script>

<style scoped>

</style>
