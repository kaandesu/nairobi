import type { Page } from '~/types/config'
export const Apps = ref<Page>({
	title: 'Apps',
	uid: 'apps',
	label: '',
	tourDesc: 'Explore and manage your connected applications.',
	href: '/apps',
	icon: 'charm:apps-plus',
	sidebarSeperator: true,
	layout: 'dashboard-page',
})
