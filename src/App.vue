<template>
  <body class="" style="height: 550px">
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
  </body>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {},
  components: { Navbar },
};
</script> 

<style scoped>
</style>
