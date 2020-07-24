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
    if (process.env.NODE_ENV == "production") {
      let response = await fetch(process.env.VUE_APP_PROFILE_DATA_URL);
      this.websiteData = await response.json();
    } else {
      this.websiteData = require("../public/website_data.json");
    }
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