const state= {
    Allmun_two:null
}
const getters= {
    Allmun_two:state=>{
        return state.Allmun_two
    }
}
const mutations= {
    setMunTwo(state,Allmun_two){
        state.Allmun_two=Allmun_two
    }
}
const actions= {
    async getMunTwo({state, commit, dispatch}) {
        const res = await axios.get("api/mun_two",)
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
