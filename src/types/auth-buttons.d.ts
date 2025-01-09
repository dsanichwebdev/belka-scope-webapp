import { type AuthService } from './auth'

export type HandleLoginType = (service: AuthService) => void

export interface AuthButtonsProps {
	handleLogin: HandleLoginType
	expanded?: boolean
}

export interface ServiceType {
	name: string
	icon: string
	id: string
}
