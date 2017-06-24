<template>
  <div>
    <div>
      <button @click="leave">Leave room</button>
    </div>
    <div v-for="item in $store.state.messages">
      <div v-if="$store.state.username !== item.username">
        {{ item.username }}
      </div>
      <div>
        {{ item.message }}
      </div>
    </div>
    <form @submit.prevent="sendMessage(message)">
      <input type="text" v-model="message" placeholder="message">
      <button type="submit">Send message</button>
    </form>
  </div>
</template>

<script>
  export default {
    data: () => ({
      message: null
    }),
    methods: {
      sendMessage (message) {
        if (!message) {
          return
        }

        this.$store.dispatch('sendMessage', message)
        this.message = null
      },
      leave () {
        this.$store.dispatch('leave')
      }
    }
  }
</script>
