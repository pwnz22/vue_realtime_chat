<template>
  <div>
    <form @submit.prevent="join(room, username)">
      <input type="text" placeholder="Room" v-model="room">
      <input type="text" placeholder="username" v-model="username">
      <button type="submit" :disabled="!isValid">join</button>
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
