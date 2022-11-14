<template>
    <div>

        <v-menu
            offset-x
            left
            rounded="lg"

        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="rounded-lg "
                    fab
                    fixed
                    tile
                    right
                    bottom
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon>
                        mdi-plus-circle-outline
                    </v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <subject-modal/>
                </v-list-item>
                <v-list-item>
                    <source-modal/>
                </v-list-item>
                <v-list-item>
                    <synonym-modal/>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>


</template>

<script>
export default {
    name: "AddButton",
    data: () => ({
        items: [
            { title: 'Путь' },
            { title: 'Субъект' },
            { title: 'Синоним' },
        ],
    }),
    components:{
        subjectModal:()=>import( "../components/Forms/SubjectModal"),
        sourceModal:()=>import( "../components/Forms/SourceModal"),
        synonymModal:()=>import( "../components/Forms/SynonymForm"),
    }
}
</script>

<style scoped>

</style>
