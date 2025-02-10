<template lang="pug">
.products-page
	ProductsList.q-mt-md(:products="products" :showToggle="true")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductsList from 'src/components/products/list/index.vue';
import { productsResponse } from '../../mock/products-response.mock';
import type { ProductsPageData } from '../../types/products';

export default defineComponent({
	name: 'ProductsPage',
	components: {
		ProductsList
	},
	setup(): ProductsPageData {

		// TODO: create logic for getting products with search request (searchProducts() method)
		const products = productsResponse

		return {
			products
		}
	},
})
</script>

<style scoped lang="stylus"></style>
