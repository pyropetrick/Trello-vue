<template>
  <li class="tasks-list__item">
    <div class="tasks-list__item-titles">
      <p class="tasks-list__item-title">Title</p>
      <p class="tasks-list__item-desc">Description</p>
      <p class="tasks-list__item-user">User</p>
    </div>
    <div class="tasks-list__item-actions">
      <div class="tasks-list__item-actions-editing">
        <button class="tasks-list__item-actions-edit">Edit</button>
        <button class="tasks-list__item-actions-delete">Delete</button>
      </div>
      <button class="tasks-list__item-actions-jump">></button>
      <p class="tasks-list__item-actions-time">Time</p>
    </div>
  </li>
</template>

<script>
export default {
  name: "the-task",
};
</script>

<style lang="scss" scoped>
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
      &-editing {
        display: flex;
        gap: 5px;
      }
      &-edit {
        border-radius: 5px;
        border: none;
        padding: 5px;
        font-size: 14px;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          background-color: #fef160;
        }
      }
      &-delete {
        border-radius: 5px;
        border: none;
        padding: 5px;
        font-size: 14px;
        transition: all 0.3s ease-in-out;
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
</style>
