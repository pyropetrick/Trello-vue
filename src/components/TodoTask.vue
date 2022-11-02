<template>
  <b-card :style="cardBackgroundStyle" no-body>
    <template #header>
      <b-card-title class="text-center m-0" @click="openTask">{{title}}</b-card-title>
    </template>
    <template #footer>
      <b-button-group size="sm" class="d-flex align-content-center">
        <b-button
          variant="info"
          v-if="nameCard === 'ToDo'"
          @click="() => onEdit()"
        >
          Edit
        </b-button>
        <b-button
          v-if="nameCard === 'Progress'"
          @click="() => onBack()"
        >
          Back
        </b-button>
        <b-button
          v-if="nameCard === 'Progress'"
          @click="() => completeTask(index)"
        >
          Complete
        </b-button>
        <b-button
          variant="danger"
          v-if="nameCard === 'ToDo'"
          @click="() => deleteTodo(index)"
        >
          Delete
        </b-button>
        <b-button
          class="tasks-list__item-actions-delete action-btn"
          v-if="nameCard === 'Complete'"
          @click="() => deleteComplete(index)"
        >
          Delete
        </b-button>
        <b-button
          variant="primary"
          v-if="nameCard === 'ToDo'"
          @click="() => jumpToProgress()"
        >
          Begin Task
        </b-button>
      </b-button-group>
    </template>
    <ModalTask
      ref="modalTask"
      :title="title"
      :description="description"
      :id="id"
      :user="user"
      :color="color"
    />
  </b-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ModalTask from "@/components/ModalTask.vue";
export default {
  components: {
    ModalTask
  },

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
    color: {
      type: String,
    },
  },
  methods: {
    ...mapActions([
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
    openTask() {
      this.$refs.modalTask.openModal()
    }
  },
  computed: {
    ...mapGetters(["getTodos", "getProgress"]),
    cardBackgroundStyle() {
      return {'background-color': this.color}
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
