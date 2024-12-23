<template lang="pug">
.home-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    q-img.rounded-borders(:src="'assets/logo.png'" :width="$q.screen.gt.md ? '140px' : '100px'")
    .text-h4.q-mt-sm BelkaScope
    AuthSearchInput(v-if="$q.screen.gt.sm")
    SearchProducts.q-mt-md(v-if="!$q.screen.gt.sm")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthSearchInput from 'src/components/auth-search-input/index.vue'
import SearchProducts from 'src/components/search-products/index.vue'

interface HomePageData {
  search: string
}

export default defineComponent({
  name: 'HomePage',

  props: {},

  components: {
    AuthSearchInput,
    SearchProducts,
  },

  data(): HomePageData {
    return {
      search: '',
    }
  },

  computed: {},

  methods: {},

  mounted() {},
})
</script>

<style scoped lang="stylus"></style>
