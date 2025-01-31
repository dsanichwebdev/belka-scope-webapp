<template lang="pug">
.products-list.q-pb-lg.flex.justify-center
	template(v-for="product, index in data" :key="`${product.title} ${product.seller}`")
		ProductCard.q-mb-md.full-width(v-if="index < 4" :product="product")
	q-btn(v-if="products.length > 4" no-caps @click="viewAllProductsHandle") Смотреть все
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue'
import ProductCard from '../card/index.vue';
import { type Product } from '../../../types/search-products';
import { useRouter } from 'vue-router';

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
		const router = useRouter()

		const viewAllProductsHandle = () => {
			router.push({ name: 'products' })
		}

		return {
			data,
			viewAllProductsHandle
		}
	}
})
</script>
