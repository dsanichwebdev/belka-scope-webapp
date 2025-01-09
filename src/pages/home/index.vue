<template lang="pug">
.home-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    q-img.rounded-borders(:src="'assets/logo.png'" :width="$q.screen.gt.md ? '140px' : '100px'")
    .text-h4.q-mt-sm BelkaScope
    AuthSearchInput(v-if="$q.screen.gt.sm")
    SearchProducts.q-mt-md(v-if="!$q.screen.gt.sm")
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import AuthSearchInput from 'src/components/auth-search-input/index.vue'
import SearchProducts from 'src/components/search-products/index.vue'
import type { HomePageData } from 'src/types/home'

export default defineComponent({
	name: 'HomePage',
	components: {
		AuthSearchInput,
		SearchProducts,
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
