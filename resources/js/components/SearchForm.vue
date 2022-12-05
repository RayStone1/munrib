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
            :loading="loading"
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
import {mapGetters} from "vuex"
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
        loading:false
    }),
    mounted() {
        this.getList('Province')
    },
    computed:{
        ...mapGetters(['province','mun_one','mun_two','name','source']),

    },
    watch:{
        //Получение
        'source_rules.province':function (val){
            this.source_rules.mun_one=null
            this.source_rules.mun_two=null
            this.source_rules.name=null
            //Если переменная устанволена запрашивать МО1
            if(val) {
                this.getList('MunOne',this.source_rules)
                this.sendType('mun-one')
            }
            //    Иначе отрисовать провинции
            else {
                this.sendType()
                this.getList('Province')
            }
        },
        'source_rules.mun_one':function (val){
            this.source_rules.mun_two=null
            this.source_rules.name=null
            if(val){
                this.getList('MunTwo',this.source_rules)
                this.sendType('mun-two')
            }else{
                this.sendList(this.mun_one)
                this.sendType('mun-one')
            }
        },
        'source_rules.mun_two':function (val){
            this.source_rules.name=null
            if(val){
                this.getList('Name',this.source_rules)
                this.sendType('names')
            }
            else{
                this.sendList(this.mun_two)
                this.sendType('mun-two')
            }
        },
        'source_rules.name':function (val){
                this.sendList(this.name)
                this.sendType('names')

        },
        //Вывод в список
        'province':function (val){
            this.sendList(this.province)
        },
        'mun_one':function (val){
            this.sendList(this.mun_one)
        },
        'mun_two':function (val){
            if(Object.keys(val)==0){
                this.getList('Name',this.source_rules)

            }else{
                this.sendList(this.mun_two)
            }

        },
        'name':function (val){
            this.sendList(this.name)

        },
        'source':function (val){
            this.sendList(this.source)

        },
    },
    methods:{
        getList(type,filter=false){
            this.$store.dispatch(`get${type}`,filter)
        },
        sendList(list){
            this.$store.dispatch('updateSearch',list)
        },
        sendType(type){
            let create;
            switch (type){
                case 'mun-one':{
                    create={
                        text:'МО 1',
                        name:type
                    }
                    break;
                }
                case 'mun-two':{
                    create={
                        text:'МО 2',
                        name:type
                    }
                    break;
                }
                case 'names':{
                    create={
                        text:'Орган власти',
                        name:type
                    }
                    break;
                }
                default:
                    create=null
            }
            this.$emit('create',create)
        },
        getSource(){
            this.getList('Source',this.source_rules)
        }
    }
}
</script>

<style scoped>

</style>
