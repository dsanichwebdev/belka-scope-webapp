<template lang="pug">
.auth-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    q-img.rounded-borders(:src="'assets/logo.png'" :width="$q.screen.gt.md ? '140px' : '100px'")
    .text-h4.q-mt-sm BelkaScope
    q-card.q-mt-lg.flex.justify-center.column.items-center.q-pa-md(flat)
      .text-h5.text-weight-regular.q-mb-sm Войти с помощью
      AuthButtons(expanded :handleLogin="logIn")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthButtons from 'src/components/auth-buttons/index.vue'
import type { AuthService } from 'src/types/auth'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
	name: 'AuthPage',
	components: {
		AuthButtons,
	},
	setup() {
		const authStore = useAuthStore()

		const logIn = (service: AuthService): void => {
			authStore.logIn(service)
		}

		const logOut = (): void => {
			authStore.logOut()
		}

		const checkAuth = (): void => {}

		return {
			logIn,
			logOut,
			checkAuth,
		}
	},
})
</script>

<style scoped lang="stylus"></style>
