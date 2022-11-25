<template>
    <v-container
    >
        <v-row>
            <v-col
                class="pa-8"
                lg="4"
                md="6"
                cols="12"
            >
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
                        :disabled="!(source_rules.province && source_rules.mun_one && source_rules.name)"
                    >
                        <v-icon

                        >mdi-plus-box
                        </v-icon>
                        Применить фильтр
                    </v-btn>
                </v-form>

            </v-col>
            <v-col
                lg="8"
                md="6"
                cols="12"
            >
                <v-list
                    shaped
                    height="80vh"
                    class="overflow-auto"
                >
                    <v-subheader>REPORTS</v-subheader>
                    <v-list-item-group
                        color="primary"

                    >
                        <v-list-item
                            v-for="(item, i) in result"
                            :key="i"
                        >
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import province from "../store/modules/province";

export default {
    name: "Search",
    data:()=>({
        source_rules:{
            province:null,
            mun_one:null,
            mun_two:null,
            name:null,
        },
        result:null,
    }),
    mounted() {
        this.$store.dispatch('getProvince')
    },
    methods:{
        getSource(){
            this.$store.dispatch('getSource', this.source_rules);
        }
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
        }
    },
    watch:{
        'source_rules.province':function (val){
            this.source_rules.mun_one=null
            this.source_rules.mun_two=null
            this.source_rules.name=null
            if(val){
                this.$store.dispatch('getMunOne',this.source_rules)
            }

        },
        'source_rules.mun_one':function (val){
            this.source_rules.mun_two=null
            this.source_rules.name=null
            if(val){
                this.$store.dispatch('getMunTwo',this.source_rules)
                this.$store.dispatch('getName',this.source_rules)
            }

        },
        'source_rules.mun_two':function (val){
            this.source_rules.name=null
            if(val){
                this.$store.dispatch('getName',this.source_rules)
            }
        },

    }
}
</script>

<style>

</style>
