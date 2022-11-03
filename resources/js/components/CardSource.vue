<template>
    <v-col
    cols="12"
    sm="6"
    lg="4"
    >
        <v-hover v-slot="{ hover }">
            <v-card
                class="pa-4"
                elevation="3"
                rounded="lg"
                :class="{ 'on-hover': hover }"
            >
                <v-chip
                    class="ma-2"
                    color="#3272C0"
                    text-color="white"
                >
                    Москва
                </v-chip>

                <v-card-text class="py-2">
                    <v-icon class="primary--text">mdi-content-copy</v-icon>
                    <label class="ma-0">Command Source</label>
                    <h6 class="text--primary ml-7" >
                        Красноярский край/<br>
                        Абанского муниципального района/<br>
                        Апано-Ключинского сельсовета/<br>
                        Главы администрации Апано-Ключинского сельсовета<br>
                    </h6>
                </v-card-text>
                <v-card-text  class="py-2" @click="copySource()">
                    <label class="ma-0">Command Source</label><br>
                    <span class="">
                    <v-icon class="primary--text">mdi-content-copy</v-icon>
                    <span class="primary--text">Главы администрации Апано-Ключинского сельсовета Абанского муниципального района Красноярского края</span>
                </span>
                </v-card-text>
                <v-card-text  class="py-2" @click="copySource()">
                    <label class="ma-0">Command Source</label><br>
                    <span class="">
                    <v-icon class="primary--text">mdi-content-copy</v-icon>
                    <span class="primary--text">Главы администрации Апано-Ключинского сельсовета</span>
                </span>
                </v-card-text>


                <v-card-actions>
                    <v-btn
                        dark
                        color="#3272C0"
                        class="rounded-lg"
                    >
                        <v-icon left>
                            mdi-pencil
                        </v-icon>
                        Изменить
                    </v-btn>
                </v-card-actions>

            </v-card>
        </v-hover>

    </v-col>
</template>

<script>
export default {
    name: "CardSource",
    methods:{
            copySource(text){


        }
    }
}
</script>

<style scoped>
</style>
