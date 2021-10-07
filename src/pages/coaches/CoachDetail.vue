<template>
  <div>
    <BaseCard class="flex">
      <div class="w-1/3">
        <div class="w-9.375r h-9.375rem">
          <img :src="avatarImage" alt="avatar_image" />
        </div>
        <h2 class="text-white text-xl font-medium my-2">{{ fullName }}</h2>
        <h3 class="text-white text-lg">${{ rate }}/hour</h3>
      </div>
      <div class="w-2/3 flex flex-col">
        <div class="mb-2">
          <BaseBadge
            v-for="area in areas"
            :key="area"
            :type="area"
            :title="area"
          />
        </div>
        <p class="text-white mt-2 mx-2">{{ description }}</p>
        <div v-if="showContactButton" class="self-end mr-8 mt-4">
          <BaseButton link :to="contactLink">Contact</BaseButton>
        </div>
      </div>
    </BaseCard>
    <div class="w-3/5 mx-auto"><router-view></router-view></div>
  </div>
</template>

<script>
import BaseBadge from "../../components/stateless/BaseBadge.vue";
import BaseButton from "../../components/stateless/BaseButton.vue";
import BaseCard from "../../components/stateless/hoc/BaseCard.vue";
export default {
  components: { BaseBadge, BaseButton, BaseCard },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    avatarImage() {
      return this.selectedCoach.avatarImage;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
    currentPath() {
      return this.$route.path;
    },
    showContactButton() {
      return this.currentPath !== `/coaches/${this.id}/contact`;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>
