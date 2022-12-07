const state= {
    types:[
        {
            name:'Province',
        },
        {
            name:'MunOne',
        },
        {
            name:'MunTwo',
        },
        {
            name:'Name',
        },
    ],
    activeType:null
}
const getters= {
    activeType:state=>{
        return state.activeType
    },

}
const mutations= {
    setType(state,type){
        state.activeType=type
    }
}
const actions= {

}
export default  {
    state,mutations,getters,actions
}
