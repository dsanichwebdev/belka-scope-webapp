import type { AuthService } from 'src/types/auth'
import type { Ref } from 'vue'

export interface AuthSearchInputData {
	search: Ref<string>
	showAuthDialog: Ref<boolean>
}

export interface AuthSearchInputMethods {
	checkAuth: () => void
	logIn: (service: AuthService) => void
	logOut: () => void
	handleHide: () => void
}
