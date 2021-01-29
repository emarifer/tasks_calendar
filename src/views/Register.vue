<template>
    <v-container class="mt-5">
        <v-card class="mx-15 pa-10" color="green lighten-5">
            <v-form @submit.prevent="logIn">
                <v-text-field
                    type="text" label="Escribe tu Email…" v-model="email">
                </v-text-field>
                <v-text-field
                    type="password" label="Escribe una Contraseña con un mínimo de 6 caracteres…" v-model="password">
                </v-text-field>
                <v-btn type="submit" color="green darken-1" dark>Crear Cuenta e Iniciar Sesión</v-btn>
            </v-form>
            <div class="mt-5" style="text-align: center">
                <router-link  style="font-size: x-large; color: green lighten-1;" to="/login">
                    Ya tengo una cuenta
                </router-link>
            </div>
        </v-card>        
    </v-container>
</template>

<script>
    import firebase from "firebase/app";
    import "firebase/app";
    import "firebase/auth";

    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            logIn() {
                firebase
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                    .then( () =>  {
                        this.$router.replace('calendar')
                    })
                    .catch(function(error) {
                        console.log(error.message)
                    });
            }
        }
    }
</script>