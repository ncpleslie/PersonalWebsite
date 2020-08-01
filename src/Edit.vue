<template>
  <div id="edit">
    <b-card class="edit-card" no-body>
      <b-tabs class="edit-tab" small card>
        <b-tab title="New Project" active>
          <b-form @submit.stop.prevent class="edit-form">
            <h2>Add a New Project</h2>

            <b-input class="edit-form-input" v-model="newProject.title" placeholder="Title"></b-input>
            <b-input
              class="edit-form-input"
              v-model="newProject.description"
              placeholder="Description"
            ></b-input>
            <b-input
              class="edit-form-input"
              v-model="newProject.technology"
              placeholder="Technology"
            ></b-input>
            <b-input
              class="edit-form-input"
              v-model="newProject.githubUrl"
              placeholder="GitHub URL"
            ></b-input>
            <b-input
              class="edit-form-input"
              v-model="newProject.projectUrl"
              placeholder="Project URL"
            ></b-input>
            <b-input
              class="edit-form-input"
              v-model="newProject.imageUrl"
              placeholder="Image or YouTube URL"
            ></b-input>
            <b-form-file
              class="edit-form-input"
              v-model="newImageFile.newProject"
              :state="Boolean(newImageFile.newProject)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop image file here..."
              accept=".jpg, .png, .gif, .webp, .jpeg"
            ></b-form-file>

            <b-button type="submit" variant="primary" @click="addNewProject">Add</b-button>
          </b-form>
        </b-tab>
        <b-tab title="Current Projects">
          <div v-if="projects" class="edit-form-projects">
            <b-form
              @submit.stop.prevent
              v-for="(project, index) in projects"
              :key="index"
              class="edit-form"
            >
              <h3>Project {{ index+1 }}</h3>
              <b-input class="edit-form-input" v-model="project.title" placeholder="Title"></b-input>
              <b-input
                class="edit-form-input"
                v-model="project.description"
                placeholder="Description"
              ></b-input>
              <b-input
                class="edit-form-input"
                v-model="project.technology"
                placeholder="Technology"
              ></b-input>
              <b-input class="edit-form-input" v-model="project.githubUrl" placeholder="GitHub URL"></b-input>
              <b-input
                class="edit-form-input"
                v-model="project.projectUrl"
                placeholder="Project URL"
              ></b-input>
              <b-input class="edit-form-input" v-model="project.imageUrl" placeholder="Image URL"></b-input>

              <b-form-file
                class="edit-form-input"
                v-model="newImageFile.index"
                :state="Boolean(newImageFile.index)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop image file here..."
                accept=".jpg, .png, .gif, .webp, .jpeg"
              ></b-form-file>

              <b-button type="submit" variant="primary" @click="onSubmit('projects', index)">Update</b-button>
            </b-form>
          </div>
        </b-tab>
        <b-tab title="Name and Contact">
          <b-form v-if="header" @submit.stop.prevent class="edit-form">
            <h2>Header Information</h2>
            <label class="input-form-label" for="name">Name</label>
            <b-input class="edit-form-input" v-model="header.name" id="name"></b-input>

            <label class="input-form-label" for="description">Description</label>
            <b-input class="edit-form-input" v-model="header.description" id="description"></b-input>

            <b-input class="edit-form-input" v-model="header.links.CV"></b-input>
            <b-input class="edit-form-input" v-model="header.links.github"></b-input>
            <b-input class="edit-form-input" v-model="header.links.linkedIn"></b-input>
            <b-button type="submit" variant="primary" @click="onSubmit('header')">Update</b-button>
          </b-form>

          <b-form v-if="contact" @submit.stop.prevent class="edit-form">
            <h2>Contact Information</h2>

            <b-input class="edit-form-input" v-model="contact.email"></b-input>
            <b-input class="edit-form-input" v-model="contact.formSpringUrl"></b-input>

            <b-button type="submit" variant="primary" @click="onSubmit('contact')">Update</b-button>
          </b-form>
        </b-tab>
      </b-tabs>
    </b-card>
    <b-button variant="primary" @click="onSave">Backup Database To File</b-button>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

export default {
  data() {
    return {
      header: null,
      projects: null,
      contact: null,
      db: firebase.database(),
      newProject: {},
      newImageFile: { newProject: null },
    };
  },
  created() {
    this.getHeader();
    this.getProjects();
    this.getContact();
  },
  methods: {
    onSave() {
      const json = {
        header: this.header,
        projects: this.projects,
        contact: this.contact,
      };
      var file = new Blob([JSON.stringify(json)], { type: "text/plain" });
      const e = document.createEvent("MouseEvents");
      const a = document.createElement("a");
      a.download = "website_data.json";
      a.href = window.URL.createObjectURL(file);
      a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
      e.initEvent(
        "click",
        true,
        false,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      a.dispatchEvent(e);
    },
    async addNewProject() {
      if (this.projects && this.newProject) {
        if (this.newImageFile) {
          this.newProject.imageUrl = this.uploadImage(
            this.newImageFile.newProject
          );
        }

        try {
          this.projects.push(this.newProject);
          firebase.database().ref("projects").set(this.projects);
          this.newProject = {};
        } catch (err) {
          alert(`An error occured. Reason: ${err}`);
        }
      }
    },
    async uploadImage(image) {
      let imageUrl;
      if (image) {
        try {
          const storage = firebase.storage();
          const storageRef = storage.ref();
          const fullImageRef = storageRef.child(`projects/${image.name}`);
          const snapshot = await fullImageRef.put(image);
          imageUrl = await snapshot.ref.getDownloadURL();
        } catch (err) {
          alert(`An error occured. Reason: ${err}`);
        }
      }
      return imageUrl;
    },
    async onSubmit(type, index) {
      if (type === "header") {
        firebase.database().ref("header").update(this.header);
      }

      if (type === "contact") {
        firebase.database().ref("contact").update(this.contact);
      }

      if (type === "projects") {
        if (this.newImageFile.index) {
          // eslint-disable-next-line no-console
          console.log(this.projects[index].imageUrl);
          this.projects[index].imageUrl = await this.uploadImage(
            this.newImageFile.index
          );
        }

        firebase
          .database()
          .ref("projects/" + index)
          .update(this.projects[index]);
      }
    },
    getHeader() {
      if (this.header) return;
      const ref = this.db.ref("header");
      ref.once("value", (snapshot) => {
        this.header = snapshot.val();
      });
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
      const ref = this.db.ref("contact");
      ref.once("value", (snapshot) => {
        this.contact = snapshot.val();
      });
    },
  },
};
</script>

<style scoped>
#edit {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.edit-card {
  width: 70%;
  margin: 1rem;
}

h2,
h3 {
  color: #33333d;
}

.edit-form-projects {
  min-width: 70%;
}

.edit-form {
  outline-color: #aaa;
  outline-style: outset;
  outline-width: 1px;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-width: 70%;
}

.edit-form-input {
  margin-bottom: 2rem;
  color: #33333d;
  background-color: #fff;
}

.input-form-label {
  color: white;
}
</style>