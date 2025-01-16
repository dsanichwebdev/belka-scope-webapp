export interface AuthModalProps {
	isVisible: boolean
	login: (service: string) => void
	close: () => void
}

export interface AuthModalData {
	isDialogVisible: boolean
	showProfileDataStep: boolean
}
