const state= {
    activeType:null,
    parent:null,
    synonym:null,
}
const getters= {
    activeType:state=>{
        return state.activeType
    },
    parent:state=>{
        return state.parent
    },
    synonym:state=>{
        return state.synonym
    },

}
const mutations= {
    setType(state,type){
        state.activeType=type
    },
    setParent(state,parent){
        state.parent=parent
    },
    setSynonym(state,synonym){
        state.synonym=synonym
    },
}
const actions= {
    ActiveType({commit},type){
        commit('setType',type)
    },
    setParent({commit},parent){
        commit('setParent',parent)
    },
    setSynonym({commit},synonym){
        commit('setSynonym',synonym)
    }
}
export default  {
    state,mutations,getters,actions
}
