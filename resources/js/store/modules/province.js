const state= {
    Allprovince:null
}
const getters= {
    Allprovince:state=>{
        return state.Allprovince
    }
}
const mutations= {
    setProvince(state,Allprovince){
        state.Allprovince=Allprovince
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
