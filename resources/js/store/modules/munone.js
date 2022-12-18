const state= {
    Allmun_one:null
}
const getters= {
    Allmun_one:state=>{
        return state.Allmun_one
    }
}
const mutations= {
    setMunOne(state,Allmun_one){
        state.Allmun_one=Allmun_one
    }
}
const actions= {
    async getMunOne({commit}){
        const res=await axios.get("api/mun_one")
        commit('setMunOne',res.data.data)
    }
}
export default  {
    state,mutations,getters,actions
}
