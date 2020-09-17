<template>
  <!-- Project Cards start here -->
  <!-- <b-card
    data-aos="fade-up"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-once="true"
    class="mb-2 project-card"
    footer-tag="footer"
  >-->
  <!-- Image section -->
  <!-- <div v-if="isPicture()">
      <a v-if="getUrl()" :href="getUrl()" alt="Go to project" :title="project.title">
        <b-card-img-lazy
          v-b-tooltip.hover
          :src="project.imageUrl"
          v-bind="mainProps"
          :alt="project.title"
          :title="project.title"
        ></b-card-img-lazy>
  </a>-->
  <!-- If a project has no code or preview then remove all hover styling -->
  <!-- <b-card-img-lazy
        class="project-card-image no-link"
        v-else-if="!getUrl()"
        :src="project.imageUrl"
        v-bind="mainProps"
        :alt="project.title"
        :title="project.title"
      ></b-card-img-lazy>
  </div>-->
  <!-- Display youtube frame -->
  <!-- <div v-if="isYoutube()">
      <b-embed type="iframe" aspect="16by9" :src="project.imageUrl" allowfullscreen></b-embed>
  </div>-->
  <!-- Project card title starts here -->
  <!-- <b-card-body>
      <a :href="getUrl()" alt="Go to project">
        <b-card-title class="project-card-title" :title="project.title"></b-card-title>
      </a>
  <hr />-->
  <!-- Project card description starts here -->
  <!-- <b-card-text class="project-card-description">{{ project.description }}</b-card-text> -->
  <!-- Project card technology starts here -->
  <!-- <b-card-text class="project-card-tech">{{ project.technology }}</b-card-text>
  </b-card-body>-->

  <!-- Project card footer and buttons to code/preview starts here -->
  <!-- <div slot="footer" class="project-card-footer">
      <b-button
        v-if="project.projectUrl"
        class="project-card-button"
        :href="project.projectUrl"
        v-b-tooltip.hover.left
        title="See Project"
        alt="See this program running"
      >
        <img src="../../../assets/screen.svg" alt="See this program running" />
      </b-button>

      <b-button
        v-else
        disabled
        class="project-card-button disabled"
        :href="project.projectUrl"
        v-b-tooltip.hover.left
        title="No Project Provide"
        alt="No Project Provide"
      >
        <img src="../../../assets/screen.svg" alt="No Project Provide" />
      </b-button>

      <b-button
        v-if="project.githubUrl"
        class="project-card-button"
        :href="project.githubUrl"
        v-b-tooltip.hover.right
        title="See Code"
        alt="Go to the Github Repo"
      >
        <img src="../../../assets/github.svg" alt="Go to the Github Repo" />
      </b-button>
      <b-button
        v-else
        disabled
        class="project-card-button disabled"
        v-b-tooltip.hover.right
        title="No Code Provided"
        alt="No Code Provided"
      >
        <img src="../../../assets/github.svg" alt="No Code Provided" />
      </b-button>
    </div>
  </b-card>-->

  <article class="custom-card">
    <header class="custom-card_header">
      <h2>{{project.title}}</h2>
    </header>
    <div class="custom-card_img">
      <img v-if="isPicture()" :src="project.imageUrl" />
      <b-embed
        v-if="isYoutube()"
        type="iframe"
        aspect="16by9"
        :src="project.imageUrl"
        allowfullscreen
      ></b-embed>
    </div>
    <div class="custom-card_description">
      <p>{{ project.description }}</p>
    </div>
    <div class="custom-card_technology">
      <p v-for="(aTech, index) in project.technology.split(',')" :key="index">{{ aTech }}</p>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },
  data() {
    return {
      mainProps: {
        title: "See Project",
        class: "project-card-image",
        "blank-width": 300,
        "blank-height": 169,
        "blank-color": "grey",
      },
    };
  },
  methods: {
    isYoutube() {
      return this.project.imageUrl.match(/\.(youtube)/g) != null;
    },
    isPicture() {
      return this.project.imageUrl.match(/\.(jpeg|jpg|png|gif)/g) != null;
    },
    getUrl() {
      if (this.project.projectUrl) return this.project.projectUrl;
      if (!this.project.projectUrl && this.project.githubUrl)
        return this.project.githubUrl;
      if (this.project.projectUrl && !this.project.githubUrl)
        return this.project.projectUrl;
      if (!this.project.projectUrl && !this.project.githubUrl) return null;
    },
  },
};
</script>

<style scoped>
.custom-card {
  color: #d3d3d3;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 400px;
  padding: 1.5rem;
  border-radius: 0.25rem;
  background: var(--card);
  box-shadow: -1rem 0.5rem 3rem 0.5rem rgba(0, 0, 0, 0.87);
  transition: all 0.2s ease-in-out;
}

.custom-card:hover {
  transform: scale3d(1.1, 1.1, 1.1);
  z-index: 10;
}

.custom-card_header h2 {
  height: 5rem;
  cursor: pointer;
  transition: all 0.2s ease-in;
  border-bottom: 1px solid rgba(92, 92, 92, 0.1);
}

.custom-card_header h2:hover {
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.custom-card_img {
  position: relative;
}

.custom-card_img img {
  width: 100%;
}

.custom-card_description {
  height: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(92, 92, 92, 0.1);
}

.custom-card_technology {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 0;
  padding: 0.5rem 0 1rem;
  line-height: 2;
}

.custom-card_technology p {
  font-style: normal;
  font-weight: 700;
  font-size: 0.5rem;
  color: #b5b5bd;
  text-transform: uppercase;
  font-size: 0.66rem;
  border: 3px solid #28242f;
  padding: 0.2rem 0.85rem 0.25rem;
  position: relative;
  transition: 0.2s;
}

.custom-card_technology p:hover {
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
  text-shadow: none;
  box-decoration-break: clone;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  background-clip: text;
  border-color: white;
  transform: translateY(-0.1rem);
}

.project-card {
  background-color: #33333d;
  border-radius: 0px;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.card-body {
  padding: 0;
}

.project-card-footer {
  min-height: 2.5rem;
}

.project-card-image {
  border-radius: 0;
  margin: 0;
  width: 100%;
}

.project-card-image:hover {
  cursor: pointer;
  outline-color: #1eb980;
  outline-style: outset;
  outline-width: 2px;
  filter: drop-shadow(0.1rem 0.1rem 0.5rem #045d56);
}

.no-link:hover {
  cursor: unset;
  border-top: unset;
  border-left: unset;
  border-right: unset;
  filter: unset;
}

.project-card-title {
  padding-top: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: #fff;
}

.project-card-description {
  color: #fff;
  padding: 0rem 1rem 0 1rem;
}

.project-card-tech {
  color: #fff;
  padding-bottom: 1rem;
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

.project-card-button.disabled {
  cursor: default;
  border: 2px solid grey;
  background-color: #27272f !important;
}

.project-card-button.disabled:hover {
  cursor: default;
  border: 2px solid grey;
  background-color: #27272f !important;
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

/* Large format displays - MacBook 15inch, etc */
@media only screen and (min-width: 144rem) {
  .project-card {
    min-width: 25rem;
    min-height: 35rem;
  }

  .project-card-title {
    font-size: 2rem;
  }

  .card-body {
    padding: 0;
    min-height: 32rem;
  }

  .project-card-description {
    font-size: 1.5rem !important;
  }
}

/* Large format displays - MacBook 15inch, etc */
@media only screen and (min-width: 180rem) {
  .project-card {
    min-width: 30rem;
    min-height: 30rem;
  }

  .project-card-title {
    font-size: 2.3rem;
  }

  .card-body {
    padding: 0;
    min-height: 35rem;
  }

  .project-card-description {
    font-size: 1.5rem !important;
    height: 0rem;
  }

  .project-card-button {
    border-radius: 0px;
    border: 2px solid #045d56;
    background-color: #27272f !important;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>