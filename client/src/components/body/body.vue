<template>
  <div class="body">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .body {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
</style>
