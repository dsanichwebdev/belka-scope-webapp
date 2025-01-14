import type { AuthService } from 'src/types/auth'
import type { Ref } from 'vue'

export interface SearchProductsInputData {
	search: Ref<string>
	showAuthDialog: Ref<boolean>
}

export interface SearchProductsInputMethods {
	checkAuth: () => void
	logIn: (service: AuthService) => void
	logOut: () => void
	handleHide: () => void
	uploadPhoto: () => void
}
