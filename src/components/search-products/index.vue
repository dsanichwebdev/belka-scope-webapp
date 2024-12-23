<template lang="pug">
.search-products.full-width
  PhotoInput
  q-input.q-mt-md.full-width(v-model="searchMessage" type="textarea" filled placeholder="Введите описание товара")
  q-btn.full-width.bg-warning.q-mt-md.q-mb-lg(@click="handleSearch" icon="search" no-caps) Найти
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PhotoInput from 'src/components/photo-input/index.vue'

export default defineComponent({
  name: 'SearchProducts',

  components: {
    PhotoInput,
  },

  data() {
    return {
      searchMessage: '',
    }
  },

  methods: {
    handleSearch(): void {},
  },
})
</script>

<style scoped></style>
