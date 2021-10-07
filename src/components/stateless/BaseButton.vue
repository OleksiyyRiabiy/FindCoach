<template>
  <button
    v-if="!link"
    class="mr-2 inline-block no-underline py-3 px-6 bg-antique-red border border-solid border-antique-red text-white cursor-pointer rounded-30px"
    :class="modeClass"
  >
    <slot></slot>
  </button>
  <router-link
    v-else
    :to="to"
    class="mr-2 inline-block no-underline py-3 px-6 bg-antique-red border border-solid border-antique-red text-white cursor-pointer rounded-30px"
    :class="modeClass"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
  computed: {
    modeClass() {
      return {
        "bg-transparent border-white text-white": this.mode === "outline",
      };
    },
  },
};
</script>
