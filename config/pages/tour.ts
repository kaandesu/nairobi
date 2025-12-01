import type { Page } from '~/types/config'
import { tours } from '~/config/tours'
import startTour from '~/utils/startTour'
export const Tour = ref<Page>({
	title: 'How to use?',
	uid: 'tour',
	hideMobile: true,
	action: () => startTour('sidebar', tours.sidebarTourSetup())(),
	icon: 'streamline:computer-desktop-help-device-help-information-display-computer-desktop-question-info',
	layout: 'dashboard-page',
})
