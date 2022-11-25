const state= {
    name:null
}
const getters= {
    name:state=>{
        return state.name
    }
}
const mutations= {
    setName(state,name){
        state.name=name
    }
}
const actions= {
    getName({state,commit,dispatch},filter){
        axios.get("api/names",{params:filter})
            .then(res=>{
                commit('setName',res.data.data)
            })
    },
}
export default  {
    state,mutations,getters,actions
}