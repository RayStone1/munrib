<template>
    <v-main style="background-color: #fbfcfe">
        <v-container fluid>
            <div>
                <h3>Поиск</h3>
                <form @submit.prevent="" class="">
                    <v-row
                        align="center"
                        justify="space-around"
                        class="my-4"
                    >
                        <v-col
                            col="12"
                            lg="11"

                        >
                            <v-card elevation="0">
                                <v-row

                                    align="center"
                                    justify="space-around"
                                >
                                    <v-col
                                        col="12"
                                        lg="3"
                                        class="pa-0"
                                        outlined
                                        tile
                                    >
                                        <v-autocomplete
                                            class="py-3"
                                            hide-details
                                            auto-select-first
                                            rounded
                                            clearable
                                            :disabled="loading.province"
                                            :loading="loading.province"
                                            @change="getSearchData"
                                            v-model="filterData.province"
                                            :items="province_item"
                                            item-text="name"
                                            item-value="id"
                                            label="Искать по субьектам РФ"
                                        />
                                    </v-col>
                                    <v-divider
                                        vertical
                                    ></v-divider>
                                    <v-col
                                        col="12"
                                        lg="3"
                                        class="pa-0 "
                                        outlined
                                        tile>
                                        <v-autocomplete
                                            class="py-3"
                                            hide-details
                                            auto-select-first
                                            @change="getSearchData"
                                            clearable
                                            :disabled="loading.mun_one"
                                            :loading="loading.mun_one"
                                            v-model="filterData.mun_one"
                                            :items="mun_one_item"
                                            item-text="name"
                                            item-value="id"
                                            rounded
                                            label="Муниципальные образования 1ого уровня"
                                        />
                                    </v-col>
                                    <v-divider

                                        vertical
                                    ></v-divider>
                                    <v-col
                                        col="12"
                                        lg="3"
                                        class="pa-0 "
                                        outlined
                                        tile
                                    >
                                        <v-autocomplete
                                            class="py-3"
                                            hide-details
                                            clearable
                                            auto-select-first
                                            rounded
                                            :disabled="loading.mun_two"
                                            :loading="loading.mun_two"
                                            @change="getSearchData"
                                            v-model="filterData.mun_two"
                                            :items="mun_two_item"
                                            item-text="name"
                                            item-value="id"
                                            label="Муниципальные образования 2ого уровня"
                                        />
                                    </v-col>

                                    <v-divider

                                        vertical
                                    ></v-divider>
                                    <v-col
                                        col="12"
                                        lg="3"
                                        class="pa-0"
                                        outlined
                                        tile>
                                        <v-autocomplete
                                            class="py-3"
                                            hide-details
                                            auto-select-first
                                            rounded
                                            clearable
                                            :disabled="loading.name"
                                            :loading="loading.name"
                                            @change="getSearchData"
                                            v-model="filterData.name"
                                            :items="names_item"
                                            item-text="name"
                                            item-value="id"
                                            label="Органы муниципальных образований"
                                        />
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-col>
                        <v-col
                            class="pa-0 h-100"
                            col="12"
                            lg="1"
                            outlined
                            tile>
                            <v-btn
                                x-large
                                color="primary"
                                @click.prevent="getSources"
                            >
                                <v-icon left>
                                    mdi-magnify
                                </v-icon>
                                Поиск
                            </v-btn>
                        </v-col>
                    </v-row>

                </form>
                <v-row>
                    <line-source v-for="source in sources" :source="source"></line-source>

                </v-row>

            </div>
        </v-container>
        <add-button/>
    </v-main>


</template>

<script>
export default {
    name: "Search",

    data(){
        return{
            filterData:{
                province:null,
                mun_one:null,
                mun_two:null,
                name:null,
            },
            province_item:null,
            mun_one_item:null,
            mun_two_item:null,
            names_item:null,
            sources:null,
            loading:{
                province:false,
                mun_one:false,
                mun_two:false,
                name:false,
            },
        }
    },
    components:{
        lineSource:()=>import("../components/LineSource"),
        searchForm:()=>import( "../components/SearchForm"),
        AddButton:()=>import("../components/AddButton"),
    },
    mounted() {
        this.getSearchData();
    },
    methods:{
        getProvince(){
            this.loading.province=true

            axios.get("api/province")
                .then(res=>{
                    this.province_item=res.data.data
                    this.loading.province=false
                })
        },
        getMunOne(){
            this.loading.mun_one=true
            axios.get("api/mun-one",{params:{
                    "province":this.filterData.province,
                    "name":this.filterData.name,
                }})
                .then(res=>{
                    this.mun_one_item=res.data.data
                    this.loading.mun_one=false
                })
        },
        getMunTwo(){
            this.loading.mun_two=true
            axios.get("api/mun-two",{params:{
                    "mun_one":this.filterData.mun_one,
                    "province":this.filterData.province,
                    "name":this.filterData.name,
                }})
                .then(res=>{
                    this.mun_two_item=res.data.data
                    this.loading.mun_two=false
                })
        },
        getNames(){
            this.loading.name=true
            axios.get("api/names",{params:{
                    "province":this.filterData.province,
                    "mun_one":this.filterData.mun_one,
                    "mun_two":this.filterData.mun_two,
                }})
                .then(res=>{
                    this.names_item=res.data.data
                    this.loading.name=false
                })
        },
        getSearchData(){
            this.getProvince();
            this.getMunOne();
            this.getMunTwo();
            this.getNames();
        },
        getSources(){
            axios.get(`/api/source`,{
                params:this.filterData
            })
                .then(res=>{
                    this.sources=res.data.data;
                    console.log(this.sources);
                })
                .catch(error=>{
                    console.log(error);
                })

        }
    }
}
</script>

<style scoped>

</style>
