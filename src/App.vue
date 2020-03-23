<template>
  <div id="app">
    <Jumbotron :header="this.header" />
    <Project id="projects" :projects="this.projects" />
    <ContactForm id="contact" :contact="this.contact" />
    <Footer />
  </div>
</template>

<script>
import Project from "./components/Project";
import Jumbotron from "./components/Jumbotron";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import websiteData from "../public/website_data.json";

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
      header: websiteData.header,
      projects: websiteData.projects,
      contact: websiteData.contact
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
