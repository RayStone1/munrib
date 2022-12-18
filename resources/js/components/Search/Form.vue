<template>
    <v-form @submit.prevent="findSource" class="pa-4 white">
        <h4 class="mb-7">Выберите необходимый уровень</h4>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            label="Субъект федерации"
            v-model="ACTIVE_PROVINCE"
            @click:clear="findProvince(),clear('province')"
            :items="province"
            item-text="name"
            item-value="id"
        ></v-autocomplete>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            label="Муниципальные образования 1ого уровня"
            v-model="ACTIVE_MUNONE"
            @click:clear="findMunOne(),clear('mun-one')"
            :disabled="!ACTIVE_PROVINCE"
            :items="mun_one"
            item-text="name"
            item-value="id"
        ></v-autocomplete>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            label="Муниципальные образования 2ого уровня"
            v-model="ACTIVE_MUNTWO"
            @click:clear="findMunTwo(),clear('mun-two')"
            :disabled="!ACTIVE_MUNONE"
            :items="mun_two"
            item-text="name"
            item-value="id"
        ></v-autocomplete>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            label="Орган власти"
            v-model="ACTIVE_NAME"
            @click:clear="findName(),clear('name')"
            :disabled="!ACTIVE_MUNONE"
            :items="name"
            item-text="name"
            item-value="id"
        ></v-autocomplete>
        <v-btn
            class="rounded-lg mt-1"
            type="submit"
            prepend-ico=""
            color="primary"
            block
            x-large
        >
            <v-icon

            >mdi-filter
            </v-icon>
            Применить фильтр
        </v-btn>
    </v-form>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
export default {
    name: "Form",
    mounted() {
        this.ActiveType(null)
        this.findProvince();
        this.clear('province')
    },
    data:()=>({
    }),
    watch:{
        source_rules: {
            handler: function (val) {
                this.$emit('source_rules',val)
            },
            deep: true
        },
        ACTIVE_PROVINCE(val){
            !val || this.findMunOne()
        },
        ACTIVE_MUNONE(val){
            !val || this.findMunTwo()
        },
        ACTIVE_MUNTWO(val){
            !val || this.findName()
        },
    },
    methods:{
        ...mapActions([
            "getProvince",
            "getMunOne",
            "getMunTwo",
            "getName",
            "getSources",
            "ActiveType"
        ]),
        clear(type){
            switch (type){
                case "province":
                    this.ACTIVE_PROVINCE=null
                case "mun-one":
                    this.ACTIVE_MUNONE=null
                case "mun-two":
                    this.ACTIVE_MUNTWO=null
                case "name":
                    this.ACTIVE_NAME=null
            }
        },
        async findProvince(){
            await this.getProvince()
            this.ActiveType("province")
        },
        async findMunOne(){
            await this.getMunOne()
            this.ActiveType("mun-one")
        },
        async findMunTwo(){
            await this.getMunTwo()
            if (Object.keys(this.mun_two)==0){
                this.findName();
                return
            }
            this.ActiveType("mun-two")
        },
        async findName(){
            await this.getName()
            this.ActiveType("names")
        },
        async findSource(){
            await this.getSources()
            this.ActiveType("source")
        },
    },
    computed:{
        ...mapGetters(["province","mun_one","mun_two","name","activeType"]),
        ACTIVE_PROVINCE:{
            get() { return this.$store.getters.ACTIVE_PROVINCE; },
            set(value) { this.$store.commit('setActiveProvince', value); },
        },
        ACTIVE_MUNONE:{
            get() { return this.$store.getters.ACTIVE_MUNONE; },
            set(value) { this.$store.commit('setActiveMunOne', value); },
        },
        ACTIVE_MUNTWO:{
            get() { return this.$store.getters.ACTIVE_MUNTWO; },
            set(value) { this.$store.commit('setActiveMunTwo', value); },
        },
        ACTIVE_NAME:{
            get() { return this.$store.getters.ACTIVE_NAME; },
            set(value) { this.$store.commit('setActiveName', value); },
        },
    },
}
</script>

<style scoped>

</style>
