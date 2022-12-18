const state= {
    province_list:null
}
const getters= {
    province_list:state=>{
        return state.province_list
    }
}
const mutations= {
    setProvinceList(state,province){
        state.province_list=province
    }
}
const actions= {
    async getProvinceList({commit}){
        const res=await axios.get("api/province")
        commit('setProvinceList',res.data.data)
    },
}
export default  {
    state,mutations,getters,actions
}
