<template>
    <v-dialog
        v-model="dialogEdit"
        persistent
        max-width="600px"
    >
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
                        v-model="editedItem.name"
                    ></v-text-field>
                    <v-select
                        class="main--input"
                        :items="[1,2,3,4]"
                        clearable
                        label="MinD"
                        outlined
                        v-model="editedItem.mind"
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
                    @click="dialog=false"
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
    name: "DialogSubject",
    props:{
        dialogEdit:{
            type:Boolean,
        },
        editedItem:{
            type:Object,
            default(){
                return {
                    name:null,
                    mind:null
                }

            }
        }
    },
    data:()=>({
        errors:null,

    }),
    methods: {
    },
    computed:{
        dialog:{
            get(){
                return this.dialogEdit;
            },
            set(val){
                this.$emit('closeDialog',val)
            }
        }
    }
}
</script>

<style scoped>

</style>
