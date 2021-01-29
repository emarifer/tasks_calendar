import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router'

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
