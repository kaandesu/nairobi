import type { Page } from '~/types/config'
export const InternalServerError = ref<Page>({
	title: 'Internal Server Error',
	uid: '500',
	label: '',
	href: '/500',
	icon: 'mdi:server-network-off',
	layout: 'dashboard-page',
})
