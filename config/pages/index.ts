/* AUTO-GENERATED FILE - DO NOT EDIT */
import type { Page } from '~/types/config'

import { YourCompany } from './yourCompany'
import { Authentication } from './authentication'
import { ChangePassword } from './changePassword'
import { Dashboard } from './dashboard'
import { DashboardSettings } from './dashboardSettings'
import { ForgotPassword } from './forgotPassword'
import { Settings } from './settings'
import { SignIn } from './signIn'
import { SignUp } from './signUp'

export type PageId =
	| 'your-company'
	| 'authentication'
	| 'change-password'
	| 'dashboard'
	| 'dashboard-settings'
	| 'forgot-password'
	| 'settings'
	| 'sign-in'
	| 'sign-up'

export const pages: Page[] = [
	YourCompany.value,
	Authentication.value,
	ChangePassword.value,
	Dashboard.value,
	DashboardSettings.value,
	ForgotPassword.value,
	Settings.value,
	SignIn.value,
	SignUp.value,
]

export const pagesDict: Record<string, Ref<Page>> = {
	YourCompany,
	Authentication,
	ChangePassword,
	Dashboard,
	DashboardSettings,
	ForgotPassword,
	Settings,
	SignIn,
	SignUp,
}
