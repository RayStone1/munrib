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
                <create-subject/>
                <create-source/>
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
        SearchForm:()=>import('../components/search/Form'),
        SearchTable:()=>import('../components/search/Table'),
        CreateSubject:()=>import('../components/CreateSubject'),
        CreateSource:()=>import('../components/CreateSource')
    },
    methods:{

    }
}
</script>

<style>

</style>
