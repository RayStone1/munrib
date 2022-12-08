<template>
    <v-container fluid>
        <v-card
            class="pa-4"
            elevation="3"
            rounded="lg"
            v-if="source"
        >
            <div class="py-2">
                <v-card-subtitle class="py-0">
                    <v-icon class="primary--text">mdi-content-copy</v-icon>
                    Command source
                </v-card-subtitle>
                <v-card-title class="py-0 ml-7 subtitle-1">
                    <p>
                        <span
                            class="cursor-pointer px-1 text-decoration-underline"
                            @click="setSubject('province',source.rules.province)"
                        >{{source.rules.province.name}}</span>/
                    </p>
                    <p

                    >
                        <span
                            class="cursor-pointer px-1 text-decoration-underline"
                            @click="setSubject('mun_one',source.rules.mun_one)"
                        >
                            {{source.rules.mun_one.name}}
                        </span>/
                    </p>
                    <p
                        v-if="source.rules.mun_two"
                    >
                        <span
                            class="cursor-pointer px-1 text-decoration-underline"
                            @click="setSubject('mun_two',source.rules.mun_two)">
                            {{source.rules.mun_two.name}}/
                        </span>
                    </p>
                    <p>
                        <span class="cursor-pointer px-1 text-decoration-underline" @click="setSubject('name',source.rules.name)">{{source.rules.name.name}}</span>
                    </p>

                </v-card-title>
            </div>
            <div class="py-2">
                <v-card-subtitle class="py-0">
                    1!name
                </v-card-subtitle>
                <v-card-title class="py-0 subtitle-1">
                    <v-icon class="primary--text">mdi-content-copy</v-icon>
                    <span class="primary--text"> {{source.header_name}}</span>
                </v-card-title>
            </div>
            <div class="py-2">
                <v-card-subtitle class="py-0">
                    1!name
                </v-card-subtitle>
                <v-card-title class="py-0 subtitle-1">
                    <v-icon class="primary--text">mdi-content-copy</v-icon>
                    <span class="primary--text"> {{source.topic_name}}</span>
                </v-card-title>
            </div>
        </v-card>
        <v-card
            class="mt-6"
            elevation="3"
            rounded="lg"
            v-if="subject"
        >
            <div class="card-header d-flex justify-space-between align-center primary white--text">
                <div class="">
                    <v-card-title class="pa-4"
                    >
                        {{subject.name}}
                    </v-card-title>
                    <v-card-subtitle>В этих карточках можно изменять их название и синонимы</v-card-subtitle>
                </div>
                <div class="action" v-if="activeType!='province'">
                    <v-icon
                        color="white"
                        class="ma-4 pa-2"
                        @click="openEdit(subject)"
                    >
                        mdi-pencil
                    </v-icon>
                    <dialog-subject
                        v-if="editedSubject"
                        :dialog-edit="dialogEdit"
                        :edited-item="editedSubject"
                        @closeDialog="dialogEdit=$event"
                    />
                </div>
            </div>
            <v-card-text>
                <v-list
                >
                    <v-list-item
                        color="primary"
                        tile
                    >
                        <v-list-item
                            v-for="(item, i) in subject.synonyms"
                            :key="i"
                            class="elevation-1 rounded-lg"
                        >
                            <v-list-item-icon>
                                <v-icon class="primary--text">mdi-content-copy</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.name"></v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                                <v-icon
                                    class=""
                                    @click="openEdit(item)"
                                >
                                    mdi-pencil
                                </v-icon>
                                <v-icon>
                                    mdi-delete
                                </v-icon>
                            </v-list-item-icon>
                        </v-list-item>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>
    </v-container>

</template>

<script>
import {mapGetters,mapActions,mapMutations} from "vuex"
export default {
    name: "Source",
    data:()=>({
        subject:null,
        editedSubject:null,
        dialogEdit:false,
    }),
    mounted() {
        this.setType(null)
        this.setSource(null)
        this.getSource(this.$route.params.id)
    },

    deactivated(){

    },
    computed:{
        ...mapGetters(['source','activeType'])
    },
    methods:{
        ...mapActions(['getSource']),
        ...mapMutations(['setType',"setSource"]),
        setSubject(type,subject){
            this.setType(type)
            this.subject=subject
        },
        openEdit(item){
            this.editedSubject=item
            this.dialogEdit=true
        },
    },
    components:{
        DialogSubject:()=>import('../components/form/DialogSubject'),
    }
}
</script>

<style scoped>

</style>
