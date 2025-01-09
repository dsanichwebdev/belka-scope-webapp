<template lang="pug">
.search-products.full-width
  PhotoInput
  q-input.q-mt-md.full-width(v-model="searchMessage" type="textarea" filled placeholder="Введите описание товара"  @update:model-value="checkAuth")
  q-btn.full-width.bg-warning.q-mt-md.q-mb-lg(@click="handleSearch" icon="search" no-caps ) Найти
  AuthModal(:isVisible="showAuthDialog" :login="logIn" :close="handleHide")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { authUtil } from 'src/utils/auth.util'
import AuthModal from 'src/components/auth-modal/index.vue'
import PhotoInput from 'src/components/photo-input/index.vue'
import type { AuthService } from 'src/types/auth'

export default defineComponent({
	name: 'SearchProducts',

	components: {
		PhotoInput,
		AuthModal,
	},

	data() {
		return {
			searchMessage: '',
			showAuthDialog: false,
		}
	},

	methods: {
		handleSearch(): void {
			if (!authUtil.checkAuth()) {
				this.showAuthDialog = true
			}
		},

		checkAuth(): void {
			if (!authUtil.checkAuth()) {
				this.showAuthDialog = true
			}
		},

		logIn(service: AuthService): void {
			authUtil.logIn(service)
			if (authUtil.hasProfileData) {
				this.showAuthDialog = false
			}
		},

		handleHide(): void {
			this.searchMessage = ''
			this.showAuthDialog = false
		},
	},
})
</script>

<style scoped></style>
