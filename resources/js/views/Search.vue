<template>
    <v-container
    >
        <v-row>
            <v-col
                class="pa-8"
                lg="4"
                md="6"
                cols="12"
            >
                <search-form
                    @create="setType"
                />
            </v-col>
            <v-col
                lg="8"
                md="6"
                cols="12"
            >
                <search-list
                />
                <create-btn
                    v-if="type"
                   :test="type"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>


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
        type:null
    }),
    components:{
        SearchList:()=>import('../components/SearchList'),
        CreateBtn:()=>import('../components/CreateBtn'),
        SearchForm:()=>import('../components/SearchForm')

    },
    methods:{
        setType(data){
            this.type=data
        }
    }
}
</script>

<style>

</style>
