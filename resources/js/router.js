import vueRouter from "vue-router";
import Vue from "vue";
const Test= () => import('./pages/Test.vue')
const Login= () => import('./pages/Login.vue')
const Main=()=>import('./pages/Main.vue')
Vue.use(vueRouter);

const routes=[
    {
        path:'/',
        component:Main,
        name:"index",
    },
    {
        path:'/test',
        component:Test,
    },
    // {
    //     path:'/login',
    //     component:Login,
    // },

]

export default new vueRouter({
    mode:'history',
    routes
})
