<template>
    <v-main style="background-color: #fbfcfe">
        <v-container fluid>
            <div>
                <h3>Поиск</h3>

                <v-row>
                    <line-source v-for="n in 10"></line-source>

                </v-row>

            </div>
        </v-container>
        <add-button/>
    </v-main>


</template>

<script>
export default {
    name: "Main",
    components:{
        SearchForm:()=>import('../components/SearchForm'),
        lineSource:()=>import('../components/LineSource'),
        addButton:()=>import('../components/AddButton')

    }
}
</script>

<style scoped>

</style>
