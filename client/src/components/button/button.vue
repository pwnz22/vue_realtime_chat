<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      large: Boolean,
      disabled: Boolean
    },
    computed: {
      classNames () {
        const classNames = ['button']

        if (this.large) {
          classNames.push('button--large')
        }

        if (this.disabled) {
          classNames.push('button--disabled')
        }

        return classNames
      }
    }
  }
</script>

<style lang="scss">
  .button {
    background-color: #fff;
    border: none;
    color: #000;
    cursor: pointer;
    font-size: 16px;
    outline: none;
    padding: 8px 10px;

    &--large {
      font-size: 20px;
      padding: 16px 32px;
    }

    &--disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }
</style>
