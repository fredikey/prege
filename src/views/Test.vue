<template>
  <v-layout v-if="!localLoading" row justify-center>
    <v-flex sm8 xs12 lg4 md5>
      <Exercise
        :exercise="currentExercise"
        @getResultOfCheckAnswer="getResultOfCheckAnswer"
      />
      <v-layout row wrap>
        <v-btn @click="checkAnswer">Готово</v-btn>
				<v-dialog
					v-model="answerVisible"
					width="500"
				>
					<v-btn
						slot="activator"
						color="red lighten-2"
						dark
					>
						Показать ответ
					</v-btn>
		
					<v-card>
						<v-card-title
							class="headline grey lighten-2"
							primary-title
						>
							Ответ
						</v-card-title>
			
						<v-card-text>
							<p v-for="(explanation, index) in currentExercise.explanation" :key="index">{{ explanation }}</p>
						</v-card-text>
			
						<v-divider></v-divider>
			
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn
								color="primary"
								flat
								@click="answerVisible = false"
							>
								Oк
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>
        <v-btn flat @click="skipExercise">Пропустить</v-btn>
      </v-layout>
    </v-flex>
    <v-snackbar v-model="snackbarVisible" :color="snackbarMode" :timeout="2000">
      {{ snackbarMode === "error" ? "Неправильно!" : "Правильно!" }}
      <v-btn dark flat @click="snackbarVisible = false">
        Закрыть
      </v-btn>
    </v-snackbar>
  </v-layout>
  <v-progress-circular v-else indeterminate color="primary" />
</template>

<script>
import Exercise from "../components/Exercise";

export default {
  data() {
    return {
      exercises: [],
      currentIndex: 0,
      localLoading: false,
      snackbarVisible: false,
      snackbarMode: "error",
      answerVisible: false
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
    skipExercise() {
      this.$root.$emit("skipExercise");
      this.currentIndex++;
    },
    showAnswer() {
    
		},
    getResultOfCheckAnswer(result) {
      if (result === true) {
        this.openSuccessSnackbar();
        this.currentIndex++;
      } else {
        this.openErrorSnackbar();
      }
    },
    openErrorSnackbar() {
      this.snackbarMode = "error";
      this.snackbarVisible = true;
    },
    openSuccessSnackbar() {
      this.snackbarMode = "success";
      this.snackbarVisible = true;
    }
  },
  components: {
    Exercise
  }
};
</script>

<style scoped></style>
