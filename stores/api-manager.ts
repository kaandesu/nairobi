import { defineStore } from 'pinia'
import { string } from 'zod'

interface ApiResponseGeneric<T> {
	data: T | null
	message: string
}

const apiBaseUrl = 'http://localhost:6767'

export type ApiResponse<T> = {
	message: string
	data: T
}

export type UserAccount = {
	email: string
	billing: number
	credits: number
}

export type User = {
	id: number
	email?: string
	billing?: number
	credits?: number
	active?: boolean
	created_at?: string
	updated_at?: string
}

export type Product = {
	id: number
	name: string
	description: string
	client?: string
}

export type Company = {
	id?: number
	name: string
	sector: string
	size: number
	url?: string
	description: string
}

export type Role = {
	id: number
	name: string
	description: string
	responsibilities?: string
	skills?: string
	reportsTo?: string
}

type Callbacks = {
	onSuccess?: (data?: any) => any
	onError?: (error?: any) => any
}

export const useApiStore = defineStore(
	'ApiManager',
	() => {
		const currentCompany = ref<Company>()
		const loading = ref(false)
		const initialized = ref(false)
		const isAuthenticated = computed(() => !!accessToken.value)

		const accessToken = ref<string>('')
		const refreshToken = ref<string>('')

		const roles = ref<Role[]>([])

		const products2 = ref<Product[]>()
		const products = ref<Product[]>([
			{
				id: 1,
				name: 'Weno Handover AI',
				description:
					'AI-powered handover assistant that automates knowledge transfer between teams and systems.',
				client: 'Acme Corp',
			},
			{
				id: 2,
				name: 'Weno CloudSync',
				description:
					'Secure cloud synchronization platform for seamless data sharing across distributed teams.',
				client: 'Globex Inc',
			},
			{
				id: 3,
				name: 'Weno FrontForge',
				description:
					'Frontend component library and framework optimized for enterprise-grade applications.',
				client: 'Initech',
			},
			{
				id: 4,
				name: 'Weno DataVault',
				description:
					'Backend data management solution with automated indexing, analytics, and secure storage.',
				client: 'Umbrella Corp',
			},
			{
				id: 5,
				name: 'Weno FlowOps',
				description:
					'AI-driven workflow automation engine to orchestrate business processes efficiently.',
				client: 'Stark Industries',
			},
			{
				id: 6,
				name: 'Weno EdgeCompute',
				description:
					'Cloud-edge platform to run real-time computations closer to your users with minimal latency.',
				client: 'Wayne Enterprises',
			},
			{
				id: 7,
				name: 'Weno InsightHub',
				description:
					'Unified analytics dashboard providing actionable insights across all Weno products.',
				client: 'Soylent Corp',
			},
		])

		const userAccount = ref<UserAccount>({
			email: '',
			credits: 0,
			billing: 0,
		})

		const signUp = ({
			email,
			password,
			onSuccess,
			onError,
		}: {
			email: string
			password: string
			phone_no: string
		} & Callbacks) => {
			const fetcher = $fetch.create({
				baseURL: apiBaseUrl,
				onResponse({ response }) {
					if (!response.ok) return

					const {
						access_token,
						refresh_token,
						email: respEmail,
					} = response._data.data

					accessToken.value = access_token
					if (refresh_token) refreshToken.value = refresh_token

					const ua: UserAccount = {
						email: respEmail ?? email,
						credits: 0,
						billing: 0,
					}
					userAccount.value = ua

					createToast({
						message: 'Registration successful',
						toastOps: {
							description:
								'Your account has been successfully created.',
						},
						type: 'success',
					})()

					if (onSuccess) onSuccess(response._data)
				},
				onResponseError({ response }) {
					createToast({
						message: 'Registration failed',
						toastOps: {
							description:
								response._data?.message ??
								'An error occurred during registration. Please check your information and try again.',
						},
						type: 'error',
					})()
					if (onError) onError(response._data)
				},
			})

			return fetcher<ApiResponseGeneric<any>>('/auth/signup', {
				method: 'POST',
				body: {
					email,
					password,
				},
			})
		}

		const signIn = ({
			identifier,
			password,
			onSuccess,
			onError,
		}: {
			identifier: string
			password: string
		} & Callbacks) => {
			const fetcher = $fetch.create({
				baseURL: apiBaseUrl,
				onResponse({ response }) {
					if (!response.ok) return

					const { access_token, refresh_token, email, full_name } =
						response._data.data
					accessToken.value = access_token

					let temp: UserAccount = {
						email,
						billing: 0,
						credits: 0,
					}
					userAccount.value = temp

					if (refresh_token) refreshToken.value = refresh_token

					createToast({
						message: 'Login successful',
						toastOps: {
							description: `Welcome, ${full_name}.`,
						},
						type: 'success',
					})()

					if (onSuccess) onSuccess(response._data)
				},
				onResponseError({ response }) {
					createToast({
						message: 'Login failed',
						toastOps: {
							description:
								response._data?.message ??
								'An error occurred while logging in. Please check your information and try again.',
						},
						type: 'error',
					})()
					if (onError) onError(response._data)
				},
			})

			return fetcher<ApiResponseGeneric<any>>('/auth/login', {
				method: 'POST',
				body: { email: identifier, password },
			})
		}

		const refreshAccessToken = ({
			onSuccess,
			onError,
		}: Callbacks = {}): Promise<boolean> => {
			if (!refreshToken.value) {
				if (onError) onError({ message: 'No refresh token available' })
				return Promise.resolve(false)
			}

			return new Promise((resolve) => {
				const fetcher = $fetch.create({
					baseURL: apiBaseUrl,
					onResponse({ response }) {
						if (!response.ok) {
							resolve(false)
							return
						}

						const { access_token, refresh_token, email } =
							response._data.data

						if (access_token) {
							accessToken.value = access_token

							let temp: UserAccount = {
								email,
								billing: 0,
								credits: 0,
							}
							userAccount.value = temp

							if (refresh_token)
								refreshToken.value = refresh_token

							if (onSuccess) onSuccess(response._data)
							resolve(true)
							return
						}

						logout()
						if (onError) onError(response._data)
						resolve(false)
					},
					onResponseError({ response }) {
						createToast({
							message: 'Session Expired',
							toastOps: {
								description:
									response._data?.message ?? 'Unauthorized',
							},
							type: 'error',
						})()
						logout()
						if (onError) onError(response._data)
						resolve(false)
					},
				})

				fetcher<ApiResponseGeneric<any>>('/auth/refresh', {
					method: 'POST',
					body: { refresh_token: refreshToken.value },
				})
			})
		}

		const logout = async () => {
			accessToken.value = ''
			refreshToken.value = ''
			userAccount.value = {
				email: '',
				credits: 0,
				billing: 0,
			}
			await navigateTo('/auth/sign-in')
		}

		const ChangePassword = ({
			current_password,
			new_password,
		}: {
			current_password: string
			new_password: string
		}): Promise<ApiResponseGeneric<any>> => {
			const fetcher = $fetch.create({
				baseURL: apiBaseUrl,
				onResponse({ response }) {
					if (!response.ok) return
					createToast({
						message: 'Your password has been successfully changed!',
						type: 'success',
					})()
				},
				onResponseError({ response }) {
					if (response.status !== 401) {
						createToast({
							message:
								'Error: Your password could not be changed!',
							toastOps: {
								description:
									response._data?.message ??
									'Your password could not be changed!',
							},
							type: 'error',
						})()
					}
				},
			})
			return fetcher<ApiResponseGeneric<any>>('/auth/change-password', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${accessToken?.value ?? ''}`,
				},
				body: {
					current_password,
					new_password,
				},
			})
		}

		const API = async (fn: () => Promise<any>) => {
			try {
				return await fn()
			} catch (e: any) {
				if (e?.statusCode === 401) {
					const refreshed = await refreshAccessToken()
					if (refreshed) {
						return await fn()
					}
					throw e
				}
				throw e
			}
		}

		const CreateSite = ({
			name,
			description,
			url,
			lang,
		}: {
			name: string
			description: string
			url: string
			lang: string
		}) => {
			console.log('asdf', description)
			const fetcher = $fetch.create({
				baseURL: apiBaseUrl,
				onResponse({ response }) {
					if (!response.ok) return

					const { data, message } = response._data
					createToast({
						message,
						type: 'success',
					})()
					console.log('create site', data)
				},
				onResponseError({ response }) {
					if (response.status !== 401) {
						createToast({
							message: 'Error while saving your site! :(',
							toastOps: {
								description: response._data?.message ?? '',
							},
							type: 'error',
						})()
					}
				},
			})
			return fetcher<ApiResponse<any>>('/site/create', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${accessToken?.value ?? ''}`,
				},
				body: {
					name,
					description,
					url,
					lang,
				},
			})
		}

		const sites = ref<any[]>([])

		const GetSiteList = () => {
			const fetcher = $fetch.create({
				baseURL: apiBaseUrl,
				onResponse({ response }) {
					if (!response.ok) return
					const { data } = response._data
					sites.value = data
					console.log('create site', data)
				},
				onResponseError({ response }) {
					if (response.status !== 401) {
						createToast({
							message: 'Could not load your sites :(',
							toastOps: {
								description: response._data?.message ?? '',
							},
							type: 'error',
						})()
					}
				},
			})
			return fetcher<ApiResponse<any[]>>('/site/list', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${accessToken?.value ?? ''}`,
				},
			})
		}

		const currentSiteScans = ref<any[]>([])

		const GetSiteScans = ({ id }: { id: number }) => {
			const fetcher = $fetch.create({
				baseURL: apiBaseUrl,
				onResponse({ response }) {
					if (!response.ok) return
					const { data } = response._data
					currentSiteScans.value = data
					console.log('create site', data)
				},
				onResponseError({ response }) {
					if (response.status !== 401) {
						createToast({
							message: 'Could not load your past results :(',
							toastOps: {
								description: response._data?.message ?? '',
							},
							type: 'error',
						})()
					}
				},
			})
			return fetcher<ApiResponse<any[]>>(`/site/${id}/scans`, {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${accessToken?.value ?? ''}`,
				},
			})
		}

		return {
			loading,
			accessToken,
			refreshToken,
			initialized,
			API,
			isAuthenticated,
			userAccount,
			signIn,
			signUp,
			GetSiteScans,
			refreshAccessToken,
			CreateSite,
			GetSiteList,
			ChangePassword,
			logout,

			currentSiteScans,
			sites,

			currentCompany,
			products,
			roles,
		}
	},
	{
		persist: {
			pick: [
				'roles',
				'products',
				'refreshToken',
				'userAccount',
				'currentSiteScans',
				'sites',
				'currentCompany',
			],
		},
	},
)
