import type { Page } from '~/types/config'
import { Trucks } from './trucks'
import { Cargos } from './cargos'
export const Requests = ref<Page>({
	title: 'Requests',
	label: '10',
	uid: 'request',
	icon: 'carbon:pull-request',
	isCollapsed: true,
	tourDesc: 'Track and manage incoming and outgoing requests.',
	sub: [Trucks.value, Cargos.value],
	layout: 'dashboard-page',
})
