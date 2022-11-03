<template>
    <v-main>
        <h1>Тест</h1>
    </v-main>

</template>

<script>
export default {
    name: "Main",
    data () {
        return {}
    },
    mounted() {
        this.start();
    },
    methods:{
        start(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

</style>
