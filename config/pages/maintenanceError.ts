import type { Page } from '~/types/config'
export const MaintenanceError = ref<Page>({
	title: 'Maintenance Error',
	uid: 'maintenance-error',
	label: '',
	href: '/503',
	icon: 'lucide:construction',
	layout: 'dashboard-page',
})
