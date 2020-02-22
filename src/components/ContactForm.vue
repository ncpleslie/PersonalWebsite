<template>
  <div class="contact">
    <h2>Contact Me</h2>
    <h3>
      Contact me at
      <a href="mailto:ncpleslie@gmail.com">ncpleslie@gmail.com</a>
    </h3>
    <hr class="line" />

    <b-form class="contact-form" action="https://formspree.io/xrgkbgrb" method="POST">
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input
          name="_replyto"
          class="contact-form-input"
          id="input-1"
          type="email"
          required
          placeholder="Your email here"
          alt="Your Email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          name="name"
          class="contact-form-input"
          id="input-2"
          required
          placeholder="Name"
          alt="Your Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Your Message:" label-for="textarea-default">
        <b-form-textarea
          name="message"
          class="contact-form-input"
          id="textarea-default"
          placeholder="What would you like to say?"
          alt="Your Message"
        ></b-form-textarea>
      </b-form-group>
      <b-button class="contact-button" type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  }
};
</script>

<style scoped>
.line {
  width: 60%;
}

.contact {
  margin-top: 2rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  color: white;
  background-color: #33333d;
}

.contact-form {
  margin: 0 auto;
  width: 60%;
}

h3 {
  font-size: 1rem;
}

.contact-form-input {
  background-color: #27272f;
  color: white;
  border: 0;
}

.contact-form-input:focus {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16), 0 0 0 2px #045d56;
}

.contact-form-input::placeholder {
  color: white;
  opacity: 0.5;
}

.contact-button {
  border-radius: 0px;
  border: 2px solid #045d56;
  background-color: #27272f !important;
  margin-top: 2rem;
}

.contact-button:hover {
  border: 2px solid #1eb980;
  background-color: #33333d !important;
  cursor: pointer;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.contact-button:active,
.contact-button:focus {
  border: 2px solid #045d56;
  background-color: #27272f !important;
}

a:link {
  color: #1eb980;
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
</style>

