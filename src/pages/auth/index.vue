<template lang="pug">
.auth-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    q-img.rounded-borders(:src="'assets/logo.png'" :width="$q.screen.gt.md ? '140px' : '100px'")
    .text-h4.q-mt-sm BelkaScope
    q-card.q-mt-lg.flex.justify-center.column.items-center.q-pa-md(flat)
      .text-h5.text-weight-regular.q-mb-sm Войти с помощью
      AuthButtons(expanded @handleLogin="logIn")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthButtons from 'src/components/auth-buttons/index.vue'
import { authUtil } from 'src/utils/auth.util'

export default defineComponent({
  name: 'AuthPage',

  props: {},

  components: {
    AuthButtons,
  },

  data() {
    return {}
  },

  computed: {},

  methods: {
    checkAuth(): void {},

    logIn(service: string): void {
      authUtil.logIn(service)
    },

    logOut(): void {
      authUtil.logOut()
    },
  },

  mounted() {},
})
</script>

<style scoped lang="stylus"></style>
