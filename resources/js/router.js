import vueRouter from "vue-router";
import Vue from "vue";
const Search= () => import('./pages/Search.vue')
const Login= () => import('./pages/Login.vue')
const Main=()=>import('./pages/Main.vue')
Vue.use(vueRouter);

const routes=[
    {
        path:'/',
        component:Main,
        name:"index",
    },
    // {
    //     path:'/test',
    //     component:Test,
    // },
    {
        path:'/search',
        component:Search,
        props: true
    },

]

export default new vueRouter({
    mode:'history',
    routes
})
