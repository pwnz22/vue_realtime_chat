<template>
  <div id="app">
    <input type="text" v-model="message" placeholder="message">
    <button @click.prevent="addMessage(message)">Send</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: ''
  }),
  methods: {
    addMessage (message) {
      this.$store.dispatch('newMessage', message)
    }
  },
  mounted () {
    this.$socket.emit('newMessage', 'Hello World!')
  }
}
</script>
