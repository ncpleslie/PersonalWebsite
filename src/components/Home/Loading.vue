<template>
  <div class="loading">
    <b-spinner variant="success"></b-spinner>
    <h1>Loading {{ this.title }}</h1>
  </div>
</template>

<script>
import { BSpinner } from "bootstrap-vue";
export default {
  name: "Loading",
  components: {
    BSpinner,
  },
  props: {
    title: String,
  },
};
</script>

<style scoped>
.loading {
  color: #fff;
  height: 50vh;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>