const state= {
    province:null
}
const getters= {
    province:state=>{
        return state.province
    }
}
const mutations= {
    setProvince(state,province){
        state.province=province
    }
}
const actions= {
    async getProvince({commit}){
        const res=await axios.get("api/province")
        commit('setProvince',res.data.data)
    },
}
export default  {
    state,mutations,getters,actions
}
