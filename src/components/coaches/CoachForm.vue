<template>
  <form @submit.prevent="submitForm">
    <div class="my-2">
      <label
        :class="{
          'text-white': firstName.isValid,
          'text-dark-red': !firstName.isValid,
        }"
        class="block mb-2 font-medium"
        for="firstname"
        >Firstname</label
      >
      <input
        @blur="validateInputs"
        class="block w-full border border-solid border-bright-grey outline-none"
        type="text"
        id="firstname"
        v-model.trim="firstName.value"
      />
    </div>
    <div class="my-2">
      <label
        :class="{
          'text-white': lastName.isValid,
          'text-dark-red': !lastName.isValid,
        }"
        class="block mb-2 font-medium"
        for="lasttname"
        >Lastname</label
      >
      <input
        @blur="validateInputs"
        class="block w-full border border-solid border-bright-grey outline-none"
        type="text"
        id="lastname"
        v-model.trim="lastName.value"
      />
    </div>
    <div class="my-2">
      <label
        :class="{
          'text-white': description.isValid,
          'text-dark-red': !description.isValid,
        }"
        class="block mb-2 font-mediume"
        for="description"
        >Description</label
      >
      <textarea
        @blur="validateInputs"
        class="block w-full border border-solid border-bright-grey outline-none"
        id="description"
        rows="5"
        v-model.trim="description.value"
      ></textarea>
    </div>
    <div class="my-2">
      <label
        class="block mb-2 font-medium"
        :class="{ 'text-white': rate.isValid, 'text-dark-red': !rate.isValid }"
        for="rate"
        >Rate</label
      >
      <input
        @blur="validateInputs"
        class="block w-full border border-solid border-bright-grey outline-none"
        type="number"
        id="rate"
        v-model.number="rate.value"
      />
    </div>
    <div class="my-2">
      <label
        :class="{
          'text-white': avatarImage.isValid,
          'text-dark-red': !avatarImage.isValid,
        }"
        class="block mb-2 font-medium"
        for="avatarimage"
        >Image link</label
      >
      <input
        @blur="validateInputs"
        class="block w-full border border-solid border-bright-grey outline-none"
        type="text"
        id="avatarimage"
        v-model="avatarImage.value"
      />
    </div>
    <div
      class="my-2"
      :class="{ 'text-white': areas.isValid, 'text-dark-red': !areas.isValid }"
    >
      <h3 class="my-2 text-base">Areas of experties</h3>
      <div>
        <input
          @blur="validateInputs"
          class="inline w-auto border-none outline-none"
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.value"
        />
        <label class="block mb-2 font-normal inline ml-2" for="frontent"
          >Frontend Development</label
        >
      </div>
      <div>
        <input
          @blur="validateInputs"
          class="inline w-auto border-none outline-none"
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.value"
        />
        <label class="block mb-2 font-normal inline ml-2 " for="backend"
          >Backend Development</label
        >
      </div>
      <div>
        <input
          @blur="validateInputs"
          class="inline w-auto border-none outline-none"
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.value"
        />
        <label class="block mb-2 font-normal inline ml-2" for="career"
          >Career Advisory</label
        >
      </div>
    </div>
    <p class="text-xl text-dark-red text-center" v-if="!formIsValid">
      Form is invalid!
    </p>
    <BaseButton>Register</BaseButton>
  </form>
</template>

<script>
import BaseButton from "../stateless/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      firstName: {
        value: "",
        isValid: true,
      },
      lastName: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
      avatarImage: {
        value: "",
        isValid: true,
      },
      rate: {
        value: null,
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    validateInputs() {
      this.formIsValid = true;
      this.firstName.isValid = true;
      this.lastName.isValid = true;
      this.description.isValid = true;
      this.rate.isValid = true;
      this.avatarImage.isValid = true;
      this.areas.isValid = true;
    },
    validateForm() {
      this.validateInputs();
      if (this.firstName.value === "") {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === "") {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.value === "") {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (this.avatarImage.value === "") {
        this.avatarImage.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
      if (!this.rate.value || this.rate.value < 0) {
        this.rate.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        description: this.description.value,
        avatarImage: this.avatarImage.value,
        hourlyRate: this.rate.value,
        areas: this.areas.value,
      };
      this.$store.dispatch("coaches/addCoach", formData);
      this.$router.push("/coaches");
    },
  },
};
</script>
