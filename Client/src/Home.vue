<template>
  <div id="home">
    <div v-if="header">
      <Jumbotron v-if="header" :header="header" />
      <Project v-if="projects" id="projects" :projects="projects" />
      <Loading :title="'Projects'" v-else />
      <ContactForm v-if="contact" id="contact" :contact="contact" />
      <Loading :title="'Contact'" v-else />
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
import firebase from "firebase/app";

import "firebase/database";
import config from "../ncpleslie-api-firebase-adminsdk.json";

firebase.initializeApp(config);
const db = firebase.database();

export default {
  name: "Home",
  components: {
    Project,
    Jumbotron,
    ContactForm,
    Footer,
    Loading,
  },
  data() {
    return {
      header: null,
      projects: null,
      contact: null,
    };
  },
  created() {
    this.getHeader();
    this.getProjects();
    this.getContact();
  },
  methods: {
    getHeader() {
      if (this.header) return;
      const ref = db.ref("header");
      ref.once("value", (snapshot) => {
        this.header = snapshot.val();
      });
    },
    getProjects() {
      if (this.projects) return;
      const ref = db.ref("projects");
      ref.once("value", (snapshot) => {
        this.projects = snapshot.val();
      });
    },
    getContact() {
      if (this.contact) return;
      const ref = db.ref("contact");
      ref.once("value", (snapshot) => {
        this.contact = snapshot.val();
      });
    },
  },
};
</script>

<style>
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #27272f;
}
</style>