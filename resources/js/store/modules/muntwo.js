const state= {
    mun_two_list:null
}
const getters= {
    mun_two_list:state=>{
        return state.mun_two_list
    }
}
const mutations= {
    setMunTwoList(state,mun_two){
        state.mun_two_list=mun_two
    }
}
const actions= {
    async getMunTwoList({commit}) {
        const res = await axios.get("api/mun-two",)
        commit('setMunTwoList',res.data.data)
    },
}
export default  {
    state,mutations,getters,actions
}
