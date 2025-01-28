export interface SettingsUserData {
	name: string
	phoneNumber: string
	subscription: {
		isActive: boolean
		type: string
		startDate: string
		endDate: string
	},
	paymentMethod: {
		card: {
			number: string
			cvv: string
			expiration: string
			holder: string
		}
	}
}

export interface SettingsUserDataMethods {
	saveData: (
		name: string,
		phoneNumber: string,
		subscription: SettingsUserData['subscription'],
		paymentMethod: SettingsUserData['paymentMethod']
	) => void
}

export interface SettingsUserDataReturn {
	form: SettingsUserData
	isFormValid: ComputedRef<boolean>
	handleSave: () => void
}
