<template>
    <v-form @submit.prevent="setSource" class="pa-4 white">
        <h4 class="mb-7">Выберите необходимый уровень</h4>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            @click:clear="setProvince(),clear('province')"
            label="Субъекты РФ"
            v-model="source_rules.province"
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
            @click:clear="setMunOne(),clear('mun_one')"
            v-model="source_rules.mun_one"
            :disabled="!source_rules.province"
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
            @click:clear="setMunTwo(),clear('mun_two')"
            v-model="source_rules.mun_two"
            :disabled="!source_rules.mun_one"
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
            @click:clear="setName(),clear('name')"
            v-model="source_rules.name"
            :disabled="!source_rules.mun_one"
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
import {mapActions, mapMutations,mapGetters} from "vuex";

export default {
    name: "Form",
    data:()=>({
        source_rules:{
            province:null,
            mun_one:null,
            mun_two:null,
            name:null,
        },
    }),
    watch:{
        source_rules: {
            handler: function (val) {
                this.$emit('source_rules',val)
            },
            deep: true
        },
        'source_rules.province':function (val){
            !val || this.setMunOne()
        },
        'source_rules.mun_one':function (val){
            !val || this.setMunTwo()
        },
        'source_rules.mun_two':function (val){
            !val || this.setName()
        },
        // 'source_rules.name':function (val){
        //     !val || this.setType('mun_one')
        // },

    },
    mounted() {
        this.setProvince()
    },
    methods:{
        ...mapMutations(['setType']),
        ...mapActions(['getProvince',"getMunOne","getMunTwo","getName","getSources"]),
        clear(type){
          switch (type){
              case "province":
                  this.source_rules.province=null
              case "mun_one":
                  this.source_rules.mun_one=null
              case "mun_two":
                  this.source_rules.mun_two=null
              case "name":
                  this.source_rules.name=null
          }
        },
        async setSource(){
            await this.getSources(this.source_rules)
            this.setType('source')
        },
        async setProvince(){
            await this.getProvince()
            this.setType('province')
        },
        async setMunOne(){
            await this.getMunOne(this.source_rules)
            this.setType('mun_one')
        },
        async setMunTwo(){
            await this.getMunTwo(this.source_rules)
            if (Object.keys(this.mun_two)==0){
                this.setName();
                return
            }
            this.setType('mun_two')
        },
        async setName(){
            await this.getName(this.source_rules)
            this.setType('name')
        },
    },
    computed:{
        ...mapGetters(['province','mun_one',"mun_two","name","source"]),
    },

}
</script>

<style scoped>

</style>
