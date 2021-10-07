<template>
  <BaseDialog :show="!!error" title="An error occured" @close="handleError">
    <p>{{ error }}</p>
  </BaseDialog>
  <BaseCard class="flex justify-between">
    <CoachFilter @change-filter="setFilters" />
    <CoachSearcher @find-coach="findCoachByName" />
  </BaseCard>
  <div class="my-4 mx-auto w-full flex flex-col">
    <BaseCard v-if="!searchingMode">
      <div class="flex justify-between">
        <BaseButton mode="outline" @click="loadCoaches(true)">
          Refresh
        </BaseButton>
        <BaseButton v-if="showRegistrationButton" link to="/register">
          Register as Coach
        </BaseButton>
      </div>
      <BaseSpinner v-if="isLoading" />
      <ul v-else-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :src="coach.avatarImage"
          :id="coach.id"
          :areas="coach.areas"
          :description="coach.description"
        />
      </ul>
      <h3 class="text-white text-2xl text-center mt-4 mb-2" v-else>
        No Coaches found!
      </h3>
    </BaseCard>
    <BaseCard v-else class="relative">
      <div
        class="absolute top-4 right-4 text-white cursor-pointer hover:text-antique-red"
        @click="stopSearching"
      >
        <CloseBold class="h-8 w-8" />
      </div>
      <h1 class="text-white text-center text-2xl">Searched Coach</h1>
      <ul v-if="searchedCoaches.length !== 0">
        <CoachItem
          v-for="searchedCoach in searchedCoaches"
          :key="searchedCoach.id"
          :firstName="searchedCoach.firstName"
          :lastName="searchedCoach.lastName"
          :rate="searchedCoach.hourlyRate"
          :src="searchedCoach.avatarImage"
          :id="searchedCoach.id"
          :areas="searchedCoach.areas"
          :description="searchedCoach.description"
        />
      </ul>
      <p class="text-white text-center text-xl" v-else>
        No matches found. Please Try again.
      </p>
    </BaseCard>
  </div>
</template>

<script>
import { CloseBold } from "@element-plus/icons";
import BaseDialog from "../../components/stateless/BaseDialog.vue";
import BaseSpinner from "../../components/stateless/BaseSpinner.vue";
import BaseCard from "../../components/stateless/hoc/BaseCard.vue";
import BaseButton from "../../components/stateless/BaseButton.vue";
import CoachItem from "../../components/coaches/CoachItem.vue";
import CoachFilter from "../../components/coaches/CoachFilter.vue";
import CoachSearcher from "../../components/coaches/CoachSearcher.vue";

export default {
  components: {
    BaseDialog,
    BaseSpinner,
    BaseCard,
    BaseButton,
    CoachItem,
    CoachFilter,
    CoachSearcher,
    CloseBold,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      searchingMode: false,
      searchedCoaches: [],
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    showRegistrationButton() {
      return !this.isCoach && this.isAuthenticated;
    },
  },
  methods: {
    handleError() {
      this.error = null;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    findCoachByName(coachName) {
      this.searchingMode = true;
      this.searchedCoaches = this.filteredCoaches.filter((coach) =>
        (coach.firstName + coach.lastName).toLowerCase().includes(coachName)
      );
    },
    stopSearching() {
      this.searchingMode = false;
      this.searchedCoaches = [];
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/fetchCoaches", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Smth went wrong";
      }

      this.isLoading = false;
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>
