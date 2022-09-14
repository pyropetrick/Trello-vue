<template>
  <div class="item-todo">
    <div class="item-todo__header">
      <h2 class="item-todo__header-title">TODO:</h2>
      <p class="item-todo__header-counter"></p>
    </div>
    <ul class="item-todo__task-list tasks-list">
      <the-task></the-task>
    </ul>
    <button class="item-todo__button-add-todo">Add todo</button>
  </div>
</template>

<script>
import TheTask from "@/components/TheTask.vue";
export default {
  components: {
    TheTask,
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
    justify-content: space-between;
    border: 2px solid black;
    background-color: #f4f4f4;
    border-radius: 10px;
    padding: 10px;

    &-counter {
      padding: 5px;
    }
  }

  &__button-add-todo {
    background-color: rgba(#f4f4f4, 1);
    border-radius: 8px;
    width: 100%;
    font-weight: 500;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: #a0a0a0;
    }
  }
}
</style>
