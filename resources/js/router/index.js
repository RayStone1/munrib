import Vue from 'vue'
import VueRouter from 'vue-router'
//Views
import Search from "../views/Search";
import Source from "../views/Source";

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Search,
        name:"index",
    },
    {
        path:'/source/:id',
        component:Source,
        name:"source",
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
