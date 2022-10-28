<script setup>
</script>
<script>
import axios from "../../services/api.js";
import router from "../router/index.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPass: "",
    };
  },
  methods: {
    register() {
      // console.log("this.email", this.email);
      axios
        .post("/users/register", {
          email: this.email,
          password: this.password,
          retypepassword: this.confirmPass,
        })
        .then(function (response) {
          // router.push("home");
          // router.push({ path: "/home" });
          // router.replace({ path: "/home" });
          localStorage.setItem("email", response.data.data.email);
          router.replace("/home");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<template>
  <header class="awal">
    <div class="start">
      <div class="login">
        <router-link class="loginLink" to="/login"> Login </router-link>
      </div>
      <div class="register">
        <router-link class="registerLink" to="/register">
          Register
        </router-link>
      </div>
    </div>
    <form action="" method="POST" @submit.prevent="register()">
      <div class="email">
        <span>
          Email:
          <input type="email" name="email" id="" v-model="email" />
        </span>
      </div>
      <div class="password">
        <span>
          Password:
          <input type="password" name="password" id="" v-model="password" />
        </span>
      </div>
      <div class="confirm">
        <span>
          Confirm Password:
          <input type="password" name="confirm" id="" v-model="confirmPass" />
        </span>
      </div>
      <div class="tombol"><input type="submit" value="REGISTER NOW" /></div>
    </form>
  </header>

  <main></main>
</template>

<style scoped>
header.awal {
  background-color: whitesmoke;
}

.login,
.register {
  padding: 0.5rem;
}

.login .loginLink {
  color: black;
}
.register .registerLink {
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
  display: flex;
  justify-content: center;
}

.tombol input {
  background-color: rgb(110, 204, 92);
  color: white;
}

.confirm {
  margin: 1rem 0;
}
</style>
