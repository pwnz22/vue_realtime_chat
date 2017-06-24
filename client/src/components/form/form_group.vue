<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      inline: Boolean,
      fullWidth: Boolean
    },
    computed: {
      classNames () {
        const classNames = ['form__group']

        if (this.inline) {
          classNames.push('form__group--inline')
        }
        if (this.fullWidth) {
          classNames.push('form__group--full-width')
        }

        return classNames
      }
    }
  }
</script>

<style lang="scss">
  .form__group {
    display: flex;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }

    &--inline {
      margin-bottom: 0;
      margin-left: 16px;

      &:first-child {
        margin-right: 0;
      }
    }

    &--full-width {
      flex: 1;
      align-self: stretch;
    }
  }
</style>
