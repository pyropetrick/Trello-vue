export default {
  namespaced: true,
  state: {
    modalActive: false,
    todos: [],
    progress: [],
    complete: [],
  },

  getters: {
    getModalActive: (state) => state.modalActive,
    getTodos: (state) => state.todos,
    getProgress: (state) => state.progress,
    getComplete: (state) => state.complete,
  },

  mutations: {
    SET_MODAL_ACTIVE(state, value) {
      state.modalActive = value;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, idx) {
      state.todos.splice(idx, 1);
    },
    ADD_TO_PROGRESS(state, value, idx) {
      state.progress.push(value);
      state.todos.splice(idx, 1);
    },
    ADD_TO_COMPLETE(state, value, idx) {
      state.complete.push(value);
      state.progress.splice(idx, 1);
    },
  },

  actions: {
    setModalActive({ commit }, value) {
      commit("SET_MODAL_ACTIVE", value);
    },
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    deleteTodo({ commit }, idx) {
      commit("DELETE_TODO", idx);
    },
    addToProgress({ commit }, value, idx) {
      commit("ADD_TO_PROGRESS", value, idx);
    },
    addToComplete({ commit }, value, idx) {
      commit("ADD_TO_COMPLETE", value, idx);
    },
  },
};
