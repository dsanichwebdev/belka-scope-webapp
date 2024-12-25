<template lang="pug">
.auth-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    q-img.rounded-borders(:src="'assets/logo.png'" :width="$q.screen.gt.md ? '140px' : '100px'")
    .text-h4.q-mt-sm BelkaScope
    .q-mt-md
      .text-h6.text-weight-regular Войти с помощью
      AuthButtons
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthButtons from 'src/components/auth-buttons/index.vue'

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

  methods: {},

  mounted() {},
})
</script>

<style scoped lang="stylus"></style>
