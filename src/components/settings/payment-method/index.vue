<template lang="pug">
.profile-subscriptions
  q-card.q-pa-md
    .row.justify-between.items-center
      .text-bold Способ оплаты
      q-btn(
        no-caps
        @click="openModal"
      ) Управлять оплатой
    .row.flex.items-center
      q-icon(name="credit_card" size="md")
      .text-h6.q-ml-md •••• {{currentPaymentMethod.card.number.substring(14)}}

q-dialog(v-model="isDialogOpen" @hide="closeModal")
  q-card.q-pa-md.full-width
    .row.items-center.q-pb-none.q-mb-md
      .text-h6 Управление оплатой
      q-space
      q-btn(icon="close" flat round dense v-close-popup @click="closeModal")

    div(v-if="step === 1")
      .row.q-mb-sm
        .text-bold Мой способ оплаты
      .row.flex.items-center.justify-between.q-mb-sm
        div.row
          q-icon(name="credit_card" size="md")
          .text.q-ml-md.col
            .row •••• {{currentPaymentMethod.card.number.substring(14)}}
            .row {{currentPaymentMethod.card.expiration}}
        q-btn(no-caps @click="unlinkPaymentMethod()") Отвязать
      q-separator.q-my-md
      .row.q-mb-sm.flex.column
        .text-bold.q-mb-sm История операций
        q-scroll-area(style="height: 200px;")
          q-list(bordered separator)
            q-item.q-mb-xs.flex.items-center.justify-between(v-ripple v-for="payment in payments")
              .col
                .row
                  q-icon(name="credit_card" size="sm")
                  .text.q-ml-sm •••• {{payment.card.number.substring(14)}}
                .row
                  .text-grey-7 {{formatDate(payment.date)}}
              .col.flex.justify-end -{{payment.value}}₽
      q-separator.q-my-md
      q-btn(no-caps @click="goToStep(2)") Изменить способ оплаты

    div(v-if="step === 2")
      q-btn(
        icon="arrow_back"
        flat
        no-caps
        @click="goToStep(1)"
      ) Назад
      q-separator.q-mt-md

      .q-pa-md(bordered)
        .text-bold.q-mb-md Введите данные карты
        q-form.q-gutter-md.q-mt-md
          q-input(
            v-model="currentPaymentMethod.card.number"
            label="Номер карты"
            mask="#### #### #### ####"
            hint="16 цифр"
            required
            outlined
            maxlength="19"
            counter
          )
            template(v-slot:prepend)
              q-icon(name="credit_card")

          q-input(
            v-model="currentPaymentMethod.card.cvv"
            label="CVV код"
            mask="###"
            hint="3 цифры с обратной стороны карты"
            required
            outlined
            maxlength="3"
            counter
            type="password"
          )
            template(v-slot:prepend)
              q-icon(name="lock")

          q-input(
            v-model="currentPaymentMethod.card.expiration"
            label="Срок действия (MM/YY)"
            mask="##/##"
            hint="Введите месяц и год"
            required
            outlined
            maxlength="5"
            counter
          )
            template(v-slot:prepend)
              q-icon(name="event")

          q-input(
            v-model="currentPaymentMethod.card.holder"
            label="Имя держателя карты"
            hint="Как на карте (латиницей)"
            required
            outlined
            maxlength="30"
            counter
          )
            template(v-slot:prepend)
              q-icon(name="person")
      q-btn.q-mt-md(no-caps @click="save()") Привязать
</template>
<script lang="ts">
import { formatDate } from 'src/utils/formatDate'
import { defineComponent, ref, onBeforeUnmount } from 'vue'
import { useProfileSettingsStore } from '../../../stores/profile-settings'
import type { SettingsPaymentMethod, SettingsPaymentMethodMethods } from '../../../types/settings-payment-method';

export default defineComponent({
	name: 'PaymentMethod',
	setup(): SettingsPaymentMethod & SettingsPaymentMethodMethods {
		const profileSettingsStore = useProfileSettingsStore()

		const isDialogOpen = ref(false)

		const step = ref(1)

		const currentPaymentMethod = ref({ ...profileSettingsStore.getPaymentMethod })

		const resetPaymentMethodToDefault = () => {
			currentPaymentMethod.value = { ...profileSettingsStore.getPaymentMethod }
		}

		const openModal = () => {
			isDialogOpen.value = true
		}

		const closeModal = () => {
			resetPaymentMethodToDefault()
			step.value = 1
			isDialogOpen.value = false
		}

		const goToStep = (newStep: number) => {
			step.value = newStep
		}

		onBeforeUnmount(() => {
			if (!isDialogOpen.value) {
				resetPaymentMethodToDefault()
				step.value = 1
			}
		})

		const unlinkPaymentMethod = () => {
			const card = {
				number: '',
				expiration: '',
				cvv: '',
				holder: ''
			}
			profileSettingsStore.savePaymentData({card})
			resetPaymentMethodToDefault()
		}

		const save = () => {
			const card = {
				number: currentPaymentMethod.value.card.number,
				expiration: currentPaymentMethod.value.card.expiration,
				cvv: currentPaymentMethod.value.card.cvv,
				holder: currentPaymentMethod.value.card.holder
			}
			profileSettingsStore.savePaymentData({card})
			console.log(`Выбран способ оплаты ${{...card}}`)
		}

		// TODO: moved to mock data
		const payments = [
			{
				value: 159,
				card: {
					number: '4276 0000 0000 1001',
					expiration: '2025-01-01 00:00:00',
				},
				date: '2025-01-01 00:00:00',
			},
			{
				value: 159,
				card: {
					number: '4276 0000 0000 1001',
					expiration: '2025-01-01 00:00:00',
				},
				date: '2025-01-01 00:00:00',
			},
			{
				value: 159,
				card: {
					number: '4276 0000 0000 1001',
					expiration: '2025-01-01 00:00:00',
				},
				date: '2025-01-01 00:00:00',
			},
			{
				value: 159,
				card: {
					number: '4276 0000 0000 1001',
					expiration: '2025-01-01 00:00:00',
				},
				date: '2025-01-01 00:00:00',
			},
			{
				value: 159,
				card: {
					number: '4276 0000 0000 1001',
					expiration: '2025-01-01 00:00:00',
				},
				date: '2025-01-01 00:00:00',
			},
		]

		return {
			isDialogOpen,
			openModal,
			closeModal,
			step,
			goToStep,
			profileSettingsStore,
			payments,
			formatDate,
			currentPaymentMethod,
			save,
			unlinkPaymentMethod
		}
	},
})
</script>

<style lang="stylus" scoped></style>
