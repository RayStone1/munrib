<template>
    <v-container
    >
        <v-row class="pt-8">
            <v-col
                lg="4"
                md="6"
                cols="12"
            >
                <search-form
                    @source_rules="setRules"
                />
            </v-col>
            <v-col
                lg="8"
                md="6"
                cols="12"
            >
                <search-table
                @editItem="openSubject"
                />
                <v-btn
                    v-if="!isProvinceOrSource"
                    class="mt-7"
                    outlined
                    @click="openSubject('create')"
                >
                    <v-icon>
                        mdi-plus-box
                    </v-icon>
                    Добавить субъект
                </v-btn>
                <dialog-subject
                    v-model="dialogSubject"
                    :method="method"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapActions, mapMutations,mapGetters} from "vuex";
export default {
    name: "Search",
    data:()=>({
        source_rules:null,
        dialogSubject:false,
        dialogCreate:false,
        editedSubject:{
            name:null,
            minD:null
        },
        defaultSubject:{
            name:null,
            minD:null
        },
        method:null,
    }),
    mounted() {
        this.setSource(null)

    },
    components:{
        SearchForm:()=>import('../components/search/Form'),
        SearchTable:()=>import('../components/search/Table'),
        DialogSubject:()=>import('../components/form/DialogSubject'),
        CreateSource:()=>import('../components/CreateSource')
    },
    computed:{
        ...mapGetters(['province','mun_one',"mun_two","name","source","activeType"]),
        isProvinceOrSource(){
            return this.activeType=='province' || this.activeType=='source'
        }
    },
    methods:{
        ...mapMutations(["setSource"]),
        openSubject(method,item){
            this.editedSubject=item??this.defaultSubject
            this.method=method
            this.dialogSubject=true
        },
        setRules(val){
            this.source_rules=val
        }
    },

}
</script>

<style>

</style>
