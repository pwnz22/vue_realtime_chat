<template>
  <div :class="classNames">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: true
      },
      full: Boolean
    },
    computed: {
      classNames () {
        const classNames = ['section']

        if (this.color) {
          classNames.push(`section--${this.color}`)
        }

        if (this.full) {
          classNames.push(`section--full`)
        }

        return classNames
      }
    }
  }
</script>

<style lang="scss">
  .section {
    padding: 30px;
    display: flex;
    flex-direction: column;

    &--black {
      background-color: #000;
    }

    &--full {
      align-items: baseline;
      flex: 1;
      align-self: stretch;
      overflow: auto;
    }
  }
</style>
