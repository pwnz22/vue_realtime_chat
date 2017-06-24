<template>
  <v-section color="black" full>
    <v-form @submit.prevent.native="join(room, username)">
      <v-form-group>
        <v-form-input large v-model="room" placeholder="room"></v-form-input>
      </v-form-group>
      <v-form-group>
        <v-form-input large v-model="username" placeholder="username"></v-form-input>
      </v-form-group>
      <v-form-group>
        <v-button large :disabled="!isValid" type="submit">join</v-button>
      </v-form-group>
    </v-form>
  </v-section>
</template>

<script>
  import VSection from '@/components/section/section'
  import VForm from '@/components/form/form'
  import VFormGroup from '@/components/form/form_group'
  import VFormInput from '@/components/form/form_input'
  import VButton from '@/components/button/button'

  export default{
    components: {VSection, VForm, VFormGroup, VFormInput, VButton},
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
