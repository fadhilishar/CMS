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
      // `this` inside methods points to the current active instance
      // `event` is the native DOM event
      router.push(`http://localhost:5173/${this.event}`);
    },
  },
};
</script>
<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
