export default {
  state: {
    exercises: []
  },
  getters: {
    exercises(state) {
      return state.exercises;
    }
  },
  mutations: {
    setExercises(state, payload) {
      state.exercises = payload;
    }
  },
  actions: {
    async getExercises ({ commit }, { id }) {
      commit("clearError");
      commit("setLoading", true);
      try {
      } catch (err) {
        commit("setLoading", false);
        commit("setError", err.message);
        throw err;
      }
    }
  }
};
