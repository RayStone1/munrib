const state= {
    activeType:null,
    synonym: false,
}
const getters= {
    activeType:state=>{
        return state.activeType
    },
    synonym:state=>{
        return state.synonym
    }
}
const mutations= {
    setType(state,type){
        state.activeType=type
    },
    setSynonym(state,synonym){
        state.synonym=synonym
    }
}
const actions= {

}
export default  {
    state,mutations,getters,actions
}
