export type AuthService = 'google' | 'vk' | 'yandex' | 'mailru'

export interface AuthUtil {
	isAuthenticated: boolean
	hasProfileData: boolean
	checkAuth: () => boolean
	logIn: (service: AuthService) => void
	logOut: () => void
}
