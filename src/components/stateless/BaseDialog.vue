<template>
  <teleport to="body">
    <div
      v-if="show"
      @click="closeDialog"
      class="fixed top-0 left-0 h-screen w-full bg-dark-backdrop z-10"
    ></div>
    <dialog
      open
      v-if="show"
      class="fixed top-30vh left-1/10 w-4/5 rounded-12px border-none z-50 shadow-card-shadow bg-white m-0 p-0 overflow-hidden md:w-40r left-calc-center"
    >
      <header class="bg-antique-red text-white w-full p-4">
        <slot name="header">
          <h2 class="m-0 text-xl">{{ title }}</h2>
        </slot>
      </header>
      <section class="p-4">
        <slot></slot>
      </section>
      <menu class="p-4 flex m-0 justify-end">
        <slot name="actions">
          <BaseButton @click="closeDialog">Close</BaseButton>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
import BaseButton from "../stateless/BaseButton.vue";
export default {
  components: { BaseButton },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
  emits: ["close"],
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>
