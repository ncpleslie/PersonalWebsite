<template>
  <div id="home">
    <Jumbotron v-if="header" :header="header" />
    <Loading :title="''" v-else />
    <Project v-if="projects" id="projects" :projects="projects" />
    <Loading :title="'Projects'" v-else />
    <ContactForm v-if="contact" id="contact" :contact="contact" />
    <Loading :title="'Contact'" v-else />
    <Footer />
  </div>
</template>

<script>
import Project from "../components/Home/Project";
import Jumbotron from "../components/Home/Jumbotron";
import ContactForm from "../components/Home/ContactForm";
import Footer from "../components/Home/Footer";
import Loading from "../components/Home/Loading";

import * as firebase from "firebase/app";
import "firebase/database";

import personalInfo from "../../public/personal_info.json";

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
      personalInfo: personalInfo,
      header: null,
      projects: null,
      contact: null,
      db: firebase.database(),
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
      if (this.personalInfo && this.personalInfo.header)
        this.header = this.personalInfo.header;
    },
    getProjects() {
      if (this.projects) return;
      const ref = this.db.ref("projects");
      ref.once("value", (snapshot) => {
        this.projects = snapshot.val();
      });
    },
    getContact() {
      if (this.contact) return;
      if (this.personalInfo && this.personalInfo.contact)
        this.contact = this.personalInfo.contact;
    },
  },
};
</script>

<style>
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: var(--background);
}

a:link {
  color: var(--accent1);
}

a:visited {
  color: var(--accent1);
}

a:hover {
  color: var(--accent2);
}

a:active {
  color: var(--accent2);
}

.line {
  width: 60%;
  border-top: 1px solid rgba(92, 92, 92, 0.1);
}
</style>