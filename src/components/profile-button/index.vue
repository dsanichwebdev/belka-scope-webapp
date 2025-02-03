<template lang="pug">
.profile-button.cursor-pointer.flex.items-center
	q-avatar.bg-primary(
		round
		@mouseenter="showMenu = true"
		@mouseleave="handleAvatarLeave"
	)
		img(:src="avatarUrl || defaultAvatar")
		q-menu
			q-list
				q-item(clickable @click="goToAccount")
					q-item-section Аккаунт
				q-item(clickable @click="goToPayments")
					q-item-section Платежи
				q-item(clickable @click="logOut")
					q-item-section Выйти
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
	name: 'ProfileButton',

	setup() {
		const route = useRouter()
		const authStore = useAuthStore()

		const avatarUrl = ref<string | null>(null)
		const defaultAvatar =
			'https://gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e?s=400&d=robohash&r=x'

		const goToAccount = (): void => {
			route.push('profile')
		}

		const goToPayments = (): void => {
			route.push('payments')
		}

		const logOut = (): void => {
			console.log('Выход из аккаунта')
			authStore.logOut()
		}

		return {
			avatarUrl,
			defaultAvatar,
			goToAccount,
			goToPayments,
			logOut,
		}
	},
})
</script>

<style scoped lang="stylus">
.profile-button
  position: relative
  q-avatar
    cursor: pointer
  q-popup-proxy
    position: absolute
    top: 100%
    left: 0
    z-index: 1000
</style>
