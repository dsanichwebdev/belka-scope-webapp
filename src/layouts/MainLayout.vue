<template lang="pug">
  q-layout.flex.items-center.column(view="lHh Lpr lFf")
    q-page-container.q-pa-lg.full-width(:style="'max-width: 1080px;'")
      router-view
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
