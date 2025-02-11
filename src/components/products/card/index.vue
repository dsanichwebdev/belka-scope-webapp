<template lang="pug">
.products-card.full-height.cursor-pointer(@click="goToProduct(product.id)")
  template(v-if="grid")
    q-card.full-height.column.no-wrap.q-pa-sm(
      flat
      bordered
      :class="$q.dark.isActive ? '' : 'bg-white'"
      style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08)"
    )
      q-img(
        :src="product.image"
        :ratio="1"
        height="200px"
        :style="'border-radius: 12px;'"
      )
      .column.q-px-md.q-pb-md
        .text-negative.text-h6.text-weight-bold.q-mt-sm {{ formatPrice(product.wholesalePrice) }}/опт
        .text-grey-7.text-caption.q-mb-xs {{ formatPrice(product.retailPrice) }}/роз
        .text-subtitle2.text-weight-medium.two-line-ellipsis.q-mb-xs {{ product.title }}
        .text-caption.text-grey-7.ellipsis {{ product.seller }}

  template(v-else-if="minimize")
    q-card.full-height.q-pa-sm(
      flat
      bordered
      :style="'border-radius: 12px;'"
    )
      .row.items-start
        q-img.rounded-borders(
          :src="product.image"
          height="96px"
          style="border-radius: 12px; max-width: 64px; max-height: 64px;"
        )
        .col.q-ml-sm
          .row.flex.items-center
            .text-negative.text-bold(style="font-size: 18px;") {{ product.wholesalePrice }}₽/опт
            .text.text-normal.q-ml-xs(style="font-size: 14px;") {{ product.retailPrice }}₽/роз
          .text.text-normal.ellipsis(style="font-size: 14px;") {{ product.title }}
          .text-grey.text-normal(style="font-size: 14px;") {{ product.seller }}
  template(v-else)
    q-card.full-height.q-pa-sm(
      flat
      bordered
      :style="'border-radius: 12px;'"
    )
      .row.items-start
        div
          q-img.rounded-borders(
            :src="product.image"
            height="140px"
            style="border-radius: 12px; min-height: 140px; min-width: 140px;"
          )
        .col.q-ml-sm
          .col.items-center
            .text-negative.text-bold(style="font-size: 18px;") {{ product.wholesalePrice }}₽/опт
            .text.text-normal(style="font-size: 14px;") {{ product.retailPrice }}₽/роз
          .text.text-normal.ellipsis.text-bold(style="font-size: 14px;") {{ product.title }}
          .text.text-normal(style="font-size: 14px; -webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;") {{ product.description }}
          .text-grey.text-normal(style="font-size: 14px;") {{ product.seller }}
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useRouter } from 'vue-router'
import type { Product } from '../../../types/search-products'

export default defineComponent({
	name: 'ProductCard',

	props: {
		product: Object as PropType<Product>,
		grid: {
			type: Boolean,
			default: false,
		},
		minimize: {
			type: Boolean,
			default: true,
		},
	},

	setup() {
		const router = useRouter()

		const formatPrice = (price: number) => {
			return price ? `${price.toLocaleString('ru-RU')} ₽` : '─'
		}

		const goToProduct = (id: string) => {
			router.push(`/products/${id}`)
		}

		return {
			formatPrice,
			goToProduct,
		}
	},
})
</script>

<style lang="scss" scoped>
.products-card {
	transition: transform 0.2s ease;

	&:hover {
		transform: translateY(-4px);
	}
}

.two-line-ellipsis {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.body--dark {
	.q-card {
		box-shadow: 0 4px 12px rgba(255, 255, 255, 0.08) !important;
		border-color: rgba(255, 255, 255, 0.1) !important;
	}
}
</style>
