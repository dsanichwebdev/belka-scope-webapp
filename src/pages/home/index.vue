<template lang="pug">
.home-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    LogoComponent(:rounded="true" :size="'2xl'" :fontSize="'32px'" :fontWeight="'500'")
    SearchProductsInput(v-if="$q.screen.gt.sm")
    SearchProducts.q-mt-md(v-if="!$q.screen.gt.sm")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchProductsInput from 'src/components/search-products-input/index.vue'
import SearchProducts from 'src/components/search-products/index.vue'
import LogoComponent from 'src/components/logo/index.vue'

export default defineComponent({
	name: 'HomePage',
	components: {
		SearchProductsInput,
		SearchProducts,
		LogoComponent,
	},
	setup() {
		return {}
	},
})
</script>

<style scoped lang="stylus"></style>
