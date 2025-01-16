<template lang="pug">
q-header(elevated).bg-header.flex.q-py-sm.q-pl-sm.q-pr-md.row
	LogoComponent.q-mr-md.hover-scaling(:size="'sm'" :direction="'row'" :fontSize="'20px'" :fontWeight="'500'" rounded hideTextOnMobile)
	.col.flex.items-center
		SearchProductsInput(:needCheckAuth="false")
	ProfileButton.q-ml-md.hover-scaling
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LogoComponent from 'src/components/logo/index.vue'
import SearchProductsInput from 'src/components/search-products-input/index.vue'
import ProfileButton from 'src/components/profile-button/index.vue'

export default defineComponent({
	name: 'HeaderComponent',
	components: {
		LogoComponent,
		SearchProductsInput,
		ProfileButton,
	},
	props: {},
	setup() {},
})
</script>

<style scoped lang="stylus">
.hover-scaling
	transition: .2s;
.hover-scaling:hover
	transform: scale(1.03);
	transition: .2s;
</style>
