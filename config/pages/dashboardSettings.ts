import type { Page } from '~/types/config'
export const DashboardSettings = ref<Page>({
	title: 'Settings',
	icon: 'material-symbols:settings-suggest-outline',
	uid: 'dashboard-settings',
	href: '/dashboard/settings',
	tourDesc: 'Customize your dashboard layout and preferences.',
	layout: 'dashboard-tabs',
	parent: 'dashboard',
})
