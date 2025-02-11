<template lang="pug">
.products-detailspage.q-py-lg
  q-breadcrumbs.q-mb-lg(gutter="sm")
    q-breadcrumbs-el(label="Главная" to="/")
    q-breadcrumbs-el(label="Каталог" to="/products")
    q-breadcrumbs-el(:label="product.title")

  .row.q-col-gutter-xl
    .col-12.col-md-4
      q-img(
        :src="product.image"
        :ratio="1"
        fit="contain"
        class="rounded-borders"
        spinner-color="primary"
				style="border-radius: 24px;"
      )
        template(v-slot:loading)
          q-skeleton(height="100%" animation="fade")

    .col-12.col-md-8
      q-rating.q-mb-sm(
        v-model="product.mainMetrics.rating"
        size="2em"
        color="orange"
        readonly
			)
      .column.q-gutter-y-lg
        .column
          .text-h4.text-weight-bold {{ product.title }}
          .text-subtitle1.text-grey-7.q-mt-xs {{ product.category || 'Без категории' }}

        q-card-section.q-pa-none
          .row.q-col-gutter-md
            .col-12.col-sm-6.col-md-6.col-lg-4(
              v-for="metric in mainMetrics"
              :key="metric.title"
            )
              MetricCard.full-height(
                :title="metric.title"
                :value="metric.value"
                :icon="metric.icon"
                :color="metric.color"
              )
        q-card-section.q-pa-none
          .text-h6.q-mb-md Описание
          .text-body1(v-if="product.description") {{ product.description }}
          .text-caption.text-grey-7(v-else) Нет описания товара
        q-card-section.q-pa-none
          q-card.bg-white.rounded-borders.q-pa-md.cursor-pointer(:style="'border-radius: 12px;'")
            .text-h6.q-mb-md Продавец {{product.seller}}
            .row.items-center
              .col-12.col-sm-6.full-width.q-gutter-y-md
                .col
                  MetricCard.full-height.full-width(
                    :title="'Оптовая цена'"
                    :value="formatPrice(product.wholesalePrice)"
                    :icon="'attach_money'"
                    :color="'blue'"
                  )
                .col
                  MetricCard.full-height.full-width.col(
                    :title="'Цена на маркетплейсе'"
                    :value="formatPrice(product.retailPrice)"
                    :icon="'attach_money'"
                    :color="'blue'"
                  )

</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import MetricCard from 'src/components/metric-card/index.vue';
import { productsResponse } from '../../../mock/products-response.mock';


export default defineComponent({
  name: 'ProductsDetailsPage',
  components: { MetricCard },
  setup() {
    const route = useRoute()

		// Mock data - Replace with API call
    const product = computed(() => {
			const productId = route?.params?.id?.toString()
			const foundProduct = productsResponse.find(p => p.id === productId)

			return foundProduct
		})

		const formatPrice = (price: number) =>
      price?.toLocaleString('ru-RU') + ' ₽' || '─'

    const mainMetrics = computed(() => [
      {
        title: 'Товары',
        value: product?.value?.mainMetrics?.stock?.toLocaleString('ru-RU'),
        icon: 'inventory_2',
        color: 'blue'
      },
      {
        title: 'Бренды',
        value: product?.value?.mainMetrics?.brandsCount,
        icon: 'branding_watermark',
        color: 'green'
      },
      {
        title: 'Поставщики',
        value: product?.value?.mainMetrics?.suppliersCount,
        icon: 'local_shipping',
        color: 'orange'
      },
			{
        title: 'Товары с продажами',
        value: `${product?.value?.mainMetrics?.sellingProductsPercentage}%`,
        icon: 'trending_up',
        color: 'orange'
      },
      {
        title: 'Бренды с продажами',
        value: `${product?.value?.mainMetrics?.sellingBrandsPercentage}%`,
        icon: 'trending_up',
        color: 'red'
      },
			{
        title: 'Поставщики с продажами',
        value: `${product?.value?.mainMetrics?.sellingSuppliersPercentage}%`,
        icon: 'trending_up',
        color: 'blue'
      },
      {
        title: 'Средняя цена',
        value: formatPrice(product?.value?.mainMetrics?.averagePrice || 0),
        icon: 'attach_money',
        color: 'purple'
      },
      {
        title: 'Средняя маржинальность',
        value: `${product?.value?.mainMetrics?.averageMargin}%`,
        icon: 'show_chart',
        color: 'teal'
      }
    ])

    return {
      product,
      formatPrice,
			mainMetrics
    }
  }
})
</script>

<style lang="stylus" scoped>
.products-detailspage
  max-width 1440px
  margin 0 auto

.q-card
  transition all 0.3s ease
  &:hover
    transform translateY(-2px)
    box-shadow 0 10px 20px rgba(0,0,0,0.1) !important

  &--dark
    background-color rgba(255,255,255,0.05)
</style>
