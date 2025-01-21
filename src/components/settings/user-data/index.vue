<template lang="pug">
.settings-user-data.full-width
  .heading.justify-start.items-center.q-mb-md
    .text-h6 Привет! 👋
    .text-subtitle2.text-grey-7 Давайте познакомимся!
  .row.q-gutter-md
    .col
      .q-mb-md
        label.text-subtitle2 Имя
        q-input(
          rounded-border
          full-width
          color="black"
          standout
          dense
          v-model:modelValue="name"
          :style="'max-width: 480px;'"
        )
    .col
      .q-mb-md
        label.text-subtitle2 Телефон
        q-input(
          rounded-border
          full-width
          color="black"
          standout
          dense
          v-model:modelValue="phoneNumber"
          v-mask="'(+7) ###-###-##-##'"
          :style="'max-width: 480px;'"
        )
  .row.q-gutter-md
    .col.justify-end.flex
      q-btn(
        label="Сохранить"
        color="primary"
        :disabled="!name || !phoneNumber"
        @click="saveData(name, phoneNumber)"
				no-caps
      )
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { mask } from 'vue-the-mask'
import type { SettingsUserDataData, SettingsUserDataMethods } from 'src/types/settings-user-data'
import type { Directive } from 'vue'

export default defineComponent({
	name: 'SettingsUserData',

	directives: {
		mask: mask as Directive,
	},

	props: {
		close: {
			type: Function,
			required: true,
		},
	},

	setup(): SettingsUserDataData & SettingsUserDataMethods {
		const name = ref<string>('')
		const phoneNumber = ref<string>('')

		const saveData = (name: string, phoneNumber: string): void => {
			console.log(`Данные сохранены: ${name} - ${phoneNumber}`)
		}

		return {
			name,
			phoneNumber,
			saveData,
		}
	},
})
</script>

<style scoped></style>
