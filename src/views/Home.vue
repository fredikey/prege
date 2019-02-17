<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center>
      <v-flex
        sm8
        xs12
        lg4
        md5
        v-for="(exercise, index) in exercises"
        :key="index"
      >
        <v-card>
          <v-card-title primary-title>
            <v-layout row justify-space-between>
              <v-flex column>
                <h3 class="headline mb-0">{{ exercise.title }}</h3>
                <p>{{ exercise.description }}</p>
              </v-flex>
              <v-btn flat color="blue" @click="openExercise(exercise.id)"
                >Открыть</v-btn
              >
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    openExercise(id) {
      this.$router.push(`/test/${id}`);
    }
  },
  computed: {
    exercises() {
      return [
        {
          id: "rus4",
          description: "Постановка ударения",
          title: "Задание 4"
        },
        {
          id: "rus5",
          description: "Употребление паронимов",
          title: "Задание 5"
        },
        {
          id: "rus6",
          description: "Лексические нормы",
          title: "Задание 6"
        },
        {
          id: "rus7",
          description: "Морфологические нормы (образование форм слова)",
          title: "Задание 7"
        },
        {
          id: "rus9",
          description: "Правописание корней",
          title: "Задание 9"
        },
        {
          id: "rus10",
          description: "Правописание приставок",
          title: "Задание 10"
        },
        {
          id: "rus11",
          description: "Правописание суффиксов (кроме -Н-/-НН-)",
          title: "Задание 11"
        },
        {
          id: "rus12",
          description:
            "Правописание личных окончаний глаголов и суффиксов причастий",
          title: "Задание 12"
        },
        {
          id: "rus13",
          description: "Правописание НЕ и НИ",
          title: "Задание 13"
        },
        {
          id: "rus14",
          description: "Слитное, дефисное, раздельное написание слов",
          title: "Задание 14"
        },
        {
          id: "rus15",
          description: "Правописание -Н- и -НН- в суффиксах",
          title: "Задание 15"
        },
        {
          id: "rus16",
          description:
            "Пунктуация в сложносочиненном предложении и в предложении с однородными членами",
          title: "Задание 16"
        },
        {
          id: "rus17",
          description:
            "Знаки препинания в предложениях с обособленными членами",
          title: "Задание 17"
        },
        {
          id: "rus18",
          description:
            "Знаки препинания при словах и конструкциях, не связанных с членами предложения",
          title: "Задание 18"
        },
        {
          id: "rus19",
          description:
            "Знаки препинания в сложных предложениях с разными видами связи",
          title: "Задание 19"
        },
        {
          id: "rus20",
          description:
            "Знаки препинания в сложных предложениях с разными видами связи",
          title: "Задание 20"
        },
        {
          id: "rus21",
          description: "Постановка знаков препинания в различных случаях",
          title: "Задание 21"
        }
      ];
    }
  }
};
</script>
