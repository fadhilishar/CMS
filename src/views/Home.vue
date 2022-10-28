<script setup>
</script>
<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      router.replace("/");
    },
  },
  mounted() {
    this.email = localStorage.getItem("email");
  },
};
</script>
<template>
  <header class="link">
    <div class="cms">
      <router-link class="link" to="/register">
        Content Management System
      </router-link>
    </div>
    <div class="home">
      <router-link class="link" to="/home"> Home </router-link>
    </div>
    <div class="data">
      <router-link class="link" to="/data"> Data </router-link>
    </div>
    <div class="date">
      <router-link class="link" to="/date"> Data Date </router-link>
    </div>
    <div class="maps">
      <router-link class="link" to="/maps"> Maps </router-link>
    </div>
    <div class="logout">
      <router-link class="link" to="/" @click="logout"> Logout </router-link>
    </div>
  </header>

  <main>
    <div class="welcome">Welcome, {{ email }}</div>
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-evenly;
  background-color: grey;
}

.link {
  color: white;
}

main {
  background-color: rgb(228, 229, 229);
  display: flex;
  margin: 2rem;
}
</style>
