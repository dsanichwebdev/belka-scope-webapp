<template lang="pug">
.home-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    LogoComponent(:rounded="true" :size="'2xl'" :fontSize="'32px'" :fontWeight="'500'")
    SearchProductsInput(v-if="$q.screen.gt.sm")
    SearchProducts.q-mt-md(v-if="!$q.screen.gt.sm")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SearchProductsInput from 'src/components/search-products-input/index.vue'
import SearchProducts from 'src/components/search-products/index.vue'
import LogoComponent from 'src/components/logo/index.vue'
import type { HomePageData } from 'src/types/home'

export default defineComponent({
	name: 'HomePage',
	components: {
		SearchProductsInput,
		SearchProducts,
		LogoComponent,
	},
	setup() {
		const search = ref<HomePageData['search']>('')

		const handleSearch = () => {
			console.log(`Searching for: ${search.value}`)
		}

		return {
			search,
			handleSearch,
		}
	},
})
</script>

<style scoped lang="stylus"></style>
