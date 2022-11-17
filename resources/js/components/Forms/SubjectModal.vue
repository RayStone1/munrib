<template>
    <v-row justify="center" >
        <v-dialog
            v-model="sub_dialog"
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
                    Субъект
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Добавить новый субъект</span>
                    <v-spacer/>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="sub_dialog = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-autocomplete
                                    outlined
                                    :items="types_item"
                                    item-text="text"
                                    item-value="id"
                                    label="Тип субъекта"
                                    v-model="subject.type"
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    :error="error"
                                    :error-messages="error_message"
                                    label="Название субъекта"
                                    outlined
                                    v-model="subject.name"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="addSubject()"
                    >
                        Добавить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "SubjectModal",
    data:()=>({
        sub_dialog:false,
        subject:{
          type:null,
          name:null
        },
        types_item:[
            {id:2,text:"Муниципальные образования 1ого уровня"},
            {id:3,text:"Муниципальные образования 2ого уровня"},
            {id:4,text:"Орган власти"},
        ],
        error:false,
        error_message:[],
    }),
    methods:{
        addSubject(){
            axios.post(`api/${this.typeSubject(this.subject.type)}`,{"name":this.subject.name})
                .then(res=>{
                    this.subject.name=null
                    this.subject.type=null
                })
                .catch(error=>{

                })

        },
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
        }
    },
}
</script>

<style scoped>

</style>
