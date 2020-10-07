<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
:root {
  --background: #17141d;
  --card: #17141d;
  --accent1: #ff8a00;
  --accent2: #e52e71;
  --button: #27272f;
  --button-accent: #33333d;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--accent1), var(--accent2));
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #a55800, #bb265d);
}

::-webkit-scrollbar-thumb:active {
  background: #b30000;
}
</style>