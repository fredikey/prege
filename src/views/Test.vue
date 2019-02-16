<template>
  <v-flex v-if="!localLoading">
    <Exercise
      :exercise="currentExercise"
      @getResultOfCheckAnswer="getResultOfCheckAnswer"
    />
    <v-btn @click="checkAnswer">Готово</v-btn>
  </v-flex>
	<v-progress-circular
		v-else
		indeterminate
		color="primary"
	></v-progress-circular></template>

<script>
import Exercise from "../components/Exercise";

export default {
  data() {
    return {
      exercises: [],
      currentIndex: 0,
			localLoading: false
		};
  },
  async created() {
    this.localLoading = true;
    const data = await import(`../json/${this.$route.params.id}`);
    this.localLoading = false;
    this.exercises = data.default;
  },
  computed: {
    currentExercise() {
      return this.exercises[this.currentIndex];
    }
  },
  methods: {
    checkAnswer() {
      this.$root.$emit("checkAnswer", { currentIndex: this.currentIndex });
    },
    getResultOfCheckAnswer(result) {
      if (result) {
        this.currentIndex++;
      }
    }
  },
  components: {
    Exercise
  }
};
</script>

<style scoped></style>
