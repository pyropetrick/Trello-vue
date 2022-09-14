<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "the-container",
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 1200px;
}
</style>
