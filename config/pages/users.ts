import type { Page } from '~/types/config'
export const Users = ref<Page>({
	title: 'Users',
	uid: 'users',
	label: '',
	href: '/users',
	icon: 'ci:users',
	isCollapsed: true,
	tourDesc: 'Manage user accounts and their permissions.',
	sidebarSeperator: true,
	layout: 'dashboard-page',
})
