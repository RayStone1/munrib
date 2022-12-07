<template>
    <v-dialog
        v-model="dialog_subject"
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
                Добавить субъект
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Добавить </span>
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
                >
                    Добавить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "CreateSubject",
    data:()=>({
        dialog_subject: false,
        name:null,
        minD:null,
        errors:null,
    }),
    methods:{
        closeDialog(){
            this.dialog_subject=false
            this.name=this.minD=this.errors=null
        }
    }
}
</script>

<style scoped>

</style>
