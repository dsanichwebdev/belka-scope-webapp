<template lang="pug">
q-layout.flex.items-center.column(view="lHh Lpr lFf")
	HeaderComponent(v-if="displayHeader")
	q-page-container.q-pa-lg.full-width(:style="'max-width: 1080px;'")
		router-view
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import HeaderComponent from 'src/components/header/index.vue'
import { useRoute } from 'vue-router'
import { HIDDEN_HEADER_ROUTES } from '../const'

export default defineComponent({
	name: 'MainLayout',

	props: {} as Record<string, never>,

	setup() {
		const route = useRoute()
		const displayHeader = computed(() => {
			return !HIDDEN_HEADER_ROUTES.includes(route.name as string)
		})

		return { displayHeader }
	},

	components: {
		HeaderComponent,
	},
})
</script>
