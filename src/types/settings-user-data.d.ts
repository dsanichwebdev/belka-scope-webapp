export interface SettingsUserData {
	name: string
	phoneNumber: string
}

export interface SettingsUserDataMethods {
	saveData: (name: string, phoneNumber: string) => void
}

export interface SettingsUserDataReturn {
	form: SettingsUserData
	isFormValid: ComputedRef<boolean>
	handleSave: () => void
}
