<template>
	<Card
		class="blur2 w-full max-w-sm cursor-pointer select-none bg-transparent text-primary shadow-liquid transition-all hover:shadow-liquid-selected dark:text-white dark:shadow-liquid-dark hover:dark:shadow-liquid-dark-selected"
		@click="navigateTo('/company')"
	>
		<CardHeader class="relative">
			<CardTitle class="text-3xl">{{ props.product?.name }}</CardTitle>

			<CardDescription class="flex flex-col gap-y-3">
				<Label>
					Client:
					<span class="font-normal">
						{{ props.product?.client }}</span
					>
				</Label>
				<p class="h-full overflow-y-auto" style="max-height: 16rem">
					<Label>Description: </Label><br />
					{{ props.product?.description }}
				</p>
			</CardDescription>
		</CardHeader>
	</Card>
</template>

<script setup lang="ts">
const props = defineProps<{ product: Product }>()
</script>
