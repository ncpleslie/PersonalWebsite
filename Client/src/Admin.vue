<template>
  <div id="admin">
    <Login v-if="!email && !password" @userData="onReceiveUserData" />
  </div>
</template>

<script>
import Login from "./components/Admin/LoginForm";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Admin",
  components: {
    Login,
  },
  data() {
    return {
      email: null,
      password: null,
      auth: null,
    };
  },
  mounted() {
    this.auth = firebase.auth();
  },
  methods: {
    async onReceiveUserData(value) {
      this.email = value.email;
      this.password = value.password;
      try {
        const user = await this.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        // eslint-disable-next-line no-console
        console.log(user);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
  },
};
</script>

<style>
#admin {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #27272f;
}
</style>