<template>
    <v-col
    cols="12"
    class="px-8 mb-5"
    >
<!--        <router-link to="/profile/1">-->
            <v-card
                elevation="3"
                rounded="lg"
            >
                <v-row
                    align="center"
                    justify="space-between"
                >
                    <v-col
                    cols="11"
                    class="py-0 px-2"
                    >
                        <v-card-title>
                            <v-chip
                                class="ma-0"
                                color="#3272C0"
                                text-color="white"
                            >
                                Москва
                            </v-chip>
                        </v-card-title>
                        <v-card-text class="">
                            <v-icon class="primary--text">mdi-content-copy</v-icon>
                            <span class="ma-0 " style="line-height: 120%">Command Source</span>
                            <div class="text--primary ml-7 mb-0" style="line-height: 150%">
                                Красноярский край/
                                Абанского муниципального района/
                                Апано-Ключинского сельсовета/
                                Главы администрации Апано-Ключинского сельсовета
                            </div>
                        </v-card-text>
                    </v-col>
                    <v-col
                        class="text-end pr-7"
                    >
                        <router-link to="/profile/1/edit">
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </router-link>
                    </v-col>
                </v-row>
            </v-card>
<!--        </router-link>-->

    </v-col>

</template>

<script>
export default {
    name: "LineSource"
}
</script>

<style scoped>
a{
    text-decoration: none;
}
</style>
