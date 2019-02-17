<template>
  <v-flex align-self-center>
    <h3 class="headline mb-4">{{ exercise.text }}</h3>
    <p
      :key="index"
      v-for="(option, index) in exercise.options"
      :label="option"
      style="font-size: 16px;font-weight: 400;"
    >
      {{ option }}
    </p>
  </v-flex>
</template>

<script>
export default {
  props: {
    exercise: Object
  }
};
</script>

<style scoped></style>
