<template>
  <header class="bg-indigo-dark h-10v flex justify-center items-center">
    <nav class="flex items-center justify-between w-11/12 ">
      <h1 class="mx-4 font-bold text-2xl text-white">
        <router-link to="/">Find a Coach</router-link>
      </h1>
      <ul class="flex items-center justify-evenly w-2/5">
        <li>
          <router-link
            class="m-0 text-white text-lg py-2 px-6 hover:text-antique-red active:text-antique-red"
            to="/coaches"
            >All Coaches</router-link
          >
        </li>
        <li>
          <router-link
            v-if="isAuthenticated"
            class="m-0 text-white text-lg py-2 px-6 hover:text-antique-red active:text-antique-red"
            to="/requests"
            >Requests</router-link
          >
        </li>
        <li>
          <router-link
            class="m-0 text-antique-red text-lg border-2 border-solid border-antique-red rounded-12px py-2 px-6 hover:text-antique-red active:text-antique-red"
            v-if="!isAuthenticated"
            to="/auth"
            >Login</router-link
          >
        </li>
        <li v-if="isAuthenticated">
          <BaseButton @click="logout">Logout</BaseButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import BaseButton from "../stateless/BaseButton.vue";
export default {
  components: { BaseButton },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/coaches");
    },
  },
};
</script>
