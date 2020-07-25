<template>
  <div id="app">
    <div v-if="head || projects || contact">
      <Jumbotron v-if="head" :header="head" />
      <Project v-if="projects" id="projects" :projects="projects" />
      <ContactForm v-if="contact" id="contact" :contact="contact" />
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
      head: null,
      projects: null,
      contact: null,
    };
  },
  created() {
    this.getHead();
    this.getProjects();
    this.getContact();
  },
  methods: {
    async getHead() {
      const contentType = "head";
      this.head = await this.get(contentType);
    },
    async getProjects() {
      const contentType = "projects";
      this.projects = await this.get(contentType);
    },
    async getContact() {
      const contentType = "contact";
      this.contact = await this.get(contentType);
    },
    async get(contentType) {
      let response;
      if (this.head && this.projects && this.contact) return;
      try {
        response = await fetch(
          `${process.env.VUE_APP_PROFILE_DATA_URL}/${contentType}`
        );
        return await response.json();
      } catch (err) {
        this.getAll();
      }
    },
    async getAll() {
      let response = await fetch(process.env.VUE_APP_BACKUP_PROFILE_DATA_URL);
      response = await response.json();
      this.head = response.header;
      this.projects = response.projects;
      this.contact = response.contact;
    },
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