import type { AuthUtil, AuthService } from 'src/types/auth'

export const authUtil: AuthUtil = {
	isAuthenticated: false,
	hasProfileData: false,

	services: [
		{ name: 'Google', icon: '/icons/google.png', id: 'google' },
		{ name: 'ВКонтакте', icon: '/icons/vk.png', id: 'vk' },
		{ name: 'Яндекс', icon: '/icons/yandex.png', id: 'yandex' },
		{ name: 'MailRu', icon: '/icons/mail-ru.webp', id: 'mailru' },
	],

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
}
