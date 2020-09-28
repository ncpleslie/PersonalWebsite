<template>
  <nav>
    <ul>
      <li><Button :buttonType="'Github'" :links="nav.links"></Button></li>
      <li><Button :buttonType="'LinkedIn'" :links="nav.links"></Button></li>
      <li><Button :buttonType="'CV'" :links="nav.links"></Button></li>
      <li><Button :buttonType="'Contact'" :links="nav.links"></Button></li>
    </ul>
    <!-- <hr class="line" /> -->
  </nav>
</template>

<script>
import Button from "./sub-components/Button";

export default {
  components: {
    Button,
  },
  props: {
    nav: Object,
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: var(--background);
  position: fixed;
  top: 0;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 200;
  height: 10vh;
}

nav ul {
  display: flex;
  list-style: none;
}

.line {
  height: 1px;
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
  width: 100vw;
}
</style>