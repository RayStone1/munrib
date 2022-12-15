<template             >
    <v-card style="box-shadow: unset">
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-spacer/>
            <create-source/>
        </v-card-title>
        <v-data-table
            style="min-height: 60vh"
            :headers="headers"
            :items="result"
            :search="search"
            :page.sync="page"
            @page-count="pageCount = $event"
            hide-default-footer
        >
            <template v-if="activeType=='source'" v-slot:item.name="{ item }">
                <router-link  :to="{name:'source',params:{id:item.id}}" >
                    <p>
                        <span>{{item.rules.province.name}}</span>/
                        <span>{{item.rules.mun_one.name}}</span>/
                        <span v-if="item.rules.mun_two">{{item.rules.mun_two.name}}/</span>
                        <span>{{item.rules.name.name}}</span>
                    </p>
                </router-link>
            </template>
            <template v-if="activeType!='province'" v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="openEdit(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                >
                    mdi-delete
                </v-icon>
            </template>
        </v-data-table>
        <div class="text-center pt-2">
            <v-pagination
                v-model="page"
                :length="pageCount"
            ></v-pagination>
        </div>
    </v-card>
</template>
<script>
import {mapGetters} from "vuex";
export default {
    name: "Table",
    props:{
    },
    data: () => ({
        dialog: false,
        search: null,
        result:[],
        dialogDelete: false,
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [
            {
                text: 'Наименование',
                align: 'start',
                value: 'name',
            },
            { text: '', value: 'actions', sortable: false,align: 'end', },
        ],
        editedIndex: -1,
    }),
    methods: {
        openEdit(item){
            this.$emit('editItem',item)
        }
    },
    watch:{
         activeType(val){
            switch(val){
                case "province":
                    this.result=this.province
                    break;
                case "mun_one":
                    this.result=this.mun_one
                    break;
                case "mun_two":
                    this.result=this.mun_two
                    break;
                case "name":
                    this.result=this.name
                    break;
                case "source":
                    this.result=this.source
                    break;
            }
        },
    },
    computed:{
        ...mapGetters(['province','mun_one',"mun_two","name","source","activeType"]),
    },
    components:{
        CreateSource:()=>import('../CreateSource')
    }
}
</script>

<style scoped>

</style>
