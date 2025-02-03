import { defineStore } from 'pinia'
import type { SettingsUserData } from 'src/types/settings-user-data'

export const useProfileSettingsStore = defineStore('profileSettingsStore', {
	state: (): SettingsUserData => ({
		name: '',
		phoneNumber: '',
		subscription: {
			isActive: true,
			type: 'base',
			startDate: '2025-01-01 00:00:00',
			endDate: '2025-09-01 00:00:00',
		},
		paymentMethod: {
			card: {
				number: '4276 0000 0000 1001',
				cvv: '000',
				expiration: '03/25',
				holder: 'HOLDER HOLDER'
			}
		}
	}),

	getters: {
		getCurrentSubscription(): SettingsUserData['subscription'] {
			return this.subscription
		},
		getPaymentMethod(): SettingsUserData['paymentMethod'] {
			return this.paymentMethod
		}
	},

	actions: {
		saveSubscription(type: string) {
			if (this.subscription?.type) {
				this.subscription.type = type
			}
		},
		savePaymentData(data: SettingsUserData['paymentMethod']) {
			this.paymentMethod = data
		},
		saveData(profileData: SettingsUserData) {
			this.name = profileData.name
			this.phoneNumber = profileData.phoneNumber
		},
	},
})
