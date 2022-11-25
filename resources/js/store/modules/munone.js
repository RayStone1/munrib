const state= {
    mun_one:null
}
const getters= {
    mun_one:state=>{
        return state.mun_one
    }
}
const mutations= {
    setMunOne(state,mun_one){
        state.mun_one=mun_one
    }
}
const actions= {
    getMunOne({state,commit,dispatch},filter){
        axios.get("api/mun-one",{params:filter})
            .then(res=>{
                commit('setMunOne',res.data.data)
            })
    },
}
export default  {
    state,mutations,getters,actions
}
