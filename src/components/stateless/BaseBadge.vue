<template>
  <span
    class="bg-bright-grey rounded-30px text-black py-2 px-6 inline-block mr-4"
  >
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>
