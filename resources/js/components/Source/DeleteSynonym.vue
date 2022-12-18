<template>
    <v-dialog v-if="synonym" v-model="value" max-width="500px">
        <v-card>
            <v-card-title class="text-h6">Вы действительно хотите удалить "{{synonym.name}}"?</v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Отменить</v-btn>
                <v-btn color="blue darken-1" text @click="deleteSyn">Удалить</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "DeleteSynonym",
    props:{
        value:{
            type:Boolean
        }
    },
    computed:{
        ...mapGetters(["parent","synonym"])
    },
    methods:{
        ...mapActions(['getSource']),
        close(){
            this.$emit('input',false)
        },
        deleteSyn(){
            axios.delete(`/api/${this.parent.type}/${this.parent.id}/synonym/${this.synonym.id}`)
                .then(res=>{
                   this.close()
                    this.getSource(this.$route.params.id)
                })

        }
    }
}
</script>

<style scoped>

</style>
