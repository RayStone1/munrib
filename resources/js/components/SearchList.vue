<template>
    <v-simple-table
        fixed-header
        height="70vh">
        <template v-slot:default>
            <thead>
            <tr>
                <th class="text-left">
                    Субьекты
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in result"
                :key="item.name"
            >
                <td>{{ item.name }}</td>
            </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
export default {
    name: "SearchList",
    mounted() {
    },
    computed:{
        result(){
            return this.$store.getters.search;
        },
    },
}
</script>

<style scoped>

</style>
