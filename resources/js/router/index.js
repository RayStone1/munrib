import Vue from 'vue'
import VueRouter from 'vue-router'
//Views
import Search from "../views/Search";

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Search,
        name:"index",
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
