<template>
  <li class="my-4 border border-solid border-dark-grey p-4 bg-bright-black">
    <div>
      <p class="inline mr-2 text-white">Email:</p>
      <a
        class="text-bright-grey no-underline font-bold hover:text-antique-red"
        :href="emailLink"
      >
        {{ email }}
      </a>
    </div>
    <p class=" inline mr-2 text-white ">Message:</p>
    <p class="mt-2 inline text-bright-grey">{{ message }}</p>
  </li>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>
