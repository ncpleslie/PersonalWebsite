<template>
  <div class="loading">
    <Circle8 v-if="!this.title"></Circle8>
    <Stretch v-else></Stretch>
    <h1>Loading {{ this.title }}</h1>
  </div>
</template>

<script>
import { Circle8, Stretch } from "vue-loading-spinner";
export default {
  name: "Loading",
  components: {
    Circle8,
    Stretch,
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>
.loading {
  color: #fff;
  background-color: #33333d;
  height: 100vh;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>