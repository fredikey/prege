<template>
  <v-flex align-self-center>
    <h3 class="headline mb-0">{{ exercise.text }}</h3>
    <v-checkbox
			:key="index"
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
        this.clearControls();
      }
    });
    this.$root.$on("skipExercise", () => {
      this.clearControls();
    });
  },
  methods: {
    clearControls() {
      this.selected = [];
    }
  }
};
</script>

<style scoped></style>
