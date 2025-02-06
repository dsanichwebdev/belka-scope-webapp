<template lang="pug">
q-card(flat).metric-card.full-height.full-width
  q-card-section
    .row.items-center.no-wrap
      q-icon(:name="icon" :color="color" size="md").q-mr-sm
      .column
        .text-caption.text-grey-7 {{ title }}
        .text-h6.text-weight-bold {{ value }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MetricCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    icon: {
      type: String,
      default: 'info'
    },
    color: {
      type: String,
      default: 'primary'
    }
  }
})
</script>

<style lang="stylus" scoped>
.metric-card
  background rgba(0,0,0,0.03) !important
  border-radius 12px
  transition all 0.3s ease

  &:hover
    background rgba(0,0,0,0.05) !important

.body--dark .metric-card
  background rgba(255,255,255,0.05) !important
  &:hover
    background rgba(255,255,255,0.08) !important
</style>
