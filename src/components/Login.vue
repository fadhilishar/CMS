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
      console.log("EVENT DI SINI", this.event);
      router.push(`http://localhost:5173/${this.event}`);
    },
  },
};
</script>
<template>
  <header class="awal">
    <div class="start">
      <div class="login" v-on:click="select('login')"><span>Login</span></div>
      <div class="register" v-on:click="select('register')">
        <span>Register</span>
      </div>
    </div>
    <form action="">
      <div class="email" v-on:click="select('email')">
        <span>Email: <input type="email" name="email" id="" /> </span>
      </div>
      <div class="password" v-on:click="select('password')">
        <span>Password: <input type="password" name="password" id="" /> </span>
      </div>
      <div class="confirm" v-on:click="select('password')">
        <span
          >Confirm Password: <input type="password" name="confirm" id="" />
        </span>
      </div>
      <div class="tombol"><input type="submit" value="LOG IN" /></div>
      <div class="tombol"><input type="submit" value="REGISTER NOW" /></div>
    </form>
  </header>

  <main></main>
</template>

<style scoped>
/* LOGIN  & REGISTER*/
header.awal {
  background-color: whitesmoke;
}

div {
  border: 3px solid crimson;
}

.login,
.register {
  padding: 0.5rem;
}

.login {
  color: greenyellow;
}

.email,
.password,
.confirm {
  padding: 0.6rem;
  border: 1px solid rgb(104, 104, 104);
  border-radius: 0.25rem;
}

.start {
  display: flex;
  justify-content: space-evenly;
}
.email {
  margin: 1rem 0;
}
.password {
  margin: 1rem 0;
}
.tombol {
  /* margin: 1rem 0; */
  display: flex;
  justify-content: center;
}

.tombol input {
  background-color: rgb(25, 154, 180);
  color: white;
}
</style>
