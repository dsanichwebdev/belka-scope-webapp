<template lang="pug">
.products-list.q-pb-lg.flex.justify-center(style="position: relative")
  .q-py-md.justify-end.flex.full-width(v-if="showToggle")
    q-btn-group(flat rounded)
      q-btn(
        flat
        icon="grid_on"
        :color="internalGrid ? 'primary' : 'grey-6'"
        @click="internalGrid = true"
        padding="sm md"
        data-testid="grid-btn"
      )
      q-btn(
        flat
        icon="table_rows"
        :color="!internalGrid ? 'primary' : 'grey-6'"
        @click="internalGrid = false"
        padding="sm md"
        data-testid="table-btn"
      )

  template(v-if="internalGrid")
    q-infinite-scroll(@load="onLoad" :offset="250" :disable="!hasMoreData")
      template(#loading)
        .row.justify-center.q-my-md
          q-spinner-dots(color="primary" size="40px")
      .row.q-col-gutter-md
        .col-12.col-sm-6.col-md-2(v-for="product in displayedData" :key="`${product.title} ${product.seller}`")
          ProductCard.full-width(:product="product" :grid="internalGrid" :minimize="minimizeCards")

  template(v-else)
    template(v-if="hasViewAllButton")
      template(v-for="product, index in displayedData" :key="`${product.title} ${product.seller}`")
        ProductCard.q-mb-md.full-width(v-if="index < 4" :product="product")
    template(v-else)
      template(v-for="product in displayedData" :key="`${product.title} ${product.seller}`")
        ProductCard.q-mb-md.full-width(:product="product" :minimize="minimizeCards")

  q-btn(
    v-if="showViewAllButton"
    no-caps
    @click="viewAllProductsHandle"
  ) Смотреть все
</template>

<script lang="ts">
import { defineComponent, computed, type PropType, ref, watch, onMounted } from 'vue'
import ProductCard from '../card/index.vue'
import { type Product } from '../../../types/search-products'
import { useRouter } from 'vue-router'

export default defineComponent({
	name: 'ProductsList',

	components: {
		ProductCard,
	},

	props: {
		products: {
			type: Array as PropType<Product[]>,
			required: true,
		},
		hasViewAllButton: {
			type: Boolean,
			default: false,
		},
		grid: {
			type: Boolean,
			default: undefined,
		},
		chunkSize: {
			type: Number,
			default: 6,
		},
		showToggle: {
			type: Boolean,
			default: false,
		},
		minimizeCards: {
			type: Boolean,
			default: false,
		},
	},

	setup(props) {
		const router = useRouter()
		const loadedChunks = ref(1)
		const isLoading = ref(false)
		const internalGrid = ref<boolean>(true)

		onMounted(() => {
			if (props.grid !== undefined) {
				internalGrid.value = props.grid
			} else {
				const savedGrid = localStorage.getItem('productViewMode')
				internalGrid.value = savedGrid === 'list' ? false : true
			}
		})

		watch(
			() => props.grid,
			(newVal) => {
				if (newVal !== undefined) {
					internalGrid.value = newVal
				}
			},
		)

		watch(internalGrid, (newVal) => {
			if (props.grid === undefined) {
				localStorage.setItem('productViewMode', newVal ? 'grid' : 'list')
			}
		})

		const displayedData = computed(() => {
			if (internalGrid.value) {
				return props.products.slice(0, loadedChunks.value * props.chunkSize)
			}
			return props.products
		})

		const hasMoreData = computed(
			() => internalGrid.value && props.products.length > loadedChunks.value * props.chunkSize,
		)

		const showViewAllButton = computed(
			() => !internalGrid.value && props.products.length > 4 && props.hasViewAllButton,
		)

		const viewAllProductsHandle = () => {
			router.push({ name: 'products' })
		}

		const onLoad = (index: number, done: (stop?: boolean) => void) => {
			if (!internalGrid.value || isLoading.value || !hasMoreData.value) {
				done(true)
				return
			}

			isLoading.value = true
			setTimeout(() => {
				loadedChunks.value++
				isLoading.value = false
				done(!hasMoreData.value)
			}, 500)
		}

		return {
			displayedData,
			hasMoreData,
			showViewAllButton,
			viewAllProductsHandle,
			onLoad,
			internalGrid,
		}
	},
})
</script>
