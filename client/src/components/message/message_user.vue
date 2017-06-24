<template>
  <div class="message__user">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .message__user {
    display: flex;
    width: 100%;
    padding: 16px 16px 0;
    margin-bottom: 0;
    color: #ff9800;
  }
</style>
