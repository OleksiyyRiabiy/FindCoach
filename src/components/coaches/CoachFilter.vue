<template>
  <div>
    <h2 class="text-white text-lg font-medium mb-2">Find your Coach</h2>
    <span>
      <input
        class="align-middle"
        type="checkbox"
        id="frontend"
        checked
        @change="setFilter"
      />
      <label class="text-white mr-4 align-middle ml-1" for="frontend"
        >Frontend</label
      >
      <input
        class="align-middle"
        type="checkbox"
        id="backend"
        checked
        @change="setFilter"
      />
      <label class="text-white mr-4 align-middle ml-1" for="backend"
        >Backend</label
      >
      <input
        class="align-middle"
        type="checkbox"
        id="career"
        checked
        @change="setFilter"
      />
      <label class="text-white mr-4 align-middle ml-1" for="career"
        >Career</label
      >
    </span>
  </div>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>
