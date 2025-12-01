/* AUTO-GENERATED FILE - DO NOT EDIT */
import type { Page } from '~/types/config'

import { Analysis } from './analysis'
import { Apps } from './apps'
import { Authentication } from './authentication'
import { Cargos } from './cargos'
import { ChangePassword } from './changePassword'
import { Chats } from './chats'
import { Customers } from './customers'
import { Dashboard } from './dashboard'
import { DashboardSettings } from './dashboardSettings'
import { ErrorPages } from './errorPages'
import { ExtraComponents } from './extraComponents'
import { ForgotPassword } from './forgotPassword'
import { InternalServerError } from './internalServerError'
import { MaintenanceError } from './maintenanceError'
import { NotFound } from './notFound'
import { Overview } from './overview'
import { Products } from './products'
import { Requests } from './requests'
import { Settings } from './settings'
import { SignIn } from './signIn'
import { SignUp } from './signUp'
import { Tasks } from './tasks'
import { Tour } from './tour'
import { Trucks } from './trucks'
import { Users } from './users'

export type PageId =
	| 'analysis'
	| 'apps'
	| 'authentication'
	| 'cargos'
	| 'change-password'
	| 'chats'
	| 'customers'
	| 'dashboard'
	| 'dashboard-settings'
	| 'error-pages'
	| 'extra-components'
	| 'forgot-password'
	| 'internal-server-error'
	| 'maintenance-error'
	| 'not-found'
	| 'overview'
	| 'products'
	| 'requests'
	| 'settings'
	| 'sign-in'
	| 'sign-up'
	| 'tasks'
	| 'tour'
	| 'trucks'
	| 'users'

export const pages: Page[] = [
	Analysis.value,
	Apps.value,
	Authentication.value,
	Cargos.value,
	ChangePassword.value,
	Chats.value,
	Customers.value,
	Dashboard.value,
	DashboardSettings.value,
	ErrorPages.value,
	ExtraComponents.value,
	ForgotPassword.value,
	InternalServerError.value,
	MaintenanceError.value,
	NotFound.value,
	Overview.value,
	Products.value,
	Requests.value,
	Settings.value,
	SignIn.value,
	SignUp.value,
	Tasks.value,
	Tour.value,
	Trucks.value,
	Users.value,
]

export const pagesDict: Record<string, Ref<Page>> = {
	Analysis,
	Apps,
	Authentication,
	Cargos,
	ChangePassword,
	Chats,
	Customers,
	Dashboard,
	DashboardSettings,
	ErrorPages,
	ExtraComponents,
	ForgotPassword,
	InternalServerError,
	MaintenanceError,
	NotFound,
	Overview,
	Products,
	Requests,
	Settings,
	SignIn,
	SignUp,
	Tasks,
	Tour,
	Trucks,
	Users,
}
