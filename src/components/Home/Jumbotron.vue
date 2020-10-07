<template>
  <div>
    <header class="jumbotron">
      <h1>{{ header.name }}</h1>
      <h2>{{ header.description }}</h2>
      <hr class="line" />
      <a class="jumbotron-button" href="#projects">See Projects</a>
      <div class="jumbotron-button-container">
        <Button :buttonType="'Github'" :links="header.links"></Button>
        <Button :buttonType="'LinkedIn'" :links="header.links"></Button>
        <Button :buttonType="'CV'" :links="header.links"></Button>
        <Button :buttonType="'Contact'" :links="header.links"></Button>
      </div>
    </header>
  </div>
</template>

<script >
import Button from "./sub-components/Button";

export default {
  props: {
    header: Object,
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}

.line {
  height: 1px;
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
}

.jumbotron {
  font-family: var(--font-family-monospace);
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: var(--card);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.jumbotron h1 {
  font-size: 6rem;
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadein 2s;
}

.jumbotron h2 {
  animation: fade 1.5s;
}

.jumbotron-button {
  font-family: var(--font-family-sans-serif);
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: white;
  border-radius: 0px;
  padding: 1rem 1.25rem 1rem 1.25rem;
  border: 2px solid var(--accent1);
  background-color: #27272f !important;
  animation: fade 1.5s;
}

.jumbotron-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1rem;
  animation: fade 2s;
}

.jumbotron-button:hover {
  border: 2px solid var(--accent2);
  background-color: #33333d !important;
  cursor: pointer;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.jumbotron-button:active {
  background-color: #27272f !important;
}

.jumbotron-button:focus {
  background-color: #27272f !important;
}

@keyframes fadein {
  from {
    -webkit-transform: translate3d(0, -100px, 0);
    transform: translate3d(0, -100px, 0);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 40rem) {
  .jumbotron h2 {
    font-size: 1.5rem;
  }
}

/* Large format displays - MacBook 15inch, etc */
@media only screen and (min-width: 144rem) {
  .project-card-button {
    line-height: 3rem;
    font-size: 2rem;
  }

  .jumbotron-button-container .project-card-button {
    height: 5rem;
    width: 5rem;
  }

  .jumbotron-button-container .project-card-button img {
    height: 3rem;
  }

  h1 {
    font-size: 1000%;
  }

  h2 {
    font-size: 2rem;
  }
}
</style>


