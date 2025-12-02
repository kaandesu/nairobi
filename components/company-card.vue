<template>
	<Card
		class="blur2 w-full max-w-sm bg-transparent text-primary shadow-liquid dark:text-white dark:shadow-liquid-dark"
	>
		<CardHeader>
			<CardTitle class="text-4xl">{{
				props.currentCompany?.name
			}}</CardTitle>
			<CardDescription class="flex flex-col gap-y-3">
				<Label>
					Website:
					<span class="font-normal">
						{{ props.currentCompany?.url }}</span
					>
				</Label>
				<p class="h-full overflow-y-auto" style="max-height: 16rem">
					<Label>Description: </Label><br />
					{{ props.currentCompany?.description }}
				</p>
				<Label>
					Sector:
					<span class="font-normal">
						{{ props.currentCompany?.sector }}
					</span>
				</Label>

				<Label>
					Size:
					<span class="font-normal">
						{{ props.currentCompany?.size }} employees
					</span>
				</Label>
			</CardDescription>
		</CardHeader>
	</Card>
</template>

<script setup lang="ts">
const props = defineProps<{
	currentCompany: Company
}>()
</script>
