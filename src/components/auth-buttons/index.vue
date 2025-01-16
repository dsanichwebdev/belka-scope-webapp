<template lang="pug">
.auth-buttons
  .flex.justify-between(:class="{ 'expanded-gap': expanded }")
    q-btn(flat :no-caps="expanded" dense v-for="service in services" :key="service.id" @click="emitHandleLogin(service.id)")
      q-img(:src="service.icon" width="32px" height="32px")
      .text-h6.q-ml-sm(v-if="expanded") {{ service.name }}
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { type AuthService } from 'src/types/auth'
import { useAuthStore } from '../../stores/auth'

export default defineComponent({
	name: 'AuthButtons',
	props: {
		handleLogin: {
			type: Function as PropType<(service: AuthService) => void>,
			required: true,
		},
		expanded: {
			type: Boolean,
			required: false,
		},
	},
	setup(props) {
		const authStore = useAuthStore()

		const emitHandleLogin = (service: AuthService) => {
			props.handleLogin(service)
		}

		const services = authStore?.services

		return { emitHandleLogin, services }
	},
})
</script>

<style scoped lang="stylus">
.expanded-gap {
  gap: 5px;
}
</style>
