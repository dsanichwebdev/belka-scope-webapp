<template lang="pug">
.home-page.full-width.window-height.flex.justify-center.items-center
  .flex.column.items-center.full-width
    q-img.rounded-borders(:src="'assets/logo.png'" width="140px" height="140px")
    .text-h4.q-mt-sm BelkaScope
    q-input.q-mt-xl.rounded-border.full-width(standout dense v-model="search" :style="'max-width: 360px;'")
      template(v-slot:append)
        q-btn(flat dense icon="search")
        q-btn.q-ml-sm(flat dense icon="center_focus_weak")

</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface HomePageData {
  search: string;
}

export default defineComponent({
  name: 'HomePage',

  props: {},

  components: {},
  
  data():HomePageData {
    return {
      search: ''
    }
  },

  computed: {},

  methods: {},

  mounted() {},
})
</script>

<style scoped lang="stylus">
</style>
