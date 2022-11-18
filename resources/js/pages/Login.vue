<template>
        <v-container fluid class="fill-height bg">
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <v-card elevation="3" class="mx-auto py-12" max-width="500px">
                        <v-form>
                        <v-img src="image/logo.png" class="mx-auto" max-width="450"/>
                        <v-card-text class="pb-0">

                                <v-text-field
                                    label="Логин"
                                    name="login"
                                    v-model="user.login"
                                    :rules="[rules.required]"
                                    outlined
                                    clearable
                                ></v-text-field>
                                <v-text-field
                                    @click:append="passwordConfig.showPassword = !passwordConfig.showPassword"
                                    :append-icon="passwordConfig.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="passwordConfig.showPassword ? 'text' : 'password'"

                                    v-model="user.password"
                                    :rules="[rules.required]"
                                    name="password"
                                    label="Пароль"

                                    outlined
                                    clearable
                                ></v-text-field>

                        </v-card-text>
                        <v-card-actions class="px-4">
                            <v-row>
                                <v-col cols="6">

                                </v-col>
                                <v-col cols="6">

                                </v-col>
                                <v-col cols="12">
                                    <v-btn @click.prevent="login" dark x-large color="#0055A3" block>Войти</v-btn>
                                </v-col>
                            </v-row>

                        </v-card-actions>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
export default {
    name: "Login",
    data () {
        return {

            user:{
                login:null,
                password:null,
            },
            passwordConfig:{
                showPassword:false,
            },
            rules: {
                required: value => !!value || '',
            },
        }
    },
    methods:{
        login(){
            axios.get('/sanctum/csrf-cookie').then(response => {
              axios.post('/login',{login:this.user.login,password:this.user.password})
                  .then(r=>{
                      console.log(r);
                  })
            });
        }
    }
}
</script>

<style scoped>

</style>
