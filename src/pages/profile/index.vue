<template lang="pug">
.profile-page.q-px-md.q-pt-lg.q-pb-md.flex.column
	.text-h4.text-semibold.q-mb-md Личный кабинет
	.q-gutter-md(:class="{'row': Screen.gt.sm}")
		.col
			ProfileSubsriptions
		.col
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Screen } from 'quasar'
import ProfileSubsriptions from 'src/components/settings/profile-subscriptions/index.vue'

export default defineComponent({
	name: 'ProfilePage',
	components: {
		ProfileSubsriptions,
	},
	setup() {
		return {
			Screen,
		}
	},
})
</script>

<style scoped lang="stylus"></style>
