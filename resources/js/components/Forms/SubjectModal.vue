<template>
    <v-row justify="center" >
        <v-dialog
            v-model="sub_dialog"
            persistent
            max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    v-bind="attrs"
                    v-on="on"
                    color="transparent"
                    elevation="0"
                >
                    Субъект
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">Добавить субъект</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field
                                    label="Название субъекта"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                            >
                                <v-select
                                    :items="['0-17', '18-29', '30-54', '54+']"
                                    label="Тип субъекта"
                                    required
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="sub_dialog = false"
                    >
                        Закрыть
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="sub_dialog = false"
                    >
                        Сохранить
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "SubjectModal",
    data:()=>({
        sub_dialog:false,
    }),
}
</script>

<style scoped>

</style>
