<template>
  <div class="projects">
    <h1>Projects</h1>
    <hr class="line">
    <b-card-group class="project-card-group">
      <b-card
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        class="mb-2 project-card"
        v-for="(project, index) in projects"
        :key="index"
        footer-tag="footer"
      >
        <a :href="getUrl(project)" alt="Go to project">
          <b-card-img-lazy
            v-b-tooltip.hover
            :src="project.imageUrl"
            v-bind="mainProps"
            :alt="project.title"
          ></b-card-img-lazy>
        </a>
        <a :href="getUrl(project)" alt="Go to project">
          <b-card-title class="project-card-title" :title="project.title"></b-card-title>
        </a>
        <hr>
        <b-card-text class="project-card-text">{{ project.description }}</b-card-text>
        <div slot="footer">
          <b-button
            v-if="project.projectUrl"
            class="project-card-button"
            :href="project.projectUrl"
            v-b-tooltip.hover.left
            title="See Project"
            alt="See this program running"
          >
            <img src="../assets/screen.png" alt="See this program running">
          </b-button>
          <b-button
            class="project-card-button"
            :href="project.githubUrl"
            v-b-tooltip.hover.right
            title="See Code"
            alt="Go to the Github Repo"
          >
            <img src="../assets/github.png" alt="Go to the Github Repo">
          </b-button>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  props: {
    projects: Array
  },
  data() {
    return {
      mainProps: {
        title: "See Project",
        class: "project-card-image",
        "blank-width": 300,
        "blank-height": 169,
        "blank-color": "grey"
      }
    };
  },
  methods: {
    getUrl(project) {
      if (project.projectUrl) return project.projectUrl;
      if (!project.projectUrl) return project.githubUrl;
    }
  }
};
</script>

<style scoped>
.line {
  width: 60%;
}

h1 {
  color: white;
  margin-top: 2rem;
}

.project-card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.project-card {
  margin-top: 2rem;
  margin-bottom: 1rem;
  max-width: 20rem;
  min-width: 20rem;
  background-color: #33333d;
  border-radius: 0px;
  padding: 0;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.card-body {
  padding: 0;
}

.project-card-image {
  border-radius: 0;
  margin: 0;
  width: 100%;
}

.project-card-image:hover {
  cursor: pointer;
  border-top: 2px solid #1eb980;
  border-left: 2px solid #1eb980;
  border-right: 2px solid #045d56;
  border-bottom: 2px solid #045d56;
  filter: drop-shadow(0.1rem 0.1rem 0.5rem #045d56);
}

.project-card-title {
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #FFF;
}

.project-card-text {
  color: #FFF !important;
  margin-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 7rem;
}

.project-card-button {
  border-radius: 0px;
  border: 2px solid #045d56;
  background-color: #27272f !important;
  margin-left: 1rem;
  margin-right: 1rem;
}

.project-card-button:hover {
  border: 2px solid #1eb980;
  background-color: #33333d !important;
  cursor: pointer;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.project-card-button img {
  filter: invert(100%);
}

a:link {
  color: #045d56;
}

a:visited {
  color: #1eb980;
}

a:hover {
  color: #045d56;
}

a:active {
  color: #1eb980;
}

@media only screen and (max-width: 575px) {
  .project-card-group {
    flex-flow: row wrap;
  }
}

@media only screen and (max-width: 74rem) {
  .project-card-group {
    width: 100%;
  }
}

@media only screen and (min-width: 180rem) {
  .project-card {
    min-width: 40rem;
  }

  .project-card-title {
    font-size: 3rem;
  }

  .project-card-text {
    font-size: 1.5rem !important;
    height: 10rem;
  }
}
</style>

