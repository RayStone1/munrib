const state= {
    Allname:null
}
const getters= {
    Allname:state=>{
        return state.Allname
    }
}
const mutations= {
    setName(state,Allname){
        state.Allname=Allname
    }
}
const actions= {
    async getName({commit}) {
        const res = await axios.get("api/names")
        commit('setName', res.data.data)
    },
}
export default  {
    state,mutations,getters,actions
}
