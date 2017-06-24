<template>
  <div id="app">
    Hello World!
  </div>
</template>

<script>
export default {
  mounted () {
    this.$socket.emit('newMessage', 'Hello World!')
  }
}
</script>
