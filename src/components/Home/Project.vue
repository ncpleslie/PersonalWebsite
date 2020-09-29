<template>
  <div class="projects">
    <h2>Projects</h2>
    <hr class="line" />
    <div class="project-card-group">
      <ProjectCard
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from "./sub-components/ProjectCard";
export default {
  props: {
    projects: Array,
  },
  components: {
    ProjectCard,
  },
  created() {
    this.projects = this.projects.reverse();
  },
};
</script>

<style scoped>
h2 {
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  margin-top: 2rem;
}

.project-card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-card-group > .custom-card {
  margin: 1rem;
  flex: 0 1 95%;
  max-width: 30rem;
}
</style>