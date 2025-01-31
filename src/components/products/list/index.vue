<template lang="pug">
.products-list
	template(v-for="product in data" :key="`${product.title} ${product.seller}`")
		ProductCard.q-mb-md(:product="product")
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue'
import ProductCard from '../card/index.vue';
import { type Product } from '../../../types/search-products';

export default defineComponent({
	name: 'ProductsList',

	components: {
		ProductCard
	},

	props: {
		products: {
			type: Array as PropType<Product[]>,
			required: true
		}
	},

	setup(props) {
		const data = computed(() => props.products)

		return {
			data
		}
	}
})
</script>
