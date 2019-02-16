<template>
  <v-flex>
    <h3>{{ exercise.text }}</h3>
    <v-checkbox
      v-for="(option, index) in exercise.options"
      v-model="selected"
      :label="option"
      :value="index + 1"
    />
  </v-flex>
</template>

<script>
export default {
  props: {
    exercise: Object
  },
  data() {
    return {
      selected: []
    };
  },
  mounted() {
    this.$root.$on("checkAnswer", () => {
      const result = this.exercise.answer.includes(this.selected.join(""));
      this.$emit(
        "getResultOfCheckAnswer",
        this.exercise.answer.includes(this.selected.join(""))
      );
      if (result) {
        this.selected = [];
      }
    });
  },
  computed: {}
};
</script>

<style scoped></style>
