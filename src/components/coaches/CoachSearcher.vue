<template>
  <div class="bg-transparent relative p-4 rounded-50px flex max-h-88px">
    <div
      class="w-50px h-50px rounded-full bg-indigo-bright flex justify-center items-center text-white mr-4 cursor-pointer"
      @click="findCoach"
    >
      <div>
        <Search class="w-6 h-6" />
      </div>
    </div>
    <input
      type="text"
      class="outline-none border-0 bg-indigo-bright text-white px-20px py-15px h-50px w-300px rounded-50px placeholder-white::placeholder"
      :class="{ invalid: !inputIsValid }"
      :placeholder="placeholder"
      v-model="enteredCoachName"
    />
  </div>
</template>

<script>
import { Search } from "@element-plus/icons";
export default {
  components: { Search },
  data() {
    return {
      enteredCoachName: "",
      inputIsValid: true,
    };
  },
  methods: {
    findCoach() {
      this.inputIsValid = true;
      if (this.enteredCoachName.length < 3) {
        this.inputIsValid = false;
        this.enteredCoachName = "";
        return;
      }
      this.$emit("find-coach", this.enteredCoachName.toLowerCase());
      this.enteredCoachName = "";
    },
  },
  computed: {
    placeholder() {
      return this.inputIsValid
        ? "Type to find your coach"
        : " Type at least 3 characters";
    },
  },
};
</script>

<style scoped>
::-webkit-input-placeholder {
  color: #fff;
}
</style>
