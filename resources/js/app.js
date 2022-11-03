require('./bootstrap');
import Vue from "vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css"
import App from "./App.vue";
Vue.use(Vuetify);


const app = new Vue({

    vuetify:new Vuetify(
        {
            theme: {
                base:"#0055A3",
            },
            icons: {
                iconfont: 'mdiSvg',
            },
        }
    ),
    router,
    render: function (h) { return h(App) },
}).$mount('#app');
