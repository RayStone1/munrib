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
                        :items="Allprovince"
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
                        v-model="ACTIVE_MUNONE"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Муниципальные образования 2ого уровня"
                        v-model="ACTIVE_MUNTWO"
                    ></v-autocomplete>
                    <v-autocomplete
                        class="main--input"
                        auto-select-first
                        outlined
                        clearable
                        label="Орган власти"
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
    methods:{
        ...mapActions([
            "getProvince",
            "getMunOne",
            "getMunTwo",
            "getName",
            "getSources",
            "ActiveType"
        ]),
        closeDialog(){
            this.$emit('input',false)
        }
    },
    computed:{
        ...mapGetters([
            'Allname',
            "Allprovince",
            "Allmun_two",
            "Allmun_one"

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
    }
}
</script>

<style scoped>

</style>
