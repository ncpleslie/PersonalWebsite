<template>
  <b-form @submit.stop.prevent class="login-form">
    <label class="input-form-label" for="feedback-user">Email</label>
    <b-input class="login-form-input" v-model="userData.email" id="feedback-user"></b-input>

    <label class="input-form-label" for="text-password">Password</label>
    <b-input
      class="login-form-input"
      type="password"
      id="text-password"
      aria-describedby="password-help-block"
      v-model="userData.password"
    ></b-input>
    <b-button type="submit" variant="primary" @click="onSubmit">Login</b-button>
  </b-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (this.userData.email.length && this.userData.password.length)
        this.$emit("userData", this.userData);
    },
  },
};
</script>

<style scoped>
.login-form {
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-width: 30%;
}

.login-form-input {
  margin-bottom: 2rem;
  color: white;
  background-color: #33333d;
}

.input-form-label {
  color: white;
}
</style>