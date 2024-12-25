<template lang="pug">
.auth-buttons
  .flex.justify-between.gap-1
    q-btn(flat dense @click="$emit('handleLogin', 'google')")
      q-img(:src="'/icons/google.png'" width="32px" height="32px")
    q-btn(flat dense @click="$emit('handleLogin', 'vk')")
      q-img(:src="'/icons/vk.png'" width="32px" height="32px")
    q-btn(flat dense @click="$emit('handleLogin', 'yandex')")
      q-img(:src="'/icons/yandex.png'" width="32px" height="32px")
    q-btn(flat dense @click="$emit('handleLogin', 'mailru')")
      q-img(:src="'/icons/mail-ru.webp'" width="32px" height="32px")
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'AuthButtons',

  props: {
    handleLogin: {
      type: Function as PropType<(service: string) => void>,
      required: true,
    },
  },

  data() {
    return {}
  },

  watch: {},

  methods: {},
})
</script>

<style scoped lang="stylus"></style>
