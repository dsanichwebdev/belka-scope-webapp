<template lang="pug">
.settings-user-data.full-width
  .heading.justify-start.items-center.q-mb-md
    .text-h6 Привет! 👋
    .text-subtitle2.text-grey-7 Давайте познакомимся!
  .row.q-gutter-md
    .col
      .q-mb-md
        label.text-subtitle2(for="name") Имя
        q-input(
          id="name"
          v-model="form.name"
          rounded-border
          full-width
          color="black"
          standout
          dense
          :style="'max-width: 480px;'"
        )
    .col
      .q-mb-md
        label.text-subtitle2(for="phoneNumber") Телефон
        q-input(
          id="phoneNumber"
          v-model="form.phoneNumber"
          rounded-border
          full-width
          color="black"
          standout
          dense
          v-mask="'(\\+7) ###-###-##-##'"
          :style="'max-width: 480px;'"
        )
  .row.q-gutter-md
    .col.justify-end.flex
      q-btn(
        label="Сохранить"
        color="primary"
        :disabled="!isFormValid"
        @click="handleSave"
        no-caps
      )
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import { mask } from 'vue-the-mask'
import type { Directive } from 'vue'
import { useProfileSettingsStore } from '../../../stores/profile-settings'
import type { SettingsUserDataReturn, SettingsUserData } from '../../../types/settings-user-data'

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

	setup(): SettingsUserDataReturn {
		const profileSettingsStore = useProfileSettingsStore()

		const form = reactive<SettingsUserData>({
			name: '',
			phoneNumber: '',
		})

		const isFormValid = computed<boolean>(() => {
			return form.name.trim() !== '' && form.phoneNumber.trim() !== ''
		})

		const handleSave = (): void => {
			profileSettingsStore.saveData({ name: form.name, phoneNumber: form.phoneNumber })
			console.log(`Данные сохранены: ${form.name} - ${form.phoneNumber}`)
		}

		return {
			form,
			isFormValid,
			handleSave,
		}
	},
})
</script>

<style scoped></style>
