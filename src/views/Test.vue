<template>
  <v-container v-if="!localLoading" fluid>
    <v-toolbar app>
      <v-toolbar-side-icon @click="$router.go(-1)"
        ><v-icon>keyboard_backspace</v-icon></v-toolbar-side-icon
      >
      <v-toolbar-title
        >Задание {{ $route.params.id.concat("").slice(3) }}</v-toolbar-title
      >
    </v-toolbar>
    <v-layout row justify-center>
      <v-flex sm8 xs12 lg4 md5>
        <Exercise :exercise="currentExercise" />
        <v-layout>
          <v-text-field
            label="Ответ:"
            :error="snackbarMode === 'error'"
            v-model="answerModel"
          ></v-text-field>
        </v-layout>
        <v-layout row wrap>
          <v-btn @click="checkAnswer">Готово</v-btn>
          <v-dialog v-model="answerVisible" width="500">
            <v-btn slot="activator" color="red lighten-2" dark>
              Показать ответ
            </v-btn>

            <v-card>
              <v-card-title class="headline grey lighten-2" primary-title>
                Ответ
              </v-card-title>

              <v-card-text>
                <p
                  v-for="(explanation, index) in currentExercise.explanation"
                  :key="index"
                >
                  {{ explanation }}
                </p>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="answerVisible = false">
                  Oк
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn flat @click="skipExercise">Пропустить</v-btn>
        </v-layout>
      </v-flex>
      <v-snackbar
        v-model="snackbarVisible"
        :color="snackbarMode"
        :timeout="2000"
      >
        {{ snackbarMode === "error" ? "Неправильно!" : "Правильно!" }}
        <v-btn dark flat @click="snackbarVisible = false">
          Закрыть
        </v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
  <div v-else class="text-xs-center pt-5">
    <v-progress-circular
      :size="50"
      :width="4"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </div>
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
      snackbarMode: "success",
      answerVisible: false,
      answerModel: ""
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
      const isRightAnswer = this.currentExercise.answer.includes(
        this.answerModel.trim().toLowerCase()
      );
      if (isRightAnswer === true) {
        this.openSuccessSnackbar();
        this.currentIndex++;
        this.answerModel = "";
      } else {
        this.openErrorSnackbar();
      }
    },
    skipExercise() {
      this.$root.$emit("skipExercise");
      this.currentIndex++;
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
