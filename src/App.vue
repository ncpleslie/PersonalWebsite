<template>
  <div id="app">
    <Jumbotron />
    <Project id="projects" :projects="this.projects" />
    <ContactForm id="contact" />
    <Footer />
  </div>
</template>

<script>
import Project from "./components/Project";
import Jumbotron from "./components/Jumbotron";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import projectJson from "../public/projects.json";

export default {
  name: "App",
  components: {
    Project,
    Jumbotron,
    ContactForm,
    Footer
  },
  data() {
    return {
      projects: projectJson
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #27272f;
}

Project {
  margin: 0 auto;
}
</style>
