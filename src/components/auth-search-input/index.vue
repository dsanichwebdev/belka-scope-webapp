<template lang="pug">
.auth-search-input.full-width.flex.justify-center
  q-input.q-mt-xl.rounded-border.full-width(bg-color="primary" color="black" standout dense v-model="search" ref="searchInput" :style="'max-width: 360px;'" @update:model-value="checkAuth")
    template(v-slot:append)
      q-btn(flat color="black" dense icon="search")
      q-btn.q-ml-sm(flat color="black" dense icon="center_focus_weak")
  AuthModal(:isVisible="showAuthDialog" :login="logIn" :close="handleHide")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { authUtil } from 'src/utils/auth.util'
import AuthModal from '../auth-modal/index.vue'
import type { AuthService } from 'src/types/auth'

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

		logIn(service: AuthService): void {
			authUtil.logIn(service)
			if (authUtil.hasProfileData) {
				this.showAuthDialog = false
			}
		},

		logOut(): void {
			authUtil.logOut()
		},

		handleHide(): void {
			this.search = ''
			this.showAuthDialog = false
		},
	},

	mounted() {},
})
</script>

<style scoped lang="stylus"></style>
