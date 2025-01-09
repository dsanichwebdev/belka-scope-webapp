<template lang="pug">
.search-products.full-width
  PhotoInput
  q-input.q-mt-md.full-width(v-model="searchMessage" type="textarea" filled placeholder="Введите описание товара"  @update:model-value="checkAuth")
  q-btn.full-width.bg-warning.q-mt-md.q-mb-lg(@click="handleSearch" icon="search" no-caps ) Найти
  AuthModal(:isVisible="showAuthDialog" :login="logIn" :close="handleHide")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { authUtil } from 'src/utils/auth.util'
import AuthModal from 'src/components/auth-modal/index.vue'
import PhotoInput from 'src/components/photo-input/index.vue'
import type { SearchProductsData, SearchProductsMethods } from 'src/types/search-products'
import type { AuthService } from 'src/types/auth'

export default defineComponent({
	name: 'SearchProducts',

	components: {
		PhotoInput,
		AuthModal,
	},

	setup(): SearchProductsData & SearchProductsMethods {
		const searchMessage = ref<string>('')
		const showAuthDialog = ref<boolean>(false)

		const handleSearch = (): void => {
			if (!authUtil.checkAuth()) {
				showAuthDialog.value = true
			}
		}

		const checkAuth = (): void => {
			if (!authUtil.checkAuth()) {
				showAuthDialog.value = true
			}
		}

		const logIn = (service: AuthService): void => {
			authUtil.logIn(service)
			if (authUtil.hasProfileData) {
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
