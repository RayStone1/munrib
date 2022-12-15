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
    async getName({commit}, filter) {
        const res = await axios.get("api/names", {params: filter})
        commit('setName', res.data.data)
    },
    createName({commit},data){
        axios.post("api/names",data)
            .then(res=>{
                console.log(res.status)
            })
            .catch(e=>{
            })
    }
}
export default  {
    state,mutations,getters,actions
}
