<template lang="pug">
div(:class="['logo-component', directionClass]")
  q-img.logo-image(:src="src" :width="computedWidth" :style="{ borderRadius: rounded ? '8px' : '0px' }")
  div.text-theme(:class="textSizeClass") {{ text }}
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue'
import { QImg, Screen } from 'quasar'

export default defineComponent({
	name: 'LogoComponent',

	props: {
		src: {
			type: String,
			default: 'assets/logo.png',
		},
		text: {
			type: String,
			default: 'BelkaScope',
		},
		size: {
			type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'>,
			default: 'md',
		},
		direction: {
			type: String as PropType<'row' | 'column'>,
			default: 'column',
		},
		rounded: {
			type: Boolean,
			default: false,
		},
	},

	setup(props) {
		const directionClass = computed(() => (props.direction === 'row' ? 'flex-row' : 'flex-column'))

		const computedWidth = computed(() => {
			const isLargeScreen = Screen.gt.md
			const sizeMap = {
				xs: isLargeScreen ? '32px' : '24px',
				sm: isLargeScreen ? '48px' : '36px',
				md: isLargeScreen ? '64px' : '48px',
				lg: isLargeScreen ? '96px' : '72px',
				xl: isLargeScreen ? '128px' : '96px',
				'2xl': isLargeScreen ? '160px' : '128px',
				'3xl': isLargeScreen ? '192px' : '160px',
			}
			return sizeMap[props.size]
		})

		const textSizeClass = computed(() => {
			const isLargeScreen = Screen.gt.md
			const textSizeMap = {
				xs: isLargeScreen ? 'text-body2' : 'text-body2',
				sm: isLargeScreen ? 'text-body1' : 'text-body2',
				md: isLargeScreen ? 'text-h6' : 'text-body1',
				lg: isLargeScreen ? 'text-h5' : 'text-h6',
				xl: isLargeScreen ? 'text-h4' : 'text-h5',
				'2xl': isLargeScreen ? 'text-h3' : 'text-h4',
				'3xl': isLargeScreen ? 'text-h2' : 'text-h3',
			}

			return textSizeMap[props.size]
		})

		return {
			directionClass,
			computedWidth,
			textSizeClass,
		}
	},

	components: {
		QImg,
	},
})
</script>

<style scoped>
.logo-component {
	display: flex;
	align-items: center;
	justify-content: center;
}

.flex-row {
	flex-direction: row;
}

.flex-column {
	flex-direction: column;
}

.logo-image {
	margin: 8px;
}
</style>
