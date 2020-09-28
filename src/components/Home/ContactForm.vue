<template>
  <div class="contact">
    <h2>Contact Me</h2>
    <h3>
      Contact me at
      <a :href="'mailto:' + this.contact.email">{{ this.contact.email }}</a>
    </h3>
    <hr class="line" />

    <form
      class="contact-form"
      v-bind:action="this.contact.formSpringUrl"
      method="POST"
    >
      <input
        name="_replyto"
        class="contact-form_input"
        id="input-1"
        type="email"
        required
        alt="Your Email"
        placeholder=" "
      />
      <label class="contact-form_input-label" for="_replyto"
        ><span class="contact-form_input-label-span">Email</span></label
      >
      <input
        name="name"
        class="contact-form_input"
        id="input-2"
        required
        alt="Your Name"
        placeholder=" "
      />
      <label class="contact-form_input-label" for="name"
        ><span class="contact-form_input-label-span">Name</span></label
      >
      <textarea
        name="message"
        class="contact-form_input"
        id="textarea-default"
        alt="Your Message"
        placeholder=" "
      ></textarea>
      <label class="contact-form_input-label" for="message"
        ><span class="contact-form_input-label-span"
          >What would you like to say?</span
        ></label
      >

      <button class="contact-button" type="submit" variant="primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    contact: Object,
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
.contact {
  margin-top: 2rem;
  padding-bottom: 2rem;
  padding-top: 1rem;
  color: white;
  background-color: var(--card);
  display: flex;
  flex-direction: column;
}

.contact-form {
  margin: 0 auto;
  width: 60%;
  position: relative;
}

h3 {
  font-size: 1rem;
}

.contact-form_input {
  background-color: #27272f;
  color: white;
  border: 0;
  width: 100%;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 0.25rem;
}

.contact-form_input:focus {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.16), 0 0 0 2px var(--accent1);
}

.contact-form_input::placeholder {
  color: white;
  opacity: 0.7;
}

.contact-button {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: white;
  border-radius: 0px;
  padding: 1rem 1.25rem 1rem 1.25rem;
  border: 2px solid var(--accent1);
  background-color: var(--button) !important;
}

.contact-button:hover {
  border: 2px solid var(--accent2);
  background-color: var(--button-accent) !important;
  cursor: pointer;
  -webkit-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  -moz-box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
  box-shadow: 0px 6px 5px 3px rgba(20, 20, 20, 0.2);
}

.contact-button:active,
.contact-button:focus {
  border: 2px solid var(--accent2);
  background-color: #27272f !important;
}

.contact-form_input-label {
  position: absolute;
  left: 0px;
  padding: 2rem 1rem;
  transition: all 0.3s ease;
}

.contact-form_input-label-span {
  color: white;
  opacity: 0.7;
}

.contact-form_input:focus + .contact-form_input-label,
.contact-form_input:not(:placeholder-shown) + .contact-form_input-label {
  transform: translateY(-2.7rem);
  color: white;
  opacity: 1;
}
</style>

