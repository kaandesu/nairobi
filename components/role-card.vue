<template>
	<Card
		class="blur2 w-full max-w-sm cursor-pointer select-none bg-transparent text-primary shadow-liquid transition-all hover:shadow-liquid-selected dark:text-white dark:shadow-liquid-dark hover:dark:shadow-liquid-dark-selected"
		@click="navigateTo('/company')"
	>
		<CardHeader class="relative">
			<CardTitle class="text-3xl">{{ props.role?.name }}</CardTitle>

			<CardDescription class="flex flex-col gap-y-3">
				<Label>
					Skills:
					<p class="font-normal">
						{{ props.role?.skills }}
					</p>
				</Label>
				<Label>
					Responsibilities:
					<p class="font-normal">
						{{ props.role?.responsibilities }}
					</p>
				</Label>
				<p class="h-full overflow-y-auto" style="max-height: 16rem">
					<Label>Description: </Label><br />
					{{ props.role?.description }}
				</p>
			</CardDescription>
		</CardHeader>
	</Card>
</template>

<script setup lang="ts">
const props = defineProps<{ role: Role }>()
</script>
