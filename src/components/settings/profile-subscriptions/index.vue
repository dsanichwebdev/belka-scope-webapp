<template lang="pug">
.profile-subscriptions
  q-card.q-pa-md
    .row.justify-between.items-center
      .text-positive.text-bold Активна
      q-btn(
        no-caps
        @click="openModal"
      ) Управлять подпиской
    q-separator.q-my-md
    .text-h5.text-bold Базовый
    .text-grey-8.q-mt-md 499₽ спишется 1 октября 2025 года

q-dialog(v-model="isDialogOpen")
  q-card.q-pa-md.full-width
    .row.items-center.q-pb-none.q-mb-md
      .text-h6 Управление подпиской
      q-space
      q-btn(icon="close" flat round dense v-close-popup @click="closeModal")

    div(v-if="step === 1")
      .row.q-mb-sm
        .col.text-bold Статус:
        .col Активна
      .row.q-mb-sm
        .col.text-bold Тип:
        .col Базовый
      .row.q-mb-sm
        .col.text-bold Дата активации:
        .col 1 января 2025 года
      .row
        .col.text-bold Сумма платежа:
        .col 499₽ в месяц
      q-separator.q-my-md
      q-btn(no-caps @click="goToStep(2)") Сменить тариф

    div(v-if="step === 2")
      q-btn(
        icon="arrow_back"
        flat
        no-caps
        @click="goToStep(1)"
      ) Назад
      q-separator.q-my-md
      .row.q-gutter-md.no-wrap
        .col(v-for="(subscription, index) in subscriptions")
          q-card.subscription-card.flat.q-pa-sm.full-width(
            :key="index"
            :class="{ 'selected-subscription': currentSubscription === subscription.name }"
            @click="chooseSubscription(subscription.name)"
          )
            .text-h6 {{ subscription.label }}
            .text-grey-7 {{ subscription.price }}₽
      q-separator.q-my-md
      q-btn(no-caps @click="save()") Выбрать тариф
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import type {
	SettingsProfileSubscriptions,
	SettingsProfileSubscriptionsMethods,
	Subscription,
} from '../../../types/settings-profile-subscriptions'

export default defineComponent({
	name: 'ProfileSubscriptions',
	setup(): SettingsProfileSubscriptions & SettingsProfileSubscriptionsMethods {
		const isDialogOpen = ref(false)
		const step = ref(1)
		const currentSubscription = ref('base')
		const subscriptions = ref([
			{
				label: 'Бесплатная',
				name: 'free',
				price: 0,
			},
			{
				label: 'Базовая',
				name: 'base',
				price: 499,
			},
			{
				label: 'Продвинутая',
				name: 'advanced',
				price: 1999,
			},
		])

		const openModal = () => {
			isDialogOpen.value = true
		}

		const closeModal = () => {
			isDialogOpen.value = false
		}

		const goToStep = (newStep: number) => {
			step.value = newStep
		}

		const chooseSubscription = (name: Subscription['name']) => {
			currentSubscription.value = name
		}

		const save = () => {
			console.log(`Выбран тариф ${currentSubscription.value}`)
		}

		return {
			isDialogOpen,
			openModal,
			closeModal,
			step,
			goToStep,
			subscriptions,
			currentSubscription,
			chooseSubscription,
			save,
		}
	},
})
</script>

<style lang="stylus" scoped>
.subscription-card {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;
}

.subscription-card:hover {
  transform: scale(1.02);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
}

.subscription-card.selected-subscription {
  border-color: #21ba45; /* Зеленый цвет для выделения */
  box-shadow: 0px 4px 16px rgba(33, 186, 69, 0.3);
}
</style>
