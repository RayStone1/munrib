const state= {
    mun_two:null
}
const getters= {
    mun_two:state=>{
        return state.mun_two
    }
}
const mutations= {
    setMunTwo(state,mun_two){
        state.mun_two=mun_two
    }
}
const actions= {
    async getMunTwo({state, commit, dispatch}, filter) {
        const res = await axios.get("api/mun_two", {params: filter})
        commit('setMunTwo',res.data.data)
    },
    createMunTwo({commit},data){
        axios.post("api/mun_two",data)
            .then(res=>{

            })
            .catch(e=>{
            })
    }
}
export default  {
    state,mutations,getters,actions
}
