<template>
    <form @submit.prevent="submit" class="">
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

                                auto-select-first
                                rounded
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
                    :disabled=SearchButtom
                >
                    <v-icon left>
                        mdi-magnify
                    </v-icon>
                    Поиск
                </v-btn>
            </v-col>
        </v-row>

    </form>
</template>

<script>
export default {
    name: "SearchForm",
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
        }
    },
    mounted() {
        this.getSearchData();
    },
    methods:{
        getProvince(){
            axios.get("api/province")
                .then(res=>{
                    this.province_item=res.data.data
                })
        },
        getMunOne(){
            axios.get("api/mun-one")
                .then(res=>{
                    this.mun_one_item=res.data.data
                })
        },
        getMunTwo(){
            axios.get("api/mun-two")
                .then(res=>{
                    this.mun_two_item=res.data.data
                })
        },
        getNames(){
            axios.get("api/names")
                .then(res=>{
                    this.names_item=res.data.data
                })
        },
        getSearchData(){
            this.getProvince();
            this.getMunOne();
            this.getMunTwo();
            this.getNames();
        },
        getSources(){
            axios.post('api/search',this.filterData)
                .then(res=>{
                    console.log(res);
                })
        }
    }
}
</script>

<style scoped>
.border-y{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
.border-left-clear{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
}
.border-right-clear{
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
}
</style>
