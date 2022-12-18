const state= {
    name_list:null
}
const getters= {
    name_list:state=>{
        return state.name_list
    }
}
const mutations= {
    setNameList(state,name){
        state.name_list=name
    }
}
const actions= {
    async getNameList({commit}) {
        const res = await axios.get("api/names")
        commit('setNameList', res.data.data)
    },
}
export default  {
    state,mutations,getters,actions
}
