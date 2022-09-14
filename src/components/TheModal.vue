<template>
  <div class="modal__wrapper">
    <form>
      <input class="modal__input-title" type="title" placeholder="Title" />
      <input
        class="modal__input-description"
        type="text"
        placeholder="Description"
      />
    </form>
    <div class="modal__item">
      <select name="list">
        <option value="user">Select user</option>
      </select>
      <div class="modal__buttons">
        <button class="modal__btn-cancel action-button">Cancel</button>
        <button class="modal__btn-confirm action-button">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.modal {
  &__wrapper {
    border: 1px solid rgb(35, 185, 95);
    border-radius: 20px;
    display: none;
    flex-direction: column;
    padding: 20px 40px;
    width: 500px;
    background-color: rgba(#d8f2da, 0.5);

    position: absolute;
    top: 30%;
    left: 27%;
    &.active {
      display: flex;
    }
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
