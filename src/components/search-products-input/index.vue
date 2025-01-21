<template lang="pug">
.search-products-input.flex.items-center.full-width
  q-input.q-mt-xl.rounded-border.full-width(bg-color="primary" color="black" standout dense v-model="search" ref="searchInput" @update:model-value="checkAuth")
    template(v-slot:append)
      q-btn(flat color="black" dense icon="search" @click="handleSearch")
      q-btn.q-ml-sm(v-if="showUploadPhotoButton" flat color="black" dense icon="center_focus_weak" @click="uploadPhoto")
  AuthModal(:isVisible="showAuthDialog" :login="logIn" :close="handleHide")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AuthModal from '../auth-modal/index.vue'
import type { AuthService } from 'src/types/auth'
import type {
	SearchProductsInputData,
	SearchProductsInputMethods,
} from 'src/types/search-products-input'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
	name: 'SearchProductsInput',

	components: {
		AuthModal,
	},

	props: {
		needCheckAuth: {
			type: Boolean,
			default: true,
		},
		showUploadPhotoButton: {
			type: Boolean,
			default: false,
		},
	},

	setup(props): SearchProductsInputData & SearchProductsInputMethods {
		const authStore = useAuthStore()

		const search = ref<string>('')
		const showAuthDialog = ref<boolean>(false)

		const checkAuth = (): void => {
			if (props.needCheckAuth && !authStore.checkAuth()) {
				showAuthDialog.value = true
			}
		}

		const logIn = (service: AuthService): void => {
			authStore.logIn(service)
			if (props.needCheckAuth && authStore.hasProfileData) {
				showAuthDialog.value = false
			}
		}

		const logOut = (): void => {
			authStore.logOut()
		}

		const handleHide = (): void => {
			search.value = ''
			showAuthDialog.value = false
		}

		const uploadPhoto = (): void => {
			console.log('uplodaded photo for search')
		}

		const handleSearch = () => {
			console.log(`Searching for: ${search.value}`)
		}

		return {
			search,
			showAuthDialog,
			checkAuth,
			logIn,
			logOut,
			handleHide,
			uploadPhoto,
			handleSearch,
		}
	},
})
</script>

<style scoped lang="stylus">
.search-products-input
	& label
		margin-top: 0 !important;
</style>
