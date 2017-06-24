<template>
  <input type="text" :class="classNames" :value="value" @input="updateInput($event.target.value)">
</template>

<script>
  export default {
    props: {
      large: Boolean,
      value: String
    },
    methods: {
      updateInput (value) {
        this.$emit('input', value)
      }
    },
    computed: {
      classNames () {
        const classNames = ['form__input']

        if (this.large) {
          classNames.push(`form__input--large`)
        }

        return classNames
      }
    }
  }
</script>

<style lang="scss">
  .form__input {
    color: #fff;
    border: none;
    background-color: transparent;
    outline: none;
    width: 100%;
    padding: 8px 6px 6px;
    font-size: 16px;
    border-bottom: 2px solid #fff;

    &--large {
      padding: 16px 8px 12px;
      font-size: 20px;
      border-bottom: 4px solid #fff;
    }
  }
</style>
