<template>
  <div>
    <b-jumbotron fluid>
      <template slot="header">{{header.name}}</template>
      <template slot="lead">{{header.description}}</template>
      <b-button class="project-card-button" href="#" v-scroll-to="'#projects'">See Projects</b-button>
      <hr />
      <div class="jumbotron-button-container">
        <Button :buttonType="'Github'" :links="header.links"></Button>
        <Button :buttonType="'LinkedIn'" :links="header.links"></Button>
        <Button :buttonType="'CV'" :links="header.links"></Button>
        <Button :buttonType="'Contact'" :links="header.links"></Button>
      </div>
    </b-jumbotron>
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
.container {
  width: unset;
}

.jumbotron {
  color: #fff;
  background-color: #33333d;
  height: 100vh;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-card-button {
  border-radius: 0px;
  border: 2px solid #045d56;
  background-color: #27272f !important;
}

.jumbotron-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1rem;
}

.jumbotron-button-container .project-card-button {
  border-radius: 0px;
  border: 2px solid #045d56;
  background-color: #27272f !important;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-card-button:hover {
  border: 2px solid #1eb980;
  background-color: #33333d !important;
  cursor: pointer;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.project-card-button:active {
  background-color: #27272f !important;
}

.project-card-button:focus {
  background-color: #27272f !important;
}

.project-card-button img {
  filter: invert(100%);
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

  p {
    font-size: 2rem;
  }
}
</style>


