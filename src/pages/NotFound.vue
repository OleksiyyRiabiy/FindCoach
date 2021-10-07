<template>
  <div>
    <BaseCard>
      <h2 class="text-center text-white text-4xl">Page Not Found</h2>
      <p class="text-center text-white text-xl mt-8">
        This page could not be found - maybe check out all our
        <router-link class="text-antique-red" to="/coaches"
          >coaches.</router-link
        >
      </p>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "../components/stateless/hoc/BaseCard.vue";
export default {
  components: { BaseCard },
};
</script>
