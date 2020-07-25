<template>
  <div class="loading">
    <Circle8></Circle8>
    <h1>Loading</h1>
  </div>
</template>

<script>
import { Circle8 } from "vue-loading-spinner";
export default {
  name: "Loading",
  components: {
    Circle8,
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