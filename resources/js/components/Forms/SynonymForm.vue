<template>
    <v-row justify="center">
        <v-dialog
            v-model="synonym_dialog"
            persistent
            max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    color="transparent"
                    elevation="0"
                >
                    Синоним
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Добавить новый синоним</span>
                    <v-spacer/>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="synonym_dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                            >
                                <v-select
                                    :items="types_item"
                                    item-value="id"
                                    label="Тип субъекта"
                                    v-model="type_subject"
                                    required
                                    outlined
                                    @change="getSubject"
                                ></v-select>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-autocomplete
                                    label="Субъект"
                                    no-data-text="Выберете тип субъекта"
                                    :loading="loading"
                                    :disabled="loading"
                                    :items="subjects"
                                    item-text="name"
                                    item-value="id"
                                    v-model="synonym.parent"
                                    outlined
                                    required
                                ></v-autocomplete>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-text-field
                                    outlined
                                    label="Синоним"
                                    v-model="synonym.name"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="sendSynonym"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "SynonymForm",
    data:()=>({
        synonym_dialog:false,
        types_item:[
            {id:2,text:"Муниципальные образования 1ого уровня"},
            {id:3,text:"Муниципальные образования 2ого уровня"},
            {id:4,text:"Орган власти"},
        ],
        type_subject:null,
        subjects:null,
        synonym:{
            parent:null,
            name:null,
        },
        loading:false,
    }),
    methods:{
        typeSubject(id){
            switch (id) {
                case 2:
                    return "mun-one"
                    break
                case 3:
                    return "mun-two"
                    break
                case 4:
                    return "names"
                    break
            }
        },
        getSubject(){
            this.loading=true
            axios.get(`api/${this.typeSubject(this.type_subject)}`)
                .then(res=>{
                    this.subjects=res.data.data;
                    this.loading=false;
                })
        },
        sendSynonym(){
            axios.post(`api/${this.typeSubject(this.type_subject)}/${this.synonym.parent}/synonym`,{name:this.synonym.name})
                .then(res=>{
                    this.synonym.name=null
                    this.synonym.parent=null
                    this.type_subject=null

                    console.log(res);
                })
                .catch(error=>{
                    console.log(error)
                })
        }
    }
}
</script>

<style scoped>

</style>
