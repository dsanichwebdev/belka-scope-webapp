<template lang="pug">
.products-list.q-pb-lg.flex.justify-center
  template(v-if="grid")
    q-infinite-scroll(@load="onLoad" :offset="250" :disable="!hasMoreData")
      template(#loading)
        .row.justify-center.q-my-md
          q-spinner-dots(color="primary" size="40px")
      .row.q-col-gutter-md
        .col-12.col-sm-6.col-md-2(v-for="product in displayedData" :key="`${product.title} ${product.seller}`")
          ProductCard.full-width(:product="product" :grid="grid")

  template(v-else)
    template(v-if="hasViewAllButton")
      template(v-for="product, index in displayedData" :key="`${product.title} ${product.seller}`")
        ProductCard.q-mb-md.full-width(v-if="index < 4" :product="product")
    template(v-else)
      template(v-for="product in displayedData" :key="`${product.title} ${product.seller}`")
        ProductCard.q-mb-md.full-width(:product="product")

  q-btn(
    v-if="showViewAllButton"
    no-caps
    @click="viewAllProductsHandle"
  ) Смотреть все
</template>

<script lang="ts">
import { defineComponent, computed, type PropType, ref } from 'vue'
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
    },
    hasViewAllButton: {
      type: Boolean,
      default: false
    },
    grid: {
      type: Boolean,
      default: false
    },
    chunkSize: {
      type: Number,
      default: 6
    }
  },

  setup(props) {
    const router = useRouter()
    const loadedChunks = ref(1)
    const isLoading = ref(false)

    const displayedData = computed(() => {
      if(props.grid) {
        return props.products.slice(0, loadedChunks.value * props.chunkSize)
      }
      return props.products
    })

    const hasMoreData = computed(() =>
      props.grid && props.products.length > loadedChunks.value * props.chunkSize
    )

    const showViewAllButton = computed(() =>
      !props.grid && props.products.length > 4 && props.hasViewAllButton
    )

    const viewAllProductsHandle = () => {
      router.push({ name: 'products' })
    }

    const onLoad = (index: number, done: (stop?: boolean) => void) => {
      if(!props.grid || isLoading.value || !hasMoreData.value) {
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
      onLoad
    }
  }
})
</script>
