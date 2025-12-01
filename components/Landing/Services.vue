<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
import { landing } from '@/config'
const { serviceList } = landing.Services
</script>

<template>
	<section id="services" class="container py-24 sm:py-32">
		<h2 class="mb-2 text-center text-lg tracking-wider text-primary">
			Services
		</h2>

		<h2 class="mb-4 text-center text-3xl font-bold md:text-4xl">
			Grow Your Business
		</h2>
		<h3
			class="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2"
		>
			From marketing and sales to operations and strategy, we have the
			expertise to help you achieve your goals.
		</h3>
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"></div>

		<div
			class="mx-auto grid w-full gap-4 sm:grid-cols-2 lg:w-[60%] lg:grid-cols-2"
		>
			<div
				v-for="{ title, description, pro } in serviceList"
				:key="title"
			>
				<Card class="relative h-full bg-muted/60 dark:bg-card">
					<CardHeader>
						<CardTitle>{{ title }}</CardTitle>
						<CardDescription>{{ description }}</CardDescription>
					</CardHeader>
					<Badge
						v-if="pro === true"
						variant="secondary"
						class="absolute -right-3 -top-2"
						>PRO</Badge
					>
				</Card>
			</div>
		</div>
	</section>
</template>
