<template>
  <Navbar />
  <router-view />
</template>


<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
}

.container {
  margin-left: 2.4rem;
  margin-right: 2.4rem;
}
</style>
