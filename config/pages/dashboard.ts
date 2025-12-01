import { Overview } from './overview'
import { Customers } from './customers'
import { Products } from './products'
import { DashboardSettings } from './dashboardSettings'
import type { Page } from '~/types/config'
export const Dashboard = ref<Page>({
	title: 'Dashboard',
	label: '',
	href: '/dashboard',
	uid: 'dashboard',
	icon: 'material-symbols:dashboard-outline-rounded',
	isCollapsed: true,
	tourDesc: 'Access your main overview and key metrics.',
	desc: 'Access your main overview and key metrics.',
	tabs: [
		Overview.value,
		Customers.value,
		Products.value,
		DashboardSettings.value,
	],
	layout: 'dashboard-page',
	template: 'dashboard-tabs',
})
