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
        loading:false
    }),
    mounted() {
        this.getList('province')
        this.sendType('province')
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
        source(){
            return this.$store.getters.source
        },
    },
    watch:{
        //Получение
        'source_rules.province':function (val){
            this.source_rules.mun_one=null
            this.source_rules.mun_two=null
            this.source_rules.name=null
            //Если переменная устанволена запрашивать МО1
            if(val) {
                this.getList('mun_one')
                this.sendType('mun_one')
            }
            //    Иначе отрисовать провинции
            else {
                this.getList('province')
                this.sendType('province')
            }
        },
        'source_rules.mun_one':function (val){
            this.source_rules.mun_two=null
            this.source_rules.name=null
            if(val){
                this.getList('mun_two')
                this.sendType('mun_two')
            }else{
                this.sendList(this.mun_one)
                this.sendType('mun_one')
            }
        },
        'source_rules.mun_two':function (val){
            this.source_rules.name=null
            if(val){
                this.getList('name')
                this.sendType('name')
            }
            else{
                this.sendList(this.mun_two)
                this.sendType('mun_two')
            }
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
                this.getList('name')

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
                case 'source':{
                    this.$store.dispatch('getSource',this.source_rules)
                    break;
                }
            }
        },
        sendList(list){
            this.$store.dispatch('updateSearch',list)
        },
        sendType(type){
            let create;
            switch (type){
                case 'province':{
                    create={
                        text:'Субъект РФ',
                        name:'province'
                    }
                    break;
                }
                case 'mun_one':{
                    create={
                        text:'МО 1',
                        name:'mun-one'
                    }
                    break;
                }
                case 'mun_two':{
                    create={
                        text:'МО 2',
                        name:'mun-two'
                    }
                    break;
                }
                case 'name':{
                    create={
                        text:'Наиименование',
                        name:'name'
                    }
                    break;
                }
            }
            this.$emit('create',create)
        },
        getSource(){
            this.getList('source')
        }
    }
}
</script>

<style scoped>

</style>
