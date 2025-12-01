import type { Page } from '~/types/config'
export const Products = ref<Page>({
	title: 'Products',
	icon: 'eos-icons:products-outlined',
	uid: 'dashboard-products',
	href: '/dashboard/products',
	layout: 'dashboard-tabs',
	parent: 'dashboard',
})
