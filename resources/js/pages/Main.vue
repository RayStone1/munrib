<template>
    <v-main style="background-color: #fbfcfe">
        <v-container fluid>
            <div>
                <h3>Поиск</h3>

                <v-row>
<!--                    <line-source v-for="n in 10"></line-source>-->

                </v-row>

            </div>
        </v-container>
        <add-button/>
    </v-main>


</template>

<script>
import cardSource from "../components/CardSource";
import lineSource from "../components/LineSource";
import SearchForm from "../components/SearchForm";
import AddButton from "../components/AddButton";
export default {
    name: "Main",
    components:{
        cardSource,
        SearchForm,
        lineSource,
        AddButton,
    }
}
</script>

<style scoped>

</style>
