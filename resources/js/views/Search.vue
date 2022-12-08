<template>
    <v-container
    >
        <v-row class="pt-8">
            <v-col
                class="pa-8"
                lg="4"
                md="6"
                cols="12"
            >
            <search-form

            />
            </v-col>
            <v-col
                lg="8"
                md="6"
                cols="12"
            >
                <search-table/>
                <v-btn
                    class="mt-7"
                    outlined
                    @click="openSubject"
                >
                    <v-icon>
                        mdi-plus-box
                    </v-icon>
                    Добавить субъект
                </v-btn>
                <create-source/>
                <dialog-subject
                    :dialog-edit="dialogCreate"
                    @closeDialog="dialogCreate=$event"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
export default {
    name: "Search",
    data:()=>({
        source_rules:{
            province:null,
            mun_one:null,
            mun_two:null,
            name:null,
        },
        result:null,
        dialogCreate:false
    }),
    mounted() {
        this.setSource(null)
        this.setType(null)
    },
    components:{
        SearchForm:()=>import('../components/search/Form'),
        SearchTable:()=>import('../components/search/Table'),
        DialogSubject:()=>import('../components/form/DialogSubject'),
        CreateSource:()=>import('../components/CreateSource')
    },
    methods:{
        ...mapMutations(['setType',"setSource"]),
        openSubject(item=false){
            this.dialogCreate=true
        },
    },
    computed:{

    }
}
</script>

<style>

</style>
