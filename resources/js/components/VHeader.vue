<template>
    <v-card tile>
        <v-app-bar app color="white">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title><h4>Munrib</h4></v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            app
        >
            <v-sheet
                color="#0055A3"
                class="pa-4"
                dark
            >
                <v-avatar
                    class="mb-4"
                    color="grey darken-1"
                    size="64"
                ></v-avatar>

                <div>Руслан Чупанов</div>
            </v-sheet>

            <v-divider></v-divider>
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="base--text text--accent-4"
                >
                    <v-list-item
                        v-for="link in links"
                        :key="link.name"
                        :to="link.route"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ link.name }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    name: "VHeader",
    data:()=>({
        links: [
            {name:'Главная',route:'/',icon:"mdi-home"},
            {name:'Источник',route:'/source/1',icon:"mdi-home"},
        ],
        drawer: false,
        group:''
    })
}
</script>

<style scoped>

</style>
