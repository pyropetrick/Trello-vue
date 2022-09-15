<template>
  <div class="modal__wrapper">
    <form>
      <input
        class="modal__input-title"
        type="title"
        placeholder="Title"
        v-model="title"
      />
      <input
        class="modal__input-description"
        type="text"
        placeholder="Description"
        v-model="desc"
      />
    </form>
    <div class="modal__item">
      <select name="list">
        <option value="user">Select user</option>
      </select>
      <div class="modal__buttons">
        <button class="modal__btn-cancel action-button">Cancel</button>
        <button
          class="modal__btn-confirm action-button"
          @click="() => onConfirm()"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    title: "",
    desc: "",
  }),
  methods: {
    ...mapActions("trello", ["addTodo", "setModalActive", "editTodo"]),
    onConfirm() {
      const index = this.getCurrentEditIdx;
      const time = new Date();
      const options = {
        hour: "numeric",
        minute: "numeric",
      };
      const task = {
        title: this.title,
        description: this.desc,
        id: Date.now(),
        date: time.toLocaleString("ru", options),
      };
      if (this.getModalAction === "edit") {
        console.log(index);
        console.log(task);
        this.editTodo(task, index);
      } else {
        this.addTodo(task);
      }
      this.title = "";
      this.desc = "";
      this.setModalActive(false);
    },
  },
  computed: {
    ...mapGetters("trello", ["getModalAction", "getCurrentEditIdx"]),
  },
};
</script>

<style lang="scss" scoped>
.modal {
  &__wrapper {
    border: 1px solid rgb(35, 185, 95);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    width: 500px;
    background-color: rgba(#d8f2da, 0.5);

    position: absolute;
    top: 30%;
    left: 27%;
  }

  &__item {
    display: flex;
    margin: 0 5px;
  }

  &__buttons {
    display: flex;
    margin: 0 50px;
    gap: 0 10px;
  }
}

select {
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  padding: 0 40px;
  margin: 0 5px;
}

.modal__input-title {
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  width: 200px;
  font-size: 16px;
  text-align: center;
  margin: 15px 5px;
  padding: 5px;
}

.modal__input-description {
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  width: 400px;
  height: 100px;
  font-size: 16px;
  text-align: center;
  margin: 0 5px 30px;
  padding: 40px;
}
</style>
