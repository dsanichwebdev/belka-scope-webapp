import type { Ref } from 'vue'

export interface SettingsUserDataData {
	name: Ref<string>
	phoneNumber: Ref<string>
}

export interface SettingsUserDataMethods {
	saveData: (name: string, phoneNumber: string) => void
}
