<template>
	<Card>
		<CardHeader
			class="flex flex-row items-center justify-between space-y-0 pb-2"
		>
			<CardTitle class="text-sm font-medium"> {{ title }} </CardTitle>
			<Icon
				v-if="icon"
				class="h-5 w-5 text-muted-foreground"
				:name="icon"
			/>
		</CardHeader>
		<CardContent>
			<div class="text-2xl font-bold">{{ value }}</div>
			<p class="text-xs text-muted-foreground">{{ muted }}</p>
		</CardContent>
	</Card>
</template>
<script setup lang="ts">
const {
	title = 'Card Title',
	value = '0.0',
	muted = '+0% from last month',
	icon,
} = defineProps<{
	title: string
	value: string
	muted?: string
	icon?: string
}>()
</script>
