<script setup>
</script>
<script>
export default {
  data() {
    return {
      name: "Vue.js",
    };
  },
  methods: {
    select(event) {
      router.push(`http://localhost:5173/${this.event}`);
    },
  },
};
</script>
<template>
  <header class="awal">
    <p>Welcome to Dashboard</p>
    <div class="line" v-on:click="select('line')">
      <div>
        <router-link class="lineLink" to="/line">
          <img src="../assets/bar-chart.png" alt="" />
          Line
        </router-link>
      </div>
    </div>
    <div class="pie" v-on:click="select('pie')">
      <div class="link">
        <router-link class="pieLink" to="/pie">
          <img src="../assets/pie2.svg" alt="" />
          Pie
        </router-link>
      </div>
    </div>
    <div class="bar" v-on:click="select('bar')">
      <div class="link">
        <router-link class="barLink" to="/bar">
          <img src="../assets/bar.jpg" alt="this is bar" />
          Bar
        </router-link>
      </div>
    </div>
    <div class="maps" v-on:click="select('maps')">
      <div class="link">
        <router-link class="mapLink" to="/map">
          <img src="../assets/globe.webp" alt="this is map" />
          Maps
        </router-link>
      </div>
    </div>
    <div class="adminpanel" v-on:click="select('login')">
      <div class="link">
        <router-link class="loginLink" to="/login">
          <img src="../assets/person.png" alt="this is admin panel" srcset="" />
          Admin Panel
        </router-link>
      </div>
    </div>
  </header>

  <main></main>
</template>

<style scoped>
header.awal {
  background-color: burlywood;
  width: 55em;
  padding: 1em;
  color: black;
}

.loginLink,
.barLink,
.mapLink,
.pieLink,
.lineLink {
  color: black;
}

.line {
  background-color: rgb(196, 54, 54);
  background-color: rgb(196, 54, 54);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.line img {
  height: 2em;
  width: 2em;
}

.pie {
  background-color: rgb(209, 138, 6);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.pie img {
  height: 2em;
  width: 2em;
}

.bar {
  background-color: blue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.bar img {
  height: 2em;
  width: 2em;
}

.maps {
  background-color: green;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.maps img {
  height: 2em;
  width: 2em;
}

.adminpanel {
  background-color: skyblue;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.adminpanel img {
  height: 2em;
  width: 2em;
}
</style>
