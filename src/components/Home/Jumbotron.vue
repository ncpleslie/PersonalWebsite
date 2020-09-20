<template>
  <div>
    <header class="jumbotron">
      <h1
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >{{header.name}}</h1>
      <h2
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >{{header.description}}</h2>
      <hr class="line" />
      <button
        class="jumbotron-button"
        data-aos="fade"
        data-aos-duration="1500"
        data-aos-easing="ease-in"
        data-aos-once="true"
        href="#"
        v-scroll-to="'#projects'"
      >See Projects</button>
      <div
        class="jumbotron-button-container"
        data-aos="fade"
        data-aos-duration="2000"
        data-aos-easing="ease-in"
        data-aos-once="true"
      >
        <Button :buttonType="'Github'" :links="header.links"></Button>
        <Button :buttonType="'LinkedIn'" :links="header.links"></Button>
        <Button :buttonType="'CV'" :links="header.links"></Button>
        <Button :buttonType="'Contact'" :links="header.links"></Button>
      </div>
    </header>
  </div>
</template>

<script>
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

<style scoped>
.line {
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
}

.jumbotron {
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: var(--card);
  height: 100vh;
  margin-bottom: 0px;
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
}

.jumbotron-button {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: white;
  border-radius: 0px;
  padding: 1rem 1.25rem 1rem 1.25rem;
  border: 2px solid var(--accent1);
  background-color: #27272f !important;
}

.jumbotron-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1rem;
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


