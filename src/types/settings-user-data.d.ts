export interface SettingsUserData {
	name: string
	phoneNumber: string
	subscription: {
		isActive: boolean
		type: string
		startDate: string
		endDate: string
	}
}

export interface SettingsUserDataMethods {
	saveData: (
		name: string,
		phoneNumber: string,
		subscription: SettingsUserData['subscription'],
	) => void
}

export interface SettingsUserDataReturn {
	form: SettingsUserData
	isFormValid: ComputedRef<boolean>
	handleSave: () => void
}
