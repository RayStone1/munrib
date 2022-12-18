const state= {
    mun_one_list:null
}
const getters= {
    mun_one_list:state=>{
        return state.mun_one_list
    }
}
const mutations= {
    setMunOneList(state,mun_one){
        state.mun_one_list=mun_one
    }
}
const actions= {
    async getMunOneList({commit}){
        const res=await axios.get("api/mun-one")
        commit('setMunOneList',res.data.data)
    }
}
export default  {
    state,mutations,getters,actions
}
