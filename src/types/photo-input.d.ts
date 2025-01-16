import type { Ref } from 'vue'

export interface PhotoInputData {
	photoUrl: Ref<string>
	showFileDialog: Ref<boolean>
}

export interface PhotoInputMethods {
	openPhotoOptions: () => Promise<void>
	openCamera: () => Promise<void>
	openFilePicker: () => void
	handleFileUpload: () => void
	handleDeletePhoto: () => void
}
