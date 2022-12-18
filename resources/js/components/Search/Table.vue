<template             >
    <v-card style="box-shadow: unset">
        <v-card-title>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Поиск"
                single-line
                hide-details
            ></v-text-field>
            <v-spacer/>
            <v-btn
                class="mt-7"
                outlined
                @click="dialogCreateSource=!dialogCreateSource"
            >
                <v-icon>
                    mdi-plus-box
                </v-icon>
                Добавить источник
            </v-btn>

            <create-source
                v-model="dialogCreateSource"
            />
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
import {mapGetters,mapActions} from "vuex";
export default {
    name: "Table",
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
        dialogCreateSource:false,
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
                case "mun-one":
                    this.result=this.mun_one
                    break;
                case "mun-two":
                    this.result=this.mun_two
                    break;
                case "names":
                    this.result=this.name
                    break;
                case "source":
                    this.result=this.sources
                    break;
            }
        },
    },
    computed:{
        ...mapGetters(['province','mun_one',"mun_two","name","sources","activeType"]),
    },
    components:{
        createSource:()=>import('../Source/CreateSource')
    }
}
</script>
