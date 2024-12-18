<template lang="pug">
.home-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    q-img.rounded-borders(:src="'assets/logo.png'" width="140px" height="140px")
    .text-h4.q-mt-sm BelkaScope
    AuthSearchInput

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AuthSearchInput from 'src/components/auth-search-input/index.vue'

interface HomePageData {
  search: string
}

export default defineComponent({
  name: 'HomePage',

  props: {},

  components: {
    AuthSearchInput,
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
