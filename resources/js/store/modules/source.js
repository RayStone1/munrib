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
    getSource({state,commit,dispatch},filter){
        axios.get("api/source",{params:filter})
            .then(res=>{
                commit('setSource',res.data.data)
            })
    },
}
export default  {
    state,mutations,getters,actions
}
