<template>
  <div class="loading">
    <b-spinner variant="success"></b-spinner>
    <h1>Loading {{ this.title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Loading",

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