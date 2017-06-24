<template>
  <div class="section section--black section--full">
    <form @submit.prevent="join(room, username)" class="form">
      <div class="form__group">
        <input type="text" class="form__input form__input--large" placeholder="room" v-model="room">
      </div>
      <div class="form__group">
        <input type="text" class="form__input form__input--large" placeholder="username" v-model="username">
      </div>
      <div class="form__group">
        <button class="button button--large" :class="{ 'button--disabled': !isValid }" type="submit">join</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default{
    data: () => ({
      room: null,
      username: null
    }),
    computed: {
      isValid () {
        let isValid = true
        if (!this.room) {
          isValid = false
        }
        if (!this.username) {
          isValid = false
        }
        return isValid
      }
    },
    methods: {
      join (room, username) {
        if (this.isValid) {
          this.$store.dispatch('join', {room, username})
        }
      }
    }
  }
</script>
