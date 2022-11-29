<template>
    <v-form @submit.prevent="getSource">
        <h4 class="mb-7">Выбирите необходимый уровень</h4>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            label="Субъекты РФ"
            :items="province"
            item-text="name"
            item-value="id"
            v-model="source_rules.province"
        ></v-autocomplete>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            label="Муниципальные образования 1ого уровня"
            :disabled="!source_rules.province"
            :items="mun_one"
            item-text="name"
            item-value="id"
            v-model="source_rules.mun_one"
        ></v-autocomplete>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            label="Муниципальные образования 2ого уровня"
            :disabled="!source_rules.mun_one"

            :items="mun_two"
            item-text="name"
            item-value="id"
            v-model="source_rules.mun_two"
        ></v-autocomplete>
        <v-autocomplete
            class="main--input"
            auto-select-first
            outlined
            clearable
            label="Орган власти"
            :disabled="!source_rules.mun_one"
            :items="name"
            item-text="name"
            item-value="id"
            v-model="source_rules.name"
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

            >mdi-plus-box
            </v-icon>
            Применить фильтр
        </v-btn>
    </v-form>
</template>

<script>
export default {
    name: "SearchForm",
    data:()=>({
        source_rules:{
            province:null,
            mun_one:null,
            mun_two:null,
            name:null,
        },
        type:null,
    }),
    mounted() {
        this.getList('province')
    },
    computed:{
        province(){
            return this.$store.getters.province
        },
        mun_one(){
            return this.$store.getters.mun_one
        },
        mun_two(){
            return this.$store.getters.mun_two
        },
        name(){
            return this.$store.getters.name
        },
    },
    watch:{
        //Получаю профинции
        'source_rules.province':function (val){
            this.source_rules.mun_one=null
            this.source_rules.mun_two=null
            this.source_rules.name=null
            if(val) this.getList('mun_one')
            else this.getList('province')

        },
        'province':function (val){
            this.sendList(this.province)
        },
        'source_rules.mun_one':function (val){
            this.source_rules.mun_two=null
            this.source_rules.name=null
            if(val){
                this.getList('mun_two')
                this.getList('name')
            }
        },
        'mun_one':function (val){
            this.sendList(this.mun_one)
        },
        'source_rules.mun_two':function (val){
            this.source_rules.mun_two=null
            this.source_rules.name=null
            if(val){
                this.getList('name')
            }
        },
        'mun_two':function (val){
            if(val==0) {
                this.sendList(this.name)
            }else{
                this.sendList(this.mun_two)
            }
        },
        'name':function (val){

            this.sendList(this.name)


        },
    },
    methods:{
        getList(type){
            switch (type){
                case 'province':{
                    this.$store.dispatch('getProvince')
                    break;
                }
                case 'mun_one':{
                    this.$store.dispatch('getMunOne',this.source_rules)
                    break;
                }
                case 'mun_two':{
                    this.$store.dispatch('getMunTwo',this.source_rules)
                    break;
                }
                case 'name':{
                    this.$store.dispatch('getName',this.source_rules)
                    break;
                }
            }
        },
        sendList(list){
            this.$store.dispatch('updateSearch',list)
        }
    }
}
</script>

<style scoped>

</style>
