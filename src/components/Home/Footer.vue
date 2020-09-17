<template>
  <div class="footer">
    <h2>Site created by Nick Leslie © 2020</h2>
    <a href="https://github.com/ncpleslie/PersonalWebsite">Source code avaliable here</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h2 {
  color: white;
  font-size: 1rem;
}

a:link {
  color: var(--accent1);
}

a:visited {
  color: var(--accent1);
}

a:hover {
  color: var(--accent2);
}

a:active {
  color: var(--accent2);
}
</style>
