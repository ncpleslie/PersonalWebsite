<template>
  <div class="projects">
    <h2>Projects</h2>
    <hr class="line" />
    <b-card-group class="project-card-group">
      <ProjectCard v-for="(project, index) in projects" :key="index" :project="project"></ProjectCard>
    </b-card-group>
  </div>
</template>

<script>
import ProjectCard from "./sub-components/ProjectCard";
export default {
  props: {
    projects: Array
  },
  components: {
    ProjectCard
  }
};
</script>

<style scoped>
.line {
  width: 60%;
}

h2 {
  color: white;
  font-size: 3rem;
  margin-top: 2rem;
}

.project-card-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project-card-group > .card {
  margin: 2rem;
  flex: 0 1 95%;
  max-width: 30rem;
}

/* To fix misaligned project cards */
@media only screen and (min-width: 39rem) {
  .project-card-group > .card:nth-child(1) {
    margin: 2rem 2rem 2rem 0;
  }
}
</style>