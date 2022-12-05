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
    getMunTwo({state,commit,dispatch},filter){

        axios.get("api/mun-two",{params:filter})
            .then(res=>{
                commit('setMunTwo',res.data.data)
            })
    },
    createMunTwo({commit},data){
        axios.post("api/mun-two",data)
            .then(res=>{

            })
            .catch(e=>{
            })
    }
}
export default  {
    state,mutations,getters,actions
}
