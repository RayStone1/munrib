<template>
    <v-dialog
        v-model="value"
        persistent
        max-width="600px"
    >
        <v-card>
            <v-card-title>
                <span class="text-h5">Добавить источник</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Субъекты РФ"
                        :items="province_list"
                        item-text="name"
                        item-value="id"
                        v-model="ACTIVE_PROVINCE"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Муниципальные образования 1ого уровня"
                        :items="mun_one_list"
                        item-text="name"
                        item-value="id"
                        v-model="ACTIVE_MUNONE"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Муниципальные образования 2ого уровня"
                        :items="mun_two_list"
                        item-text="name"
                        item-value="id"
                        v-model="ACTIVE_MUNTWO"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Орган власти"
                        :items="name_list"
                        item-text="name"
                        item-value="id"
                        v-model="ACTIVE_NAME"
                    ></v-autocomplete>
                    <v-text-field
                        label="В родительном падеже"
                        outlined
                        v-model="header_name"
                    ></v-text-field>
                    <v-text-field
                        label="topic_name"
                        outlined
                        v-model="topic_name"
                    ></v-text-field>
                    <div v-if="errors" class="errors">
                        <v-alert
                            dense
                            outlined
                            type="error"
                            v-for="(val,name) in errors"
                            :key="name"
                        >
                            {{ val[0] }}
                        </v-alert>
                    </div>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="closeDialog"
                >
                    Отменить
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="create"
                >
                    Добавить
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {

    name: "CreateSource",
    props:{
        value:{
            type:Boolean,
        },
    },
    data:()=>({
        errors:null,
        topic_name:null,
        header_name:null,
    }),
    mounted() {
        this.start()
    },
    methods:{
        ...mapActions([
            "getProvinceList",
            "getMunOneList",
            "getMunTwoList",
            "getNameList",
            "getSources",
            "ActiveType"
        ]),
        create(){
            axios.post(`/api/source`,this.source)
                .then(res=>{
                    console.log(res)
                })
        },
        closeDialog(){
            this.$emit('input',false)
        },
        start(){
            this.getMunOneList()
            this.getProvinceList()
            this.getMunTwoList()
            this.getNameList()
        }
    },
    computed:{
        ...mapGetters([
            'name_list',
            "province_list",
            "mun_two_list",
            "mun_one_list",

        ]),
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
        source(){
            return {
                name_id:this.ACTIVE_NAME,
                l1_id:this.ACTIVE_MUNONE,
                l2_id:this.ACTIVE_MUNTWO,
                province_id:this.ACTIVE_PROVINCE,
                topic_name:this.topic_name,
                header_name:this.header_name
            }
        }
    },
    watch:{
        value(val){
            !val|| this.start()
        }
    }
}
</script>

<style scoped>

</style>
