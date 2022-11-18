import vueRouter from "vue-router";
import Vue from "vue";
const Search= () => import('./pages/Search.vue')
const Login= () => import('./pages/Login.vue')
const Main=()=>import('./pages/Main.vue')
const Source=()=>import('./pages/Source.vue')
Vue.use(vueRouter);

const routes=[
    {
        path:'/',
        component:Main,
        name:"index",
    },
    {
        path:'/source/:id',
        component:Source,
    },
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
