<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center>
      <v-flex sm8 xs12 lg4 md5>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">9 задание</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="blue" @click="openExercise('rus9')"
              >Открыть</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm8 xs12 lg4 md5>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">10 задание</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="blue" @click="openExercise('rus10')"
              >Открыть</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm8 xs12 lg4 md5>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">11 задание</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="blue" @click="openExercise('rus11')"
              >Открыть</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm8 xs12 lg4 md5>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
            aspect-ratio="2.75"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">12 задание</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat color="blue" @click="openExercise('rus12')"
              >Открыть</v-btn
            >
          </v-card-actions>
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
  }
};
</script>
