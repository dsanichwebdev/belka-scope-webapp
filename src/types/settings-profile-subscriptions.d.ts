import type { Ref } from 'vue'

export type Subscription = {
	label: string
	name: string
	price: number
}

export interface SettingsProfileSubscriptions {
	isDialogOpen: Ref<boolean>
	step: Ref<number>
	subscriptions: Ref<Subscription[]>
	currentSubscription: Ref<string>
}

export interface SettingsProfileSubscriptionsMethods {
	openModal: () => void
	closeModal: () => void
	goToStep: (newStep: number) => void
	chooseSubscription: (name: Subscription['name']) => void
	save: () => void
}
