import type { Page } from '~/types/config'
export const Overview = ref<Page>({
	title: 'Overview',
	uid: 'dashboard-overview',
	href: '/dashboard/overview',
	icon: 'material-symbols:overview-key-outline-rounded',
	tourDesc: 'Get a high-level summary of your key metrics and data.',
	parent: 'dashboard',
})
