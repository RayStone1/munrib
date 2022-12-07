<template>
    <v-dialog
        v-model="dialog_source"
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
                Добавить источник
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Добавить источник</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Субъекты РФ"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Муниципальные образования 1ого уровня"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Муниципальные образования 2ого уровня"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Орган власти"
                    ></v-autocomplete>
                    <v-text-field
                        label="В родительном падеже"
                        outlined
                    ></v-text-field>
                    <v-text-field
                        label="topic_name"
                        outlined
                    ></v-text-field>
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
                >
                    Добавить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "CreateSource",
    data:()=>({
        dialog_source: false,
        name:null,
        minD:null,
        errors:null,
    }),
    methods:{
        closeDialog(){
            this.dialog_source=false,
            this.errors=null
        }
    }
}
</script>

<style scoped>

</style>
