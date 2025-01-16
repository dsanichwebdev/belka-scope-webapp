import type { Ref } from 'vue'

export interface SearchProductsData {
	searchMessage: Ref<string>
	showAuthDialog: Ref<boolean>
}

export interface SearchProductsMethods {
	handleSearch: () => void
	checkAuth: () => void
	logIn: (service: AuthService) => void
	handleHide: () => void
}
