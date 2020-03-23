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
  justify-content: space-evenly;
  align-items: flex-start;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
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
</style>

