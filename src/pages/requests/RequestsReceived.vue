<template>
  <base-dialog :show="!!error" title="An error occured" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <div class="mt-8">
    <BaseCard>
      <header class="text-center">
        <h2 class="text-white text-center text-xl">Your Requests</h2>
      </header>
      <BaseSpinner v-if="isLoading" />
      <ul class="mx-auto my-8 p-0 max-w-lg list-none" v-else-if="hasRequests">
        <RequestItem
          v-for="request in receivedRequests"
          :key="request.id"
          :id="request.id"
          :email="request.userEmail"
          :message="request.message"
        />
      </ul>
      <h3 class="text-center text-white text-xl" v-else>
        You have no requests yet!
      </h3>
    </BaseCard>
  </div>
</template>

<script>
import RequestItem from "../../components/requests/RequestItem.vue";
import BaseDialog from "../../components/stateless/BaseDialog.vue";
import BaseSpinner from "../../components/stateless/BaseSpinner.vue";
import BaseCard from "../../components/stateless/hoc/BaseCard.vue";
export default {
  components: { RequestItem, BaseDialog, BaseSpinner, BaseCard },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return !this.error && this.$store.getters["requests/hasRequests"];
    },
  },
  methods: {
    async fetchRequests() {
      this.isLoading = true;

      try {
        await this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        this.error = error.message || "Error occured!!!";
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    created() {
      this.fetchRequests();
    },
  },
};
</script>
