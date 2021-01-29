<template>
  <v-app>
    <Headboard/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Calendar from './components/Calendar';
import Headboard from './components/Headboard';

export default {
  name: 'App',

  components: {
    // Calendar,
    Headboard,
  },

  data: () => ({
    //
  }),
};
</script>