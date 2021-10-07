<template>
  <form
    class="m-4 rounded-xl border border-solid border-dark-grey p-4"
    @submit.prevent="submitForm"
  >
    <div class="my-2">
      <label class="text-white block font-bold mb-2" for="email"
        >Your E-mail</label
      >
      <input
        class="bg-bright-grey block w-full border border-solid border-bright-grey p-1 outline-none"
        type="email"
        id="email"
        v-model.trim="email"
      />
    </div>
    <div class="my-2">
      <label class="text-white block font-bold mb-2" for="message"
        >Message</label
      >
      <textarea
        class="bg-bright-grey block w-full border border-solid border-bright-grey p-1 outline-none"
        rows="5"
        id="message"
        v-model.trim="message"
      ></textarea>
    </div>
    <p class="font-bold text-dark-red" v-if="!formIsValid">Form is invalid</p>
    <div class="text-center">
      <BaseButton>Send Message</BaseButton>
    </div>
  </form>
</template>

<script>
import BaseButton from "../../components/stateless/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.message === ""
      ) {
        this.formIsValid = false;
        return;
      }
      this.$store.dispatch("requests/contactCoach", {
        email: this.email,
        message: this.message,
        coachId: this.$route.params.id,
      });
      this.$router.replace("/coaches");
    },
  },
};
</script>
