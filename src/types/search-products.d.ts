import type { Ref } from 'vue'

export interface Product {
	title: string
	image: string
	seller: string
	wholesalePrice: number
	retailPrice: number
}

export interface SearchProductsData {
	searchMessage: Ref<string>
	showAuthDialog: Ref<boolean>
	searchResponse: Ref<Product[]>
}

export interface SearchProductsMethods {
	handleSearch: () => void
	checkAuth: () => void
	logIn: (service: AuthService) => void
	handleHide: () => void
}
