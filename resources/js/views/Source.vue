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
                    <p
                        @click="test(source.rules.province.id)">
                        {{source.rules.province.name}}/
                    </p>
                    <p
                        @click="test(source.rules.mun_one.id)"
                    >
                        {{source.rules.mun_one.name}}/
                    </p>
                    <p
                        v-if="source.rules.mun_two"
                       @click="test(source.rules.mun_two.id)"
                    >
                        {{source.rules.mun_two.name}}/
                    </p>
                    <p
                        @click="test(source.rules.name.id)">
                        {{source.rules.name.name}}/
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
    </v-container>

</template>

<script>
import {mapGetters,mapActions} from "vuex"

export default {
    name: "Source",
    mounted() {
        this.getIndexSource(this.$route.params.id)
    },
    computed:{
        ...mapGetters(['source'])
    },
    methods:{
        ...mapActions(['getIndexSource']),
        test(data){
            console.log(data);
        }
    }
}
</script>

<style scoped>

</style>
