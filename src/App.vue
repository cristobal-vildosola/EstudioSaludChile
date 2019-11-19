<template>
  <div id="app">
    <Navbar />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Footer from '@/common/Footer.vue';
import Navbar from '@/common/Navbar.vue';

export default {
  name: 'App',

  components: {
    Footer,
    Navbar,
  },
};
</script>
