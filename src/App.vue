<template>
  <div id="app">
    <Jumbotron/>
    <Project id="projects" :projects="this.projects"/>
    <ContactForm id="contact"/>
    <Footer/>
  </div>
</template>

<script>
import Project from "./components/Project";
import Jumbotron from "./components/Jumbotron";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Project,
    Jumbotron,
    ContactForm,
    Footer
  },
  data() {
    return {
      projects: [
        {
          title: "Correlation and Regression",
          description:
            "After creating an algorithm to calculate Correlation and Regression between two arrays, I recreated the same website using different technologies. NodeJS, React, Vue, and Bootstrap",
          imageUrl: "thumbnails/small/correlationthumbnail.jpg",
          projectUrl: "https://6t14c.codesandbox.io/",
          githubUrl: "https://github.com/ncpleslie/PR280-Assignment2"
        },
        {
          title: "Join Us - Cult Website",
          description:
            "A website connecting a relational database with the client using NodeJS, EJS, and Express. Built in conjection with Colt Steele (Udemy)",
          imageUrl: "thumbnails/small/cultthumbnail.jpg",
          githubUrl: "https://github.com/ncpleslie/JoinUs_Cult_Website"
        },
        {
          title: "Vector LTD Database",
          description:
            "A relational database designed and built for Vector Energy using MySQL. Used to stored information sent from 'Smart Meters'",
          imageUrl: "thumbnails/small/vectorthumbnail.jpg",
          githubUrl:
            "https://github.com/ncpleslie/VectorLTD_SmartMeter_Database"
        },
        {
          title: "Date Night",
          description:
            "Date Night is a flutter based cross-platform mobile app designed to make your relationship easier.",
          imageUrl: "thumbnails/small/datenightthumbnail.jpg",
          githubUrl: "https://github.com/ncpleslie/date_night"
        },
        {
          title: "Wizard Saves the City",
          description: "A Platform game in JavaScript using Phaser 3",
          imageUrl: "thumbnails/small/platformgamethumbnail.jpg",
          projectUrl: "https://ncpleslie.github.io/PlatformGame/",
          githubUrl: "https://github.com/ncpleslie/PlatformGame"
        },
        {
          title: "Commonwealth Games",
          description:
            "Taking the assignment I worked on in Semester One I extended it to create a Single Page Application",
          imageUrl: "thumbnails/small/commonwealthgamesthumbnail.jpg",
          projectUrl: "https://ncpleslie.github.io/commonwealthgames2018",
          githubUrl: "https://github.com/ncpleslie/commonwealthgames2018"
        },
        {
          title: "New Zealand Music Live",
          description: "A website for a Live Music Recording Company",
          imageUrl: "thumbnails/small/NZMLthumbnail.jpg",
          projectUrl: "https://ncpleslie.github.io/NZML/",
          githubUrl: "https://github.com/ncpleslie/NZML"
        },
        {
          title: "Weather App",
          description: "A basic Weather App using jQuery and Dark Sky API",
          imageUrl: "thumbnails/small/weatherthumbnail.jpg",
          projectUrl: "https://codepen.io/nick-leslie/pen/vjJGrp",
          githubUrl: "https://codepen.io/nick-leslie/pen/vjJGrp"
        },
        {
          title: "Quote Machine",
          description:
            "A basic quote generator. Built in conjection with freeCodeCamp",
          imageUrl: "thumbnails/small/quotethumbnail.jpg",
          projectUrl: "https://codepen.io/nick-leslie/pen/qYBNWG",
          githubUrl: "https://codepen.io/nick-leslie/pen/qYBNWG"
        },
        {
          title: "Hackintosh Project for the Acer Aspire v7",
          description: "Currently running Mojave on the Acer Aspire V7-482PG",
          imageUrl: "thumbnails/small/hackintoshthumbnail.jpg",
          githubUrl: "https://github.com/ncpleslie/Acer-V7-Aspire-482PG"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background-color: #27272f;
}

Project {
  margin: 0 auto;
}
</style>
