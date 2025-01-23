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
	}),

	getters: {
		getCurrentSubscription(): SettingsUserData['subscription'] {
			return this.subscription
		},
	},

	actions: {
		saveSubscription(type: string) {
			if (this.subscription?.type) {
				this.subscription.type = type
			}
		},
		saveData(profileData: SettingsUserData) {
			this.name = profileData.name
			this.phoneNumber = profileData.phoneNumber
		},
	},
})
