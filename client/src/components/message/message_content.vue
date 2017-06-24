<template>
  <div class="message__content">
    <slot></slot>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .message__content {
    display: flex;
    width: 100%;
    padding: 16px;
  }
</style>
