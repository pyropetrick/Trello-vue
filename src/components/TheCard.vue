<template>
  <div class="item-todo">
    <div class="item-todo__header">
      <h2 class="item-todo__header-title">{{ title }}: {{ counter }}</h2>
      <p class="item-todo__header-counter"></p>
    </div>
    <ul class="item-todo__task-list tasks-list" v-if="id === 'ToDo'">
      <the-task
        v-for="(todo, idx) in getTodos"
        :key="todo.id"
        :name-card="id"
        :title="todo.title"
        :description="todo.description"
        :id="todo.id"
        :time="todo.date"
        :index="idx"
      ></the-task>
    </ul>
    <ul class="item-todo__task-list tasks-list" v-else-if="id === 'Progress'">
      <the-task
        v-for="task in getProgress"
        :key="task.id"
        :name-card="id"
        :title="task.title"
        :description="task.description"
        :id="task.id"
        :time="task.date"
      ></the-task>
    </ul>
    <ul class="item-todo__task-list tasks-list" v-else-if="id === 'Complete'">
      <the-task
        v-for="task in getComplete"
        :key="task.id"
        :name-card="id"
        :title="task.title"
        :description="task.description"
        :id="task.id"
        :time="task.date"
      ></the-task>
    </ul>
    <button
      class="item-todo__button-add-todo action-button"
      v-if="id === 'ToDo'"
      @click="() => setModalActive(true)"
    >
      Add todo
    </button>
    <button
      class="item-todo__button-delete-all action-button"
      v-else-if="id === 'Complete'"
    >
      Delete All
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TheTask from "@/components/TheTask.vue";
export default {
  components: {
    TheTask,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    counter: {
      type: Number,
      default: 0,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data: () => ({}),
  methods: {
    ...mapActions("trello", ["setModalActive"]),
  },
  computed: {
    ...mapGetters("trello", ["getTodos", "getProgress", "getComplete"]),
  },
};
</script>

<style lang="scss" scoped>
.item-todo {
  border: 2px solid black;
  border-radius: 10px;
  background-color: #ececec;
  width: 300px;
  height: 500px;
  padding: 15px 15px 5px;
  display: flex;
  flex-direction: column;
  gap: 15px 0;

  &__header {
    display: flex;
    justify-content: center;
    border: 2px solid black;
    background-color: #f4f4f4;
    border-radius: 10px;
    padding: 10px;

    &-counter {
      padding: 5px;
    }
  }

  &__button-add-todo {
    &:hover {
      cursor: pointer;
      background-color: rgb(55, 193, 55);
    }
  }
  &__button-delete-all {
    &:hover {
      cursor: pointer;
      background-color: red;
    }
  }
}

.action-button {
  background-color: rgba(#f4f4f4, 1);
  border-radius: 8px;
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
}
.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  overflow-y: auto;
  padding: 0 5px;

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: black;
  }
}
</style>
