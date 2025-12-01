import { NotFound } from './notFound'
import { InternalServerError } from './internalServerError'
import { MaintenanceError } from './maintenanceError'
import type { Page } from '~/types/config'
export const ErrorPages = ref<Page>({
	title: 'Error Pages',
	label: '',
	uid: 'error-pages',
	icon: 'clarity:error-standard-line',
	isCollapsed: true,
	tourDesc: 'View and manage various error page templates.',
	sub: [NotFound.value, InternalServerError.value, MaintenanceError.value],
	sidebarSeperator: true,
	layout: 'dashboard-page',
})
