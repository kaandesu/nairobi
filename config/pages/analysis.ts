import type { Page } from '~/types/config'
export const Analysis = ref<Page>({
	title: 'Analysis',
	uid: 'analysis',
	label: '',
	href: '/analysis',
	tourDesc: 'Dive into detailed analytics and reports.',
	icon: 'carbon:text-link-analysis',
	isCollapsed: true,
	layout: 'dashboard-page',
})
