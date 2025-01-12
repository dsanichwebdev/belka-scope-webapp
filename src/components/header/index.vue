<template lang="pug">
q-header(elevated).bg-header.flex.q-pa-sm
	LogoComponent(:size="'sm'" :direction="'row'" rounded)
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoComponent from 'src/components/logo/index.vue'

export default defineComponent({
	name: 'HeaderComponent',
	components: {
		LogoComponent,
	},
	props: {},
	setup() {},
})
</script>

<style scoped lang="stylus"></style>
