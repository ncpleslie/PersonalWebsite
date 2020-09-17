<template>
  <div id="admin">
    <b-alert class="error" v-model="showDismissibleAlert" variant="danger" dismissible>{{error}}</b-alert>
    <Login v-if="!user" @userData="onReceiveUserData" />
  </div>
</template>

<script>
import Login from "../components/Admin/LoginForm";
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Admin",
  components: {
    Login,
  },
  data() {
    return {
      user: null,
      auth: firebase.auth(),
      error: null,
      showDismissibleAlert: false,
    };
  },
  mounted() {
    try {
      this.user = null;
      this.auth.signOut();
    } catch (err) {
      this.showDismissibleAlert = true;
      this.error = `Failed to log out. Reason: ${err}`;
    }
  },
  methods: {
    async onReceiveUserData(value) {
      try {
        this.showDismissibleAlert = false;
        this.user = await this.auth.signInWithEmailAndPassword(
          value.email.toString(),
          value.password.toString()
        );
        this.$router.replace({ name: "Edit" });
      } catch (err) {
        this.showDismissibleAlert = true;
        this.error = `Failed to log in. Reason: ${err}`;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.error {
  width: 60%;
}
</style>