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
                Добавить {{test.text}}
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Добавить {{test.text}}</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog = false"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "CreateBtn",
    props:{
        test:{
            type:[Array,Object],
            default:()=>({
                text:'Субъект РФ',
                name:'province'
            })
        },

    },
    mounted() {

    },
    data:()=>({
        dialog: false,
    })
}
</script>

<style scoped>

</style>
