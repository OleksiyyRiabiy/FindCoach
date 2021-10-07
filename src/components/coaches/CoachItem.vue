<template>
  <li
    class="my-8 border border-solid border-bright-grey rounded-xl p-4 relative block"
  >
    <div
      class="absolute w-9.375r h-9.375r rounded-full top-1/2 -my-16.7 right-3"
    >
      <img class="rounded-full w-full h-full" :src="src" alt="avatar" />
    </div>
    <h3 class="text-white text-2xl my-2">{{ fullName }}</h3>
    <h4 class="text-white my-2">${{ rate }}/hour</h4>
    <div class="my-2">
      <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area" />
    </div>
    <div class="my-2">
      <BaseButton mode="outline" link :to="coachContactLink">
        Contact
      </BaseButton>
      <BaseButton link :to="coachDetailsLink">
        View Details
      </BaseButton>
    </div>
  </li>
</template>

<script>
import BaseButton from "../stateless/BaseButton.vue";
import BaseBadge from "../stateless/BaseBadge.vue";
export default {
  components: { BaseButton, BaseBadge },
  props: {
    id: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    areas: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    coachDetailsLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>
