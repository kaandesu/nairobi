<template>
	<main
		class="box-border flex h-full w-full flex-col items-start justify-center py-4"
	>
		<section
			class="flex h-full w-full flex-col items-center justify-start gap-4 overflow-hidden lg:flex-row lg:items-start lg:justify-start"
			v-auto-animate
		>
			<ProductCard
				v-if="currentProduct !== undefined"
				:product="currentProduct"
			/>

			<section class="box-border flex h-full w-full flex-col">
				<div class="relative ml-3 flex w-full items-center gap-x-2">
					<Input
						v-model="search"
						id="search"
						class="box-border w-52 rounded-lg pl-10"
						type="text"
						placeholder="Search..."
					/>
					<span
						class="absolute inset-y-0 start-0 flex items-center justify-center px-2"
					>
						<Search class="size-6 text-muted-foreground" />
					</span>
					<NewRoleDialog />
				</div>
				<div
					class="mt-4 grid w-full grid-cols-1 gap-4 pb-14 sm:grid-cols-2 lg:grid-cols-2"
					v-auto-animate
				>
					<Card
						v-for="role in itemsFiltered"
						@click="handleRoleSelection(role.id)"
						:key="role.name"
						class="blur2 box-border h-auto max-h-32 w-full select-none bg-transparent shadow-liquid-dark transition-all hover:cursor-pointer hover:shadow-liquid-dark-selected"
					>
						<CardHeader>
							<CardTitle class="capitalize">
								{{ role.name }}
							</CardTitle>
							<CardDescription>
								{{
									role.description.length > 60
										? role.description.substring(0, 60) +
											'...'
										: role.description
								}}
							</CardDescription>
						</CardHeader>
					</Card>
				</div>
			</section>

			<!-- asdgasd -->
		</section>

		<DevOnly>
			<Button
				@click="currentCompany = undefined"
				variant="ghost"
				class="absolute right-5 top-12"
			>
				reset
			</Button>
		</DevOnly>
	</main>
</template>

<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
const apiStore = useApiStore()
const search = ref<string>('')
const { currentCompany, roles, products } = storeToRefs(apiStore)

const router = useRouter()
const handleRoleSelection = (id: number) => {
	if (id === undefined) return
	router.push({
		path: '/role',
		query: { id: `${id}`, productId: `${productId.value}` },
	})
}

const itemsFiltered = computed(() =>
	roles.value.filter(
		(e) =>
			e.description?.toLowerCase().includes(search.value.toLowerCase()) ||
			e.name.toLowerCase().includes(search.value.toLowerCase()),
	),
)

// Access the current route
const route = useRoute()

// Get the `id` from query params and convert to a number
const productId = computed(() => {
	const idParam = route.query.id
	// route.query.id can be string | string[] | undefined
	if (Array.isArray(idParam)) {
		return Number(idParam[0])
	}
	return idParam ? Number(idParam) : null
})

const currentProduct = ref<Product>()

onMounted(async () => {
	// TODO: if products are undefined
	// do an api tool to get the products
	setTimeout(async () => {
		currentProduct.value = products.value.find(
			(e) => e.id === productId.value,
		)
		if (currentProduct.value === undefined) {
			await navigateTo('/company')
		}
	}, 250)
})

console.log(productId.value) // This will log 31 if ?id=31

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
