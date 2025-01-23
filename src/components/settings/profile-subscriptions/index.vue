<template lang="pug">
.profile-subscriptions
  q-card.q-pa-md
    .row.justify-between.items-center
      .text-positive.text-bold {{subscriptionStatus()}}
      q-btn(
        no-caps
        @click="openModal"
      ) Управлять подпиской
    q-separator.q-my-md
    .text-h5.text-bold {{subscriptions.find((subscription) => subscription.type === profileSettingsStore.getCurrentSubscription.type).label}}
    .text-grey-8.q-mt-md {{subscriptions.find((subscription) => subscription.type === profileSettingsStore.getCurrentSubscription.type).price}}₽ спишется {{formatDate(profileSettingsStore.getCurrentSubscription.endDate)}}

q-dialog(v-model="isDialogOpen" @hide="closeModal")
  q-card.q-pa-md.full-width
    .row.items-center.q-pb-none.q-mb-md
      .text-h6 Управление подпиской
      q-space
      q-btn(icon="close" flat round dense v-close-popup @click="closeModal")

    div(v-if="step === 1")
      .row.q-mb-sm
        .col.text-bold Статус:
        .col {{subscriptionStatus()}}
      .row.q-mb-sm
        .col.text-bold Тип:
        .col {{subscriptions.find((subscription) => subscription.type === profileSettingsStore.getCurrentSubscription.type).label}}
      .row.q-mb-sm
        .col.text-bold Дата активации:
        .col {{formatDate(profileSettingsStore.getCurrentSubscription.startDate)}}
      .row
        .col.text-bold Сумма платежа:
        .col {{subscriptions.find((subscription) => subscription.type === profileSettingsStore.getCurrentSubscription.type).price}}₽ в месяц
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
            :class="{ 'selected-subscription': currentSubscription.type === subscription.type }"
            @click="chooseSubscription(subscription.type)"
          )
            .text-h6 {{ subscription.label }}
            .text-grey-7 {{ subscription.price }}₽
      q-separator.q-my-md
      q-btn(no-caps @click="save(currentSubscription.type)" :disabled="currentSubscription.type === profileSettingsStore.getCurrentSubscription.type") Выбрать тариф
</template>
<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from 'vue'
import { useProfileSettingsStore } from '../../../stores/profile-settings'
import { formatDate } from '../../../utils/formatDate'
import type {
	SettingsProfileSubscriptions,
	SettingsProfileSubscriptionsMethods,
	Subscription,
} from '../../../types/settings-profile-subscriptions'

export default defineComponent({
	name: 'ProfileSubscriptions',
	setup(): SettingsProfileSubscriptions & SettingsProfileSubscriptionsMethods {
		const profileSettingsStore = useProfileSettingsStore()

		const isDialogOpen = ref(false)

		const step = ref(1)

		const currentSubscription = ref({ ...profileSettingsStore.getCurrentSubscription })

		const subscriptions = ref([
			{
				label: 'Бесплатная',
				type: 'free',
				price: 0,
			},
			{
				label: 'Базовая',
				type: 'base',
				price: 499,
			},
			{
				label: 'Продвинутая',
				type: 'advanced',
				price: 1999,
			},
		])

		const resetSubscriptionToDefault = () => {
			currentSubscription.value = { ...profileSettingsStore.getCurrentSubscription }
		}

		const closeModal = () => {
			resetSubscriptionToDefault()
			step.value = 1
			isDialogOpen.value = false
		}

		const goToStep = (newStep: number) => {
			step.value = newStep
		}

		const chooseSubscription = (type: Subscription['type']) => {
			currentSubscription.value.type = type
			console.log(currentSubscription.value)
		}

		const save = (type: string) => {
			profileSettingsStore.saveSubscription(type)
			console.log(`Выбран тариф ${type}`)
		}

		onBeforeUnmount(() => {
			if (!isDialogOpen.value) {
				resetSubscriptionToDefault()
				step.value = 1
			}
		})

		const openModal = () => {
			isDialogOpen.value = true
		}

		const subscriptionStatus = (): string => {
			return currentSubscription.value.isActive ? 'Активна' : 'Неактивна'
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
			subscriptionStatus,
			profileSettingsStore,
			formatDate,
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
