<template>
  <a
    class="project-card-button"
    :href="getBtnData.url"
    v-b-tooltip.hover.bottom
    :title="getBtnData.title"
  >
    <img :src="getBtnData.img_url" :alt="getBtnData.alt" />
  </a>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    buttonType: String,
    links: Object,
  },
  data() {
    return {
      buttonData: {
        Github: {
          title: "Github",
          img_url: require("../../../assets/github.svg"),
          alt: "Go to my Github Repo",
          url: this.links.github,
        },
        LinkedIn: {
          title: "LinkedIn",
          img_url: require("../../../assets/linkedin.svg"),
          alt: "Go to my LinkedIn",
          url: this.links.linkedIn,
        },
        CV: {
          title: "CV/Resume",
          img_url: require("../../../assets/resume.svg"),
          alt: "Go to my Resume Or CV",
          url: this.links.CV,
        },
        Contact: {
          title: "Contact",
          img_url: require("../../../assets/email.svg"),
          alt: "Contact Me",
          url: "#contact",
        },
      },
    };
  },
  computed: {
    getBtnData() {
      return this.buttonData[this.buttonType];
    },
  },
};
</script>

<style scoped>
.project-card-button {
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0px;
  border: 2px solid var(--accent1);
  background-color: var(--button) !important;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-card-button:hover {
  border: 2px solid var(--accent2);
  background-color: var(--button-accent) !important;
  cursor: pointer;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.project-card-button:active {
  background-color: #27272f !important;
}

.project-card-button:focus {
  background-color: #27272f !important;
}

.project-card-button img {
  filter: invert(100%);
}

/* Large format displays - MacBook 15inch, etc */
@media only screen and (min-width: 144rem) {
  .project-card-button {
    line-height: 3rem;
    font-size: 2rem;
  }

  .project-card-button {
    height: 5rem;
    width: 5rem;
  }

  .project-card-button img {
    height: 3rem;
  }
}
</style>