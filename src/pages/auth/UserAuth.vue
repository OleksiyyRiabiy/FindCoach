<template>
  <BaseDialog :show="!!error" title="An error occured!" @close="handleError"
    ><p>{{ error }}</p></BaseDialog
  >
  <BaseSpinner v-if="isLoading" />
  <form
    @submit.prevent="submitForm"
    class="shadow-auth-shadow w-400px p-40px absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 bg-dark-grey text-center"
  >
    <h1 class="text-medium text-white text-4xl">Login</h1>
    <input
      class="border-0 bg-transparent block my-5 mx-auto text-center border-2 border-solid border-dark-blue py-14px px-10px w-250px outline-none text-white rounded-24px duration-200 focus:w-300px"
      type="email"
      placeholder="E-mail"
      v-model.trim="email"
    />
    <input
      class="border-0 bg-transparent block my-5 mx-auto text-center border-2 border-solid border-dark-blue py-14px px-10px w-250px outline-none text-white rounded-24px duration-200 focus:w-300px"
      type="password"
      placeholder="Password"
      v-model.trim="password"
    />
    <p v-if="!formIsValid" class="text-white text-center text-xl">
      Form is invalid! Try again.
    </p>
    <div class="flex">
      <button
        class="border-0 bg-transparent block mx-auto my-5 text-center border-2 border-solid border-antique-red py-14px px-35px outline-none text-white rounded-24px duration-300 cursor-pointer hover:bg-antique-red"
      >
        {{ submitButtonCaption }}
      </button>
      <button
        class="border-0 bg-transparent block mx-auto my-5 text-center border-2 border-solid border-antique-red py-14px px-35px outline-none text-white rounded-24px duration-300 cursor-pointer hover:bg-antique-red"
        type="button"
        @click="switchAuthMode"
      >
        {{ switchModeButtonCaption }}
      </button>
    </div>
  </form>
</template>

<script>
import BaseDialog from "../../components/stateless/BaseDialog.vue";
import BaseSpinner from "../../components/stateless/BaseSpinner.vue";
export default {
  components: { BaseDialog, BaseSpinner },
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async authenticateUser(mode, userData) {
      let urlForLogin =
        ":signInWithPassword?key=AIzaSyA4LmKVf8XbCXh5MYw-tBd8OWHtIZfVpAk";
      let urlforSignup = ":signUp?key=AIzaSyA4LmKVf8XbCXh5MYw-tBd8OWHtIZfVpAk";
      this.isLoading = true;
      try {
        if (mode === "signup") {
          await this.$store.dispatch("authenticate", {
            ...userData,
            url: urlforSignup,
          });
          console.log("singed up");
        } else {
          await this.$store.dispatch("authenticate", {
            ...userData,
            url: urlForLogin,
          });
          console.log("logged in");
        }
        this.$router.replace("/coaches");
      } catch (error) {
        this.error = error.message || "Failed to authenticate...";
      }
      this.isLoading = false;
    },
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      const userData = {
        email: this.email,
        password: this.password,
      };
      this.email = "";
      this.password = "";
      this.authenticateUser(this.mode, userData);
    },
    switchAuthMode() {
      this.mode = this.mode === "login" ? "signup" : "login";
    },
    handleError() {
      this.error = null;
    },
  },
  computed: {
    submitButtonCaption() {
      return this.mode === "login" ? "Login" : "Signup";
    },
    switchModeButtonCaption() {
      return this.mode === "login" ? "Signup instead" : "Login instead";
    },
  },
};
</script>
