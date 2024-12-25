<template lang="pug">
.auth-modal
  q-dialog(v-model="isDialogVisible" @hide="closeModal")
    q-card.q-pa-md
      q-card-section.flex.justify-center.q-px-md.q-pt-none.q-pb-md
        .text-h6.text-weight-regular Войти с помощью
      AuthButtons(@handleLogin="handleLogin")
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import AuthButtons from '../auth-buttons/index.vue'

export default defineComponent({
  name: 'AuthModal',

  components: {
    AuthButtons,
  },

  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    login: {
      type: Function as PropType<(service: string) => void>,
      required: true,
    },
    close: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },

  data() {
    return {
      isDialogVisible: this.isVisible,
    }
  },

  watch: {
    isVisible(newValue) {
      this.isDialogVisible = newValue
    },
  },

  methods: {
    handleLogin(service: string) {
      this.login(service)
      this.closeModal()
    },

    closeModal() {
      this.close()
    },
  },
})
</script>

<style scoped lang="stylus"></style>
