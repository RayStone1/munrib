const state= {
    source:null
}
const getters= {
    source:state=>{
        return state.source
    }
}
const mutations= {
    setSource(state,source){
        state.source=source
    }
}
const actions= {
    async getSources({commit}, filter) {
        const res = await axios.get("api/source", {params: filter})
        commit('setSource', res.data.data)
    },
    async getSource({commit},id){
        const source=await axios.get(`/api/source/${id}`)
        commit('setSource',source.data.data)
    }
}
export default  {
    state,mutations,getters,actions
}
