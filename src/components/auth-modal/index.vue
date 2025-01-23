<template lang="pug">
.auth-modal
  q-dialog(v-model="isDialogVisible" @hide="closeModal")
    q-card.q-pa-md(flat)
      template(v-if="showProfileDataStep")
        SettingsUserData(:closeModal="closeModal")
      template(v-else-if="!authStore.isAuthenticated")
        q-card-section.flex.justify-center.q-px-md.q-pt-none.q-pb-md
          .text-h6.text-weight-regular Войти с помощью
        AuthButtons(:handleLogin="handleLogin")
</template>

<script lang="ts">
import { defineComponent, ref, watch, type PropType } from 'vue'
import AuthButtons from '../auth-buttons/index.vue'
import SettingsUserData from 'src/components/settings/user-data/index.vue'
import type { AuthModalProps } from 'src/types/auth-modal'
import { useAuthStore } from 'src/stores/auth'

export default defineComponent({
	name: 'AuthModal',

	components: {
		AuthButtons,
		SettingsUserData,
	},

	props: {
		isVisible: {
			type: Boolean,
			required: true,
		},
		login: {
			type: Function as PropType<(service: string) => void>,
			required: true,
		},
		close: {
			type: Function as PropType<() => void>,
			required: true,
		},
	},

	setup(props: AuthModalProps) {
		const authStore = useAuthStore()

		const isDialogVisible = ref<boolean>(props.isVisible)
		const showProfileDataStep = ref<boolean>(false)

		watch(
			() => props.isVisible,
			(newValue) => {
				isDialogVisible.value = newValue
			},
		)

		const handleLogin = (service: string) => {
			props.login(service)
			if (!authStore.hasProfileData) {
				showProfileDataStep.value = true
			}
		}

		const closeModal = () => {
			props.close()
		}

		return {
			isDialogVisible,
			showProfileDataStep,
			handleLogin,
			closeModal,
			authStore,
		}
	},
})
</script>

<style scoped lang="stylus"></style>
