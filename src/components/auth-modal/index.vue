<template lang="pug">
.auth-modal
  q-dialog(v-model="isDialogVisible" @hide="closeModal")
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
    login: {
      type: Function as PropType<() => void>,
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
      this.isDialogVisible = newValue;
    },
  },

  methods: {
    handleLogin() {
      this.login();
      this.closeModal();
    },

    closeModal() {
      this.close();
    },
  },
})
</script>

<style scoped lang="stylus"></style>
