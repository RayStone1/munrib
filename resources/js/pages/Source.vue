<template>
    <v-main>
        <v-col
            cols="12"
            v-if="source"
        >
            <v-card>
                <v-chip
                    class="ma-2"
                    color="#3272C0"
                    text-color="white"
                >
                    {{source.rules.province.name}}
                </v-chip>
                <v-card-text class="">
                    <div class="item my-4">
                        <v-icon class="primary--text">mdi-content-copy</v-icon>
                        <span class="ma-0 " style="line-height: 120%">Command Source</span>
                        <div class="text--primary ml-7 mb-0" style="line-height: 150%">
                            <span>
                                {{source.rules.province.name}}/
                            </span>
                            <span>
                                    {{source.rules.mun_one.name}}/
                            </span>
                            <span v-if="source.rules.mun_two">
                                    {{source.rules.mun_two.name}}/
                            </span>
                            <span >
                                    {{source.rules.name.name}}
                            </span>

                            <!--                                {{ source.rules.province.name }}/-->
                            <!--                                {{ source.rules.mun_one.name }}/-->
                            <!--                                Апано-Ключинского сельсовета/-->
                            <!--                                {{ source.rules.name.name }}-->
                        </div>
                    </div>
                    <div class="item my-4">
                        <div class="ma-0 " style="line-height: 120%">1!name</div>
                        <v-icon class="primary--text">mdi-content-copy</v-icon>
                        <span class="text--primary ml-1 mb-0" style="line-height: 150%">
                            {{source.topic_name}}
                        </span>
                    </div>
                    <div class="item my-4">
                        <div class="ma-0 " style="line-height: 120%">1!name</div>
                        <v-icon class="primary--text">mdi-content-copy</v-icon>
                        <span class="text--primary ml-1 mb-0" style="line-height: 150%">
                            {{source.header_name}}
                        </span>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-main>
</template>

<script>
export default {
    name: "Source",
    created() {
        axios
            .get(`/api/source/${this.$route.params.id}`)
            .then(res=>{
                this.source=res.data.data;
            })
            .finally(()=>{
                console.log(this.source)
            })

    },
    data:()=>({
        source:[],
    }),
    methods:{
    },

}
</script>

<style scoped>

</style>
