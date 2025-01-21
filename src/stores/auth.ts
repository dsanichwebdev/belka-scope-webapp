import { defineStore, acceptHMRUpdate } from 'pinia'
import type { AuthService } from 'src/types/auth'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		isAuthenticated: false,
		hasProfileData: false,
		services: [
			{ name: 'Google', icon: '/icons/google.png', id: 'google' },
			{ name: 'ВКонтакте', icon: '/icons/vk.png', id: 'vk' },
			{ name: 'Яндекс', icon: '/icons/yandex.png', id: 'yandex' },
			{ name: 'MailRu', icon: '/icons/mail-ru.webp', id: 'mailru' },
		],
	}),
	getters: {},
	actions: {
		checkAuth(): boolean {
			return this.isAuthenticated
		},
		logIn(service: AuthService) {
			console.log(`Successfully logged in with ${service}!`)
			this.isAuthenticated = true
		},

		logOut() {
			this.isAuthenticated = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
