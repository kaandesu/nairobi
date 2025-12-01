import type { Page } from '~/types/config'
export const Customers = ref<Page>({
	title: 'Customers',
	uid: 'dashboard-customers',
	href: '/dashboard/customers',
	icon: 'hugeicons:customer-support',
	tourDesc: 'Manage and interact with your customer profiles.',
	layout: 'dashboard-tabs',
	parent: 'dashboard',
})
