<template>
	<main
		class="box-border flex h-full w-full flex-col items-start justify-center py-4"
	>
		<section
			class="flex h-full w-full flex-col items-center justify-start gap-4 overflow-hidden lg:flex-row lg:items-start lg:justify-start"
			v-auto-animate
		>
			<RoleCard
				v-if="
					currentRole !== undefined &&
					viewport.isGreaterOrEquals('md')
				"
				:role="currentRole"
			/>

			<section class="box-border flex h-full w-full flex-col">
				<ChatView
					:role="
						!viewport.isGreaterOrEquals('md')
							? currentRole
							: undefined
					"
				/>
			</section>
		</section>
	</main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const apiStore = useApiStore()
const { currentCompany, roles, products } = storeToRefs(apiStore)

const viewport = useViewport()

const router = useRouter()

// Access the current route
const route = useRoute()

// Get the `id` from query params and convert to a number
const roleId = computed(() => {
	const idParam = route.query.id
	// route.query.id can be string | string[] | undefined
	if (Array.isArray(idParam)) {
		return Number(idParam[0])
	}
	return idParam ? Number(idParam) : null
})

const currentRole = ref<Product>()

onMounted(async () => {
	setTimeout(async () => {
		if (roleId.value === undefined || roleId.value === null) {
			await navigateTo('/company')
		}
		// TODO: get the current role from API
		// if the id is undefined just sent back to company
		currentRole.value = roles.value.find((e) => e.id === roleId.value)
	}, 250)
})

console.log(roleId.value) // This will log 31 if ?id=31

definePageMeta({
	layout: 'dashboard-page',
})
</script>
<style scoped>
.scroll-area {
	scrollbar-color: lightgray #3a3a3a; /* thumb (red) + track (light gray) */
}

/* Chrome, Edge, Safari */
.scroll-area::-webkit-scrollbar {
	width: 12px;
}

.scroll-area::-webkit-scrollbar-track {
	background: #f0f0f0; /* track color */
	border-radius: 4px;
}

.scroll-area::-webkit-scrollbar-thumb {
	background-color: gray; /* 🔴 red bar */
	border-radius: 4px;
}

.scroll-area::-webkit-scrollbar-thumb:hover {
	background-color: gray; /* darker red on hover */
}
</style>
