const state= {
    search:null
}
const getters= {
    search:state=>{
        return state.search
    }
}
const mutations= {
    setSearch(state,search){
        state.search=search
    }
}
const actions= {
    updateSearch({state,commit,dispatch},data){
        commit('setSearch',data)
    },
}
export default  {
    state,mutations,getters,actions
}
