<template>
    <v-container class="mt-5">
        <v-card class="mx-15 pa-10" color="blue lighten-5">
            <v-form @submit.prevent="logIn">
                <v-text-field
                    type="text" label="Escribe tu Email…" v-model="email">
                </v-text-field>
                <v-text-field
                    type="password" label="Escribe tu Contraseña…" v-model="password">
                </v-text-field>
                <v-btn type="submit" color="primary">Iniciar Sesión</v-btn>
            </v-form>
        </v-card>        
    </v-container>
</template>

<script>
    import firebase from "firebase/app";
    import "firebase/app";
    import "firebase/auth";

    export default {
        name: 'Login',
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
                .signInWithEmailAndPassword(this.email, this.password)
                    .then( (user) =>  {
                        this.$router.replace('calendar')
                    })
                    .catch(function(error) {
                        console.log(error.message)
                    });
            }
        }
    }
</script>

<!-- https://esparzadev.com/blog/vue-firebase-auth/ -->