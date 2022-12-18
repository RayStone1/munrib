const state= {
    province:null,
    mun_one:null,
    mun_two:null,
    name:null,
    source_rules:{
        province:null,
        mun_one:null,
        mun_two:null,
        name:null,
    },
    sources:null,
}
const getters= {
    province:state=>{
        return state.province
    },
    mun_one:state=>{
        return state.mun_one
    },
    mun_two:state=>{
        return state.mun_two
    },
    name:state=>{
        return state.name
    },
    sources:state=>{
        return state.sources
    },
    ACTIVE_PROVINCE:state=>{
        return state.source_rules.province
    },
    ACTIVE_MUNONE:state=>{
        return state.source_rules.mun_one
    },
    ACTIVE_MUNTWO:state=>{
        return state.source_rules.mun_two
    },
    ACTIVE_NAME:state=>{
        return state.source_rules.name
    },

}
const mutations= {
    setProvince(state,province){
        state.province=province
    },
    setMunOne(state,mun_one){
        state.mun_one=mun_one
    },
    setMunTwo(state,mun_two){
        state.mun_two=mun_two
    },
    setName(state,name){
        state.name=name
    },
    setSources(state,sources){
        state.sources=sources
    },
    setActiveProvince(state,province){
        state.source_rules.province=province
    },
    setActiveMunOne(state,mun_one){
        state.source_rules.mun_one=mun_one
    },
    setActiveMunTwo(state,mun_two){
        state.source_rules.mun_two=mun_two
    },
    setActiveName(state,name){
        state.source_rules.name=name
    },
}
const actions= {
    async getProvince({commit}){
        const res=await axios.get("api/province")
        commit('setProvince',res.data.data)
    },
    async getMunOne({commit}){
        const res=await axios.get("api/mun-one", {params: state.source_rules})
        commit('setMunOne',res.data.data)
    },
    async getMunTwo({commit},) {
        const res = await axios.get("api/mun-two", {params: state.source_rules})
        commit('setMunTwo',res.data.data)
    },
    async getName({commit}) {
        const res = await axios.get("api/names", {params: state.source_rules})
        commit('setName', res.data.data)
    },
    async getSources({commit}) {
        const res = await axios.get("api/source", {params: state.source_rules})
        commit('setSources', res.data.data)
    },
}
export default  {
    state,mutations,getters,actions
}
