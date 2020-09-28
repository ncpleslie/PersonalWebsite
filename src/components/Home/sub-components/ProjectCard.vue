<template>
  <article class="custom-card">
    <header class="custom-card_header">
      <a :href="getUrl()" alt="Go to project" :title="project.title">
        <h2>{{ project.title }}</h2>
      </a>
    </header>
    <div class="custom-card_img">
      <a
        :class="{ 'custom-card_img-link': getUrl() }"
        :href="getUrl()"
        alt="Go to project"
        :title="project.title"
      >
        <img
          width="320"
          height="180"
          loading="lazy"
          :alt="project.title"
          :title="project.title"
          v-if="isPicture()"
          :src="project.imageUrl"
        />
      </a>
      <iframe
        width="320"
        height="180"
        class="custom-card_img"
        v-if="isYoutube()"
        :src="project.imageUrl"
        :title="project.title"
        allowfullscreen
      ></iframe>
    </div>
    <div class="custom-card_description">
      <p>{{ project.description }}</p>
    </div>
    <div class="custom-card_technology">
      <p v-for="(aTech, index) in project.technology.split(',')" :key="index">
        {{ aTech }}
      </p>
    </div>

    <div class="custom-card_footer">
      <a
        class="custom-card_button"
        :class="{ disabled: !project.projectUrl }"
        :href="project.projectUrl"
        v-b-tooltip.hover.left
        title="See Project"
        alt="See this program running"
      >
        <img src="../../../assets/screen.svg" alt="See this program running" />
      </a>

      <a
        class="custom-card_button"
        :class="{ disabled: !project.githubUrl }"
        :href="project.githubUrl"
        v-b-tooltip.hover.right
        title="See Code"
        alt="Go to the Github Repo"
      >
        <img src="../../../assets/github.svg" alt="Go to the Github Repo" />
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object,
  },

  computed: {
    hasProjectUrl() {
      return {
        disabled: !this.project.projectUrl ? true : false,
      };
    },
  },
  methods: {
    isYoutube() {
      return this.project.imageUrl.match(/\.(youtube)/g);
    },
    isPicture() {
      return this.project.imageUrl.match(/\.(jpeg|jpg|png|gif)/g);
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
a {
  text-decoration: none;
}

.custom-card {
  color: #d3d3d3;
  display: flex;
  position: relative;
  flex-direction: column;
  width: 400px;
  padding: 1.5rem;
  border-radius: 0.25rem;
  background: var(--card);
  box-shadow: 0 0.5rem 3rem 0.5rem rgba(0, 0, 0, 0.87);
  transition: all 0.2s ease-in-out;
}

.custom-card:hover {
  transform: scale3d(1.05, 1.05, 1.05);
  z-index: 10;
}

.custom-card_header h2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -1.5rem;
  color: white;
  height: 7rem;
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

.custom-card_img iframe {
  width: 100%;
  height: 242px;
  border: none;
}

.custom-card_img img {
  width: 100%;
  height: auto;
}

.custom-card_img-link:hover {
  cursor: pointer;
  outline-color: var(--accent1);
  outline-style: outset;
  outline-width: 2px;
  filter: drop-shadow(0.1rem 0.1rem 0.5rem var(--accent2));
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
  padding: 0.5rem 0 0.5rem;
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

.custom-card_footer {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(92, 92, 92, 0.1);
}

.custom-card_button {
  border-radius: 0px;
  border: 2px solid var(--accent1);
  background-color: var(--button) !important;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 0.75rem;
}

.custom-card_button:hover {
  border: 2px solid var(--accent2);
  background-color: var(--button-accent) !important;
  cursor: pointer;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.custom-card_button.disabled {
  cursor: default;
  border: 2px solid grey;
  background-color: var(--button) !important;
}

.custom-card_button img {
  filter: invert(100%);
}

/* Large format displays - MacBook 15inch, etc */
@media only screen and (min-width: 144rem) {
  .custom-card {
    min-width: 40rem;
    min-height: 35rem;
  }

  .custom-card_header h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .custom-card_description {
    font-size: 1.5rem !important;
  }

  .custom-card_technology p {
    font-size: 1rem;
  }
}
</style>