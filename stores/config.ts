import { defineStore } from 'pinia'
import type { DashboardConfig } from '../types/config'
import type { AuthenticationStructure } from '../types/config'
import { pagesDict as p } from '../config/pages'

export type FederatedAuthProviderOptions = 'google' | 'github'

export const useConfigStore = defineStore(
	'ConfigStore',
	() => {
		const structureRef = ref<{ authentication: AuthenticationStructure }>({
			authentication: {
				custom: true,
				providers: ['google', 'github'],
				tosAndPrivacy: {
					required: true,
					tos: 'https://github.com/kaandesu/',
					privacy: 'https://github.com/kaandesu/',
				},
				mfa: true,
			},
		})

		// TODO: maybe runtime config this
		// the pages are meant to be on the sidebar
		// should be generated
		const sidebar = ref<DashboardConfig>({
			title: 'Kaan Dashboard',
			desc: 'Modular Dashboard',
			logo: 'https://avatar.vercel.sh/0.svg',
			logoFallback: 'K',
			pages: [
				p.Dashboard.value,
				p.Tasks.value,
				p.Chats.value,
				p.Apps.value,
				p.Authentication.value,
				p.Users.value,
				p.Requests.value,
				p.Analysis.value,
				p.ExtraComponents.value,
				p.ErrorPages.value,
				p.Tour.value,
				p.Settings.value,
			],
		})

		const structure = readonly(structureRef)

		return {
			sidebar,
			structure,
		}
	},
	{
		persist: [
			{
				pick: ['dashboard'],
				storage: sessionStorage,
			},
		],
	},
)
