<template>
  <div class="warning">
    <h3 class="warning__text">Warning!</h3>
    <div class="warning__actions">
      <button class="warning__btn-cancel action-button">Cancel</button>
      <button class="warning__btn-confirm action-button">Confirm</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.warning {
  display: none;
  border: 1px solid rgb(35, 185, 95);
  border-radius: 20px;
  padding: 30px 40px;
  width: 500px;
  background-color: #d8f2da;
  width: 300px;
  height: 150px;
  flex-direction: column;
  gap: 25px 0;

  position: absolute;
  top: 40%;
  left: 50%;

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
</style>
