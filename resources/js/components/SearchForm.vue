<template>

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
            sources:null,
            loading:{
                province:false,
                mun_one:false,
                mun_two:false,
                name:false,
            },
        }
    },
    mounted() {
        this.getSearchData();
    },

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
