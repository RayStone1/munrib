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
                        @click="dialog_subject = false"
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
                                    item-value="url"
                                    label="Тип субъекта"
                                    v-model="type_subject"
                                ></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field
                                    label="Название субъекта"
                                    outlined
                                    v-model="name_subject"
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
                        @click="addSubject(type_subject)"
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
        type_subject:null,
        name_subject:null,
        types_item:[
            {url:"/mun-one",text:"Муниципальные образования 1ого уровня"},
            {url:"/mun-two",text:"Муниципальные образования 2ого уровня"},
            {url:"/name",text:"Орган власти"},
        ],
    }),
    methods:{

    },
}
</script>

<style scoped>

</style>
