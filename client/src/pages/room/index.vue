<template>
  <v-body>
    <v-section color="black">
      <v-form-group>
        <v-button inverted @click.native="leave">Leave room {{ $store.state.room }}</v-button>
      </v-form-group>
    </v-section>

    <v-section color="white" full ref="messages">
      <v-message v-for="item in $store.state.messages" :key="item" :is-self="$store.state.username === item.username">
        <v-message-user v-if="$store.state.username !== item.username">
          {{ item.username }}
        </v-message-user>
        <v-message-content>
          {{ item.message }}
        </v-message-content>
      </v-message>
    </v-section>

    <v-section color="black">
      <v-form @submit.prevent.native="sendMessage(message)" inline>
        <v-form-group inline full-width>
          <v-form-input v-model="message" placeholder="message" ref="messageInput"></v-form-input>
        </v-form-group>

        <v-form-group inline>
          <v-button inverted type="submit">Send Message</v-button>
        </v-form-group>
      </v-form>
    </v-section>
  </v-body>
</template>

<script>
  import VBody from '@/components/body/body'
  import VSection from '@/components/section/section'
  import VForm from '@/components/form/form'
  import VFormGroup from '@/components/form/form_group'
  import VFormInput from '@/components/form/form_input'
  import VButton from '@/components/button/button'
  import VMessage from '@/components/message/message'
  import VMessageUser from '@/components/message/message_user'
  import VMessageContent from '@/components/message/message_content'

  export default {
    components: {
      VBody,
      VSection,
      VButton,
      VMessage,
      VMessageUser,
      VMessageContent,
      VForm,
      VFormGroup,
      VFormInput
    },
    data: () => ({
      message: null
    }),
    watch: {
      '$store.state.messages' () {
        this.$nextTick(() => {
          this.scrollDown()
        })
      }
    },
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
      },
      scrollDown () {
        const messagesDOM = this.$refs.messages.$el
        messagesDOM.scrollTop = messagesDOM.scrollHeight
      }
    },
    mounted () {
      this.$refs.messageInput.$el.focus()
    }
  }
</script>
