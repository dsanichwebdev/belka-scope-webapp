import type { Ref } from 'vue'
import type { SettingsUserData } from './settings-user-data'

export type Subscription = {
	label: string
	type: string
	price: number
}

export interface SettingsProfileSubscriptions {
	isDialogOpen: Ref<boolean>
	step: Ref<number>
	subscriptions: Ref<Subscription[]>
	currentSubscription: Ref<SettingsUserData['subscription']>
	profileSettingsStore: Store<'profileSettingsStore', SettingsUserData>
}

export interface SettingsProfileSubscriptionsMethods {
	openModal: () => void
	closeModal: () => void
	goToStep: (newStep: number) => void
	chooseSubscription: (type: Subscription['type']) => void
	save: (type: string) => void
	subscriptionStatus: () => string
	formatDate: (dateString: string) => string
}
