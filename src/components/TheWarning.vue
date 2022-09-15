<template>
  <div class="warning">
    <h3 class="warning__text" v-if="getWarningAction === 'delete'">
      Warning! {{ text.delete }}
    </h3>
    <h3 class="warning__text" v-else>Warning! {{ text.overflow }}</h3>
    <div class="warning__actions">
      <button
        class="warning__btn-cancel action-button"
        @click="() => onCancel()"
      >
        Cancel
      </button>
      <button
        class="warning__btn-confirm action-button"
        @click="() => onConfirm()"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data: () => ({
    text: {
      delete: "Вы действительно хотите удалить все завершенные задачи?",
      overflow:
        "Вы пытаетесь добавить 7ую карточку в выполняемые задачи, вернуть первую выполняемую задачу обратно?",
    },
  }),
  methods: {
    ...mapActions("trello", [
      "deleteAll",
      "addToProgress",
      "setWarningActive",
      "backToTodo",
    ]),
    onCancel() {
      this.setWarningActive(false);
    },
    onConfirm() {
      if (this.getWarningAction === "delete") {
        this.deleteAll();
      } else {
        const progress = this.getProgress;
        this.backToTodo(progress[0], 0);
      }
      this.setWarningActive(false);
    },
  },
  computed: {
    ...mapGetters("trello", ["getWarningAction", "getProgress"]),
  },
};
</script>

<style lang="scss" scoped>
.warning {
  display: flex;
  border: 1px solid rgb(35, 185, 95);
  border-radius: 20px;
  padding: 30px 40px;
  width: 500px;
  background-color: #d8f2da;
  height: 150px;
  flex-direction: column;
  gap: 25px 0;

  position: absolute;
  top: 40%;
  left: 35%;

  &__btn {
    &-confirm {
      &:hover {
        background-color: rgb(55, 193, 55);
        cursor: pointer;
      }
    }
    &-cancel {
      &:hover {
        background-color: red;
        cursor: pointer;
      }
    }
  }

  &__text {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
  }

  &__actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 10px;
  }
}
.action-button {
  padding: 5px;
  transition: all 0.3s ease-in-out;
  border: none;
  border-radius: 5px;
}
</style>
