import type { Page } from '~/types/config'
const taskAction = () => {
	createToast({
		message: 'Clicked Tasks!',
		toastOps: {
			description: 'This is an action!',
		},
		type: 'info',
	})()
}

export const Tasks = ref<Page>({
	title: 'Tasks',
	uid: 'tasks',
	label: '3',
	action: taskAction,
	icon: 'fluent:tasks-app-20-regular',
	tourDesc: 'Manage and track your ongoing tasks and to-dos.',
	layout: 'dashboard-page',
})
