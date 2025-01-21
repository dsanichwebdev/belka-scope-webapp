import { defineStore } from 'pinia'
import type { SettingsUserData } from 'src/types/settings-user-data'

export const useProfileSettingsStore = defineStore('profileSettingsStore', {
	state: (): SettingsUserData => ({
		name: '',
		phoneNumber: '',
	}),

	actions: {
		saveData(profileData: SettingsUserData) {
			this.name = profileData.name
			this.phoneNumber = profileData.phoneNumber
		},
	},
})
