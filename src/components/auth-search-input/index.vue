<template lang="pug">
.auth-search-input.full-width.flex.justify-center
  q-input.q-mt-xl.rounded-border.full-width(bg-color="primary" color="black" standout dense v-model="search" ref="searchInput" :style="'max-width: 360px;'" @update:model-value="checkAuth")
    template(v-slot:append)
      q-btn(flat color="black" dense icon="search")
      q-btn.q-ml-sm(flat color="black" dense icon="center_focus_weak")
  AuthModal(:isVisible="showAuthDialog" :login="logIn" :close="handleHide")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { authUtil } from 'src/utils/auth.util'
import AuthModal from '../auth-modal/index.vue'
import type { AuthService } from 'src/types/auth'
import type { AuthSearchInputData, AuthSearchInputMethods } from 'src/types/auth-search-input'

export default defineComponent({
	name: 'AuthSearchInput',

	components: {
		AuthModal,
	},

	setup(): AuthSearchInputData & AuthSearchInputMethods {
		const search = ref<string>('')
		const showAuthDialog = ref<boolean>(false)

		const checkAuth = (): void => {
			if (!authUtil.checkAuth()) {
				showAuthDialog.value = true
			}
		}

		const logIn = (service: AuthService): void => {
			authUtil.logIn(service)
			if (authUtil.hasProfileData) {
				showAuthDialog.value = false
			}
		}

		const logOut = (): void => {
			authUtil.logOut()
		}

		const handleHide = (): void => {
			search.value = ''
			showAuthDialog.value = false
		}

		return {
			search,
			showAuthDialog,
			checkAuth,
			logIn,
			logOut,
			handleHide,
		}
	},
})
</script>

<style scoped lang="stylus"></style>
