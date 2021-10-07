<template>
  <div>
    <BaseCard>
      <h2 class="text-center text-white text-2xl">Register as a coach!</h2>
      <CoachForm />
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "../../components/stateless/hoc/BaseCard.vue";
import CoachForm from "../../components/coaches/CoachForm.vue";
export default {
  components: { CoachForm, BaseCard },
};
</script>
