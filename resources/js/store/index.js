import Vue from 'vue'
import Vuex from 'vuex'
import Province from "./modules/province";
import MunOne from "./modules/munone";
import MunTwo from "./modules/muntwo";
import Name from "./modules/name";
import Source from "./modules/source";
import typeSubject from "./modules/typeSubject";


Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Province,
        MunOne,
        MunTwo,
        Name,
        Source,
        typeSubject,
    }
})
