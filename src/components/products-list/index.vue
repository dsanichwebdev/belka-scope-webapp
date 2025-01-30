<template lang="pug">
.products-list
	template(v-for="product in data" :key="`${product.title} ${product.seller}`")
		.product-card.q-mb-md
			q-card.q-pa-sm(rounded)
				.row
					q-img.rounded-borders(:src="product.image" height="96px" :style="'max-width: 64px; max-height: 64px;'")
					.col.q-ml-sm
						.row.flex.items-center
							.text-negative.text-bold(:style="'font-size: 18px;'") {{product.wholesalePrice}}₽
							.text.text-normal.q-ml-xs(:style="'font-size: 14px;'") {{product.retailPrice}}₽
						.text.text-normal.ellipsis(:style="'font-size: 14px;'") {{product.title}}
						.text-grey.text-normal(:style="'font-size: 14px;'") {{product.seller}}
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue'
import type { Product } from '../../types/search-products'

export default defineComponent({
	name: 'ProductsList',

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
