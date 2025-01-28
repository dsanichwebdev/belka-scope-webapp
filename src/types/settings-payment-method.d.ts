import type { Ref } from 'vue'
import type { SettingsUserData } from './settings-user-data'

type Payment = {
	value: number,
	card: {
		number: string,
		expiration: string,
	},
	date: string,
}

export interface SettingsPaymentMethod {
	isDialogOpen: Ref<boolean>
	step: Ref<number>
	profileSettingsStore: Store<'profileSettingsStore', SettingsUserData>
	payments: Payment[]
	currentPaymentMethod: Ref<SettingsUserData['paymentMethod']>
}

export interface SettingsPaymentMethodMethods {
	openModal: () => void
	closeModal: () => void
	goToStep: (newStep: number) => void
	save: (type: string) => void
	formatDate: (dateString: string) => string
	unlinkPaymentMethod: () => void
}
