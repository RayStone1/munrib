<template>
    <v-app id="inspire">

        <app-header/>
        <router-view></router-view>
    </v-app>
</template>


<script>

export default {
    data() {
        return {
            drawer: false
        };
    },

    components: {
        appHeader: ()=>import("./components/AppHeader")
    },

    methods: {


    },
};
</script>
<style>

h1{
    font-weight: 300;
    font-size: 96px;
    line-height: 120%;
}
h2{
    font-weight: 300;
    font-size: 60px;
    line-height: 120%;
}
h3{
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
}
h4{
    font-weight: 400;
    font-size: 34px;
    line-height: 120%;
}
h5{
    font-weight: 400;
    font-size: 24px;
    line-height: 120%;
}
h6{
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
}
.v-button.v-size--default{
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
}
.v-button.v-size--large{
    font-weight: 500;
    font-size: 15px;
    line-height: 120%;
}
.v-button.v-size--small{
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
}
.v-button.v-size--x-large{
    font-weight: 500;
    font-size: 17px;
    line-height: 120%;
}
input{
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
}
.base--text{
    color: #0055A3;
}
</style>
