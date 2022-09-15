<template>
  <li class="tasks-list__item">
    <div class="tasks-list__item-titles">
      <p class="tasks-list__item-title">{{ title }}</p>
      <p class="tasks-list__item-desc">{{ description }}</p>
      <p class="tasks-list__item-user">{{ user }}</p>
    </div>
    <div class="tasks-list__item-actions">
      <div class="tasks-list__item-actions-editing">
        <button
          class="tasks-list__item-actions-edit action-btn"
          v-if="nameCard === 'ToDo'"
          @click="() => onEdit()"
        >
          Edit
        </button>
        <button
          class="tasks-list__item-actions-back action-btn"
          v-if="nameCard === 'Progress'"
          @click="() => onBack()"
        >
          Back
        </button>
        <button
          class="tasks-list__item-actions-complete action-btn"
          v-if="nameCard === 'Progress'"
          @click="() => completeTask(index)"
        >
          Complete
        </button>
        <button
          class="tasks-list__item-actions-delete action-btn"
          v-if="nameCard === 'ToDo'"
          @click="() => deleteTodo(index)"
        >
          Delete
        </button>
        <button
          class="tasks-list__item-actions-delete action-btn"
          v-if="nameCard === 'Complete'"
          @click="() => deleteComplete(index)"
        >
          Delete
        </button>
      </div>
      <button
        class="tasks-list__item-actions-jump"
        v-if="nameCard === 'ToDo'"
        @click="() => jumpToProgress()"
      >
        >
      </button>
      <p class="tasks-list__item-actions-time">{{ time }}</p>
    </div>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "the-task",

  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    user: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      required: false,
    },
    nameCard: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
    },
  },
  methods: {
    ...mapActions("trello", [
      "setModalActive",
      "deleteTodo",
      "addToProgress",
      "addToComplete",
      "backToTodo",
      "deleteComplete",
      "setWarningActive",
      "setModalAction",
      "setCurrentEditIdx",
    ]),
    jumpToProgress() {
      const todos = this.getTodos;
      const progress = this.getProgress;
      if (progress.length === 6) {
        this.setWarningActive(true);
      } else {
        this.addToProgress(todos[this.index], this.index);
      }
    },
    onBack() {
      const progress = this.getProgress;
      this.backToTodo(progress[this.index], this.index);
    },
    completeTask(index) {
      const progress = this.getProgress;
      this.addToComplete(progress[index], index);
    },
    onEdit() {
      this.setModalActive(true);
      this.setCurrentEditIdx(this.index);
      this.setModalAction("edit");
    },
  },
  computed: {
    ...mapGetters("trello", ["getTodos", "getProgress"]),
  },
};
</script>

<style lang="scss" scoped>
.tasks-list {
  &__item {
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
    border-radius: 5px;
    padding: 5px;

    &-titles {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    &-actions {
      display: flex;
      flex-direction: column;
      gap: 15px;

      &-back {
        &:hover {
          cursor: pointer;
          background-color: red;
        }
      }
      &-complete {
        &:hover {
          cursor: pointer;
          background-color: #00aecc;
        }
      }
      &-editing {
        display: flex;
        gap: 5px;
      }
      &-edit {
        &:hover {
          cursor: pointer;
          background-color: #fef160;
        }
      }
      &-delete {
        &:hover {
          cursor: pointer;
          background-color: red;
        }
      }
      &-jump {
        padding: 5px;
        border-radius: 5px;
        border: none;
        align-self: flex-end;

        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          background-color: #a0a0a0;
        }
      }
      &-time {
        align-self: flex-end;
      }
    }
  }
}
.action-btn {
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
}
</style>
