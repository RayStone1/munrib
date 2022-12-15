const state= {
    mun_one:null
}
const getters= {
    mun_one:state=>{
        return state.mun_one
    }
}
const mutations= {
    setMunOne(state,mun_one){
        state.mun_one=mun_one
    }
}
const actions= {
    async getMunOne({commit},filter){
        const res=await axios.get("api/mun_one", {params: filter})
        commit('setMunOne',res.data.data)
    },
}
export default  {
    state,mutations,getters,actions
}
