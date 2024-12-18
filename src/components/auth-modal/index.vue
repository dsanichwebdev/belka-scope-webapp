<template lang="pug">
.auth-modal
  q-dialog(v-model="isVisible" @hide="closeModal")
    q-card
      q-card-section
        .text-h6 Войти с помощью
      q-card-actions
        q-btn(label="Закрыть", @click="closeModal")
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
    onLogin: {
      type: Function as PropType<() => void>,
      required: true,
    },
    onClose: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },

  components: {},

  data() {
    return {}
  },

  computed: {},

  methods: {
    handleLogin() {
      this.$emit('onLogin')
    },

    closeModal() {
      this.$emit('onClose')
    },
  },

  mounted() {},
})
</script>

<style scoped lang="stylus"></style>
