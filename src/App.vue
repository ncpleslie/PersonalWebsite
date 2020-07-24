<template>
  <div id="app">
    <div v-if="websiteData">
      <Jumbotron :header="websiteData.header" />
      <Project id="projects" :projects="websiteData.projects" />
      <ContactForm id="contact" :contact="websiteData.contact" />
      <Footer />
    </div>
    <Loading v-else />
  </div>
</template>

<script>
// CHANGE THIS
const PROFILE_URL = "https://ncpleslie.github.io/website_data.json";

import Project from "./components/Project";
import Jumbotron from "./components/Jumbotron";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

export default {
  name: "App",
  components: {
    Project,
    Jumbotron,
    ContactForm,
    Footer,
    Loading,
  },
  data() {
    return {
      websiteData: null,
    };
  },
  async created() {
    let response = await fetch(PROFILE_URL);
    this.websiteData = await response.json();
  },
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
</style>