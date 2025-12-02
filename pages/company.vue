<template>
	<main
		class="box-border flex h-full w-full flex-col items-start justify-center py-4"
		v-auto-animate
	>
		<CompanyForm v-if="currentCompany === undefined" />

		<section
			v-if="currentCompany !== undefined"
			class="flex h-full w-full flex-col items-center justify-start gap-4 overflow-hidden lg:flex-row lg:items-start lg:justify-start"
		>
			<CompanyCard :currentCompany="currentCompany" />

			<section class="box-border flex h-full w-full flex-col">
				<div class="relative flex w-full items-center gap-x-2">
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
					<NewProductDialog />
				</div>

				<div
					class="mt-4 grid w-full grid-cols-1 gap-4 pb-14 sm:grid-cols-2 lg:grid-cols-2"
					v-auto-animate
				>
					<Card
						v-for="product in itemsFiltered"
						@click="handleProductSelection(product.id)"
						:key="product.name"
						class="blur2 box-border h-auto max-h-32 w-full bg-transparent shadow-liquid-dark transition-all hover:cursor-pointer hover:shadow-liquid-dark-selected"
					>
						<CardHeader>
							<CardTitle class="capitalize">
								{{ product.name }}
							</CardTitle>
							<CardDescription>
								{{
									product.description.length > 90
										? product.description.substring(0, 90) +
											'...'
										: product.description
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
const apiStore = useApiStore()

import { useRouter } from 'vue-router'

const router = useRouter()
const handleProductSelection = (id: number) => {
	if (id === undefined) return
	// Navigate to /product?id=31
	router.push({ path: '/product', query: { id: `${id}` } })
}
const search = ref<string>('')

const itemsFiltered = computed(() =>
	products.value.filter(
		(e) =>
			e.description?.toLowerCase().includes(search.value.toLowerCase()) ||
			e.name.toLowerCase().includes(search.value.toLowerCase()),
	),
)
const { currentCompany, products } = storeToRefs(apiStore)
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
