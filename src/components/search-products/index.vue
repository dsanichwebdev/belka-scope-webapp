<template lang="pug">
.search-products.full-width
  PhotoInput
  q-input.q-mt-md.full-width(v-model="searchMessage" type="textarea" filled placeholder="Введите описание товара"  @update:model-value="checkAuth")
  q-btn.full-width.bg-warning.q-mt-md.q-mb-lg(@click="handleSearch" icon="search" no-caps ) Найти
  AuthModal(:isVisible="showAuthDialog" :login="logIn" :close="handleHide")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AuthModal from 'src/components/auth-modal/index.vue'
import PhotoInput from 'src/components/photo-input/index.vue'
import type { SearchProductsData, SearchProductsMethods } from 'src/types/search-products'
import type { AuthService } from 'src/types/auth'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
	name: 'SearchProducts',

	components: {
		PhotoInput,
		AuthModal,
	},

	setup(): SearchProductsData & SearchProductsMethods {
		const authStore = useAuthStore()

		const searchMessage = ref<string>('')
		const showAuthDialog = ref<boolean>(false)

		const handleSearch = (): void => {
			if (!authStore.checkAuth()) {
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
		}
	},
})
</script>

<style scoped></style>
