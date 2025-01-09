import type { AuthUtil, AuthService } from 'src/types/auth'

export const authUtil: AuthUtil = {
	isAuthenticated: false,
	hasProfileData: false,

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
