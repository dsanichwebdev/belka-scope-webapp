<template lang="pug">
.auth-search-input.full-width.flex.justify-center
  q-input.q-mt-xl.rounded-border.full-width(standout dense v-model="search" ref="searchInput" :style="'max-width: 360px;'" @update:model-value="checkAuth")
    template(v-slot:append)
      q-btn(flat dense icon="search")
      q-btn.q-ml-sm(flat dense icon="center_focus_weak")
  AuthModal(:isVisible="showAuthDialog" @onLogin="logIn" @onClose="handleHide")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { authUtil } from 'src/utils/auth.util'
import AuthModal from '../auth-modal/index.vue'

export default defineComponent({
  name: 'AuthSearchInput',

  props: {},

  components: {
    AuthModal,
  },

  data() {
    return {
      search: '',
      showAuthDialog: false,
    }
  },

  computed: {},

  methods: {
    checkAuth(): void {
      if (!authUtil.checkAuth()) {
        this.showAuthDialog = true
      }
    },

    logIn(): void {
      authUtil.logIn()
      this.showAuthDialog = false
    },

    logOut(): void {
      authUtil.logOut()
    },

    handleHide(): void {
      this.showAuthDialog = false
      this.search = ''
    },
  },

  mounted() {},
})
</script>

<style scoped lang="stylus"></style>
