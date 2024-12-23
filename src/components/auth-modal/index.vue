<template lang="pug">
.auth-modal
  q-dialog(v-model="isDialogVisible" @hide="closeModal")
    q-card.q-pa-md
      q-card-section.flex.justify-center.q-px-md.q-pt-none.q-pb-md
        .text-h6.text-weight-regular Войти с помощью
      q-card.flex.justify-between.gap-1
        q-btn(flat dense @click="handleLogin('google')")
          q-img(:src="'/icons/google.png'" width="32px" height="32px")
        q-btn(flat dense @click="handleLogin('vk')")
          q-img(:src="'/icons/vk.png'" width="32px" height="32px")
        q-btn(flat dense @click="handleLogin('yandex')")
          q-img(:src="'/icons/yandex.png'" width="32px" height="32px")
        q-btn(flat dense @click="handleLogin('mailru')")
          q-img(:src="'/icons/mail-ru.webp'" width="32px" height="32px")
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'AuthModal',

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
