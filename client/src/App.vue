<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$socket.on('newMessage', message => {
      this.$store.dispatch('newMessage', message)
    })
  }
}
</script>
