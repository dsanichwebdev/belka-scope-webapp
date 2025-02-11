<template lang="pug">
.search-products.full-width
  PhotoInput(@update-photo-url="updatePhotoUrl")
  q-input.q-mt-md.full-width(v-model="searchMessage" type="textarea" filled placeholder="Введите описание товара"  @update:model-value="checkAuth")
  q-btn.full-width.bg-warning.q-mt-md.q-mb-lg(@click="handleSearch" icon="search" no-caps ) Найти
  AuthModal(:isVisible="showAuthDialog" :login="logIn" :close="handleHide")
  ProductsList(:products="searchResponse" hasViewAllButton :grid="false" :minimizeCards="true")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AuthModal from 'src/components/auth-modal/index.vue'
import PhotoInput from 'src/components/photo-input/index.vue'
import type { SearchProductsData, SearchProductsMethods, Product } from 'src/types/search-products'
import type { AuthService } from 'src/types/auth'
import { useAuthStore } from 'src/stores/auth'
import ProductsList from 'src/components/products/list/index.vue'
import { useProductsStore } from '../../stores/products'
import { checkAndHandleAuth } from '../../utils/auth-utils'

export default defineComponent({
	name: 'SearchProducts',

	components: {
		PhotoInput,
		AuthModal,
		ProductsList,
	},

	setup(): SearchProductsData & SearchProductsMethods {
		const authStore = useAuthStore()
		const productsStore = useProductsStore()

		const searchMessage = ref<string>('')
		const photoUrl = ref<string>('')
		const showAuthDialog = ref<boolean>(false)

		const searchResponse = ref<Product[]>([])

		const updatePhotoUrl = (url: string) => {
			photoUrl.value = url
		}

		const handleSearch = async () => {
			if (await checkAndHandleAuth()) {
				const photo = photoUrl.value
				const description = searchMessage.value

				searchResponse.value = productsStore.searchProducts(photo, description)
				console.log(searchResponse.value)
			} else {
				showAuthDialog.value = true
			}
		}

		const checkAuth = (): void => {
			if (!authStore.checkAuth()) {
				showAuthDialog.value = true
			}
		}

		const logIn = (service: AuthService): void => {
			authStore.logIn(service)
			if (authStore.hasProfileData) {
				showAuthDialog.value = false
			}
		}

		const handleHide = (): void => {
			searchMessage.value = ''
			showAuthDialog.value = false
		}

		return {
			searchMessage,
			showAuthDialog,
			handleSearch,
			checkAuth,
			logIn,
			handleHide,
			searchResponse,
			updatePhotoUrl,
		}
	},
})
</script>

<style scoped></style>
