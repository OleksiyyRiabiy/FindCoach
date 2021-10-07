<template>
  <TheHeader />
  <router-view />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: { TheHeader },
  computed: {
    didAutoLogout() {
      return this.$store.getters.didAutoLogout;
    },
  },
  watch: {
    didAutoLogout(curVal, oldVal) {
      if (curVal && curVal !== oldVal) {
        this.$router.replace("/auth");
      }
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
};
</script>
