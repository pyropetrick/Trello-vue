import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalActive: false,
    modalAction: null,
    currentEditIdx: null,
    warningActive: false,
    warningAction: null,
    users: [],
    todos: [],
    progress: [],
    complete: [],
  },
  getters: {
    getUsers: (state) => state.users,
    getModalActive: (state) => state.modalActive,
    getModalAction: (state) => state.modalAction,
    getCurrentEditIdx: (state) => state.currentEditIdx,
    getWarningActive: (state) => state.warningActive,
    getWarningAction: (state) => state.warningAction,
    getTodos: (state) => state.todos,
    getProgress: (state) => state.progress,
    getComplete: (state) => state.complete,
  },
  mutations: {
    SET_USERS: (state, users) => {
      state.users = users.map((user) => user.username);
    },
    SET_MODAL_ACTIVE(state, value) {
      state.modalActive = value;
    },
    SET_MODAL_ACTION(state, value) {
      state.modalAction = value;
    },
    SET_CURRENT_EDIT_IDX(state, value) {
      state.currentEditIdx = value;
    },
    SET_WARNING_ACTIVE(state, value) {
      state.warningActive = value;
    },
    SET_WARNING_ACTION(state, value) {
      state.warningAction = value;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, idx) {
      state.todos.splice(idx, 1);
    },
    EDIT_TODO(state, value) {
      state.todos.splice(state.currentEditIdx, 1, value);
    },
    DELETE_COMPLETE(state, idx) {
      state.complete.splice(idx, 1);
    },
    DELETE_ALL(state) {
      state.complete = [];
    },
    ADD_TO_PROGRESS(state, value, idx) {
      state.progress.push(value);
      state.todos.splice(idx, 1);
    },
    BACK_TO_TODO(state, value, idx) {
      state.todos.push(value);
      state.progress.splice(idx, 1);
    },
    ADD_TO_COMPLETE(state, value, idx) {
      state.complete.push(value);
      state.progress.splice(idx, 1);
    },
  },
  actions: {
    getUsersFromApi({ commit }) {
      return Axios("https://jsonplaceholder.typicode.com/users")
        .then((users) => {
          commit("SET_USERS", users.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    setModalActive({ commit }, value) {
      commit("SET_MODAL_ACTIVE", value);
    },
    setModalAction({ commit }, value) {
      commit("SET_MODAL_ACTION", value);
    },
    setCurrentEditIdx({ commit }, value) {
      commit("SET_CURRENT_EDIT_IDX", value);
    },
    setWarningActive({ commit }, value) {
      commit("SET_WARNING_ACTIVE", value);
    },
    setWarningAction({ commit }, value) {
      commit("SET_WARNING_ACTION", value);
    },
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
    },
    deleteTodo({ commit }, idx) {
      commit("DELETE_TODO", idx);
    },
    editTodo({ commit }, value) {
      commit("EDIT_TODO", value);
    },
    deleteComplete({ commit }, idx) {
      commit("DELETE_COMPLETE", idx);
    },
    deleteAll({ commit }) {
      commit("DELETE_ALL");
    },
    addToProgress({ commit }, value, idx) {
      commit("ADD_TO_PROGRESS", value, idx);
    },
    backToTodo({ commit }, value, idx) {
      commit("BACK_TO_TODO", value, idx);
    },
    addToComplete({ commit }, value, idx) {
      commit("ADD_TO_COMPLETE", value, idx);
    },
  },
  modules: {},
});
