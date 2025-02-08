import type { Ref } from 'vue'

export interface ProductMetrics {
  stock?: number
  brandsCount?: number
  suppliersCount?: number
	sellingProductsPercentage?: number,
  sellingBrandsPercentage?: number
  sellingSuppliersPercentage?: number
  averagePrice?: number
  averageMargin?: number
  marketplacePrice?: number
  rating?: number
}

export interface Product {
  id?: string
  title?: string
  image?: string
  seller?: string
  wholesalePrice?: number
  retailPrice?: number
  description?: string
  category?: string
  mainMetrics?: ProductMetrics
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
	updatePhotoUrl: (url: string) => void
}
