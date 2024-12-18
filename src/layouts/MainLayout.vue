<template lang="pug">
  q-layout.flex.items-center.column(view="lHh Lpr lFf")
    q-page-container.q-pa-md(:style="'max-width: 1080px;'")
      router-view
      div Prod version
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {},

  data() {
    return {}
  },

  methods: {},
})
</script>
