<script setup lang="ts">
import { landing } from '@/config'
const { plans, title, slogan, desc, paymentInterval } = landing.Pricing
</script>

<template>
	<section class="container py-24 sm:py-32">
		<h2 class="mb-2 text-center text-lg tracking-wider text-primary">
			{{ title }}
		</h2>

		<h2 class="mb-4 text-center text-3xl font-bold md:text-4xl">
			{{ slogan }}
		</h2>

		<h3
			class="mx-auto pb-14 text-center text-xl text-muted-foreground md:w-1/2"
		>
			{{ desc }}
		</h3>

		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
			<Card
				v-for="{
					title,
					popular,
					price,
					description,
					buttonText,
					benefitList,
				} in plans"
				:key="title"
				:class="{
					'border-[1.5px] border-primary shadow-black/10 drop-shadow-xl dark:shadow-white/10 lg:scale-[1.1]':
						popular === true,
				}"
			>
				<CardHeader>
					<CardTitle class="pb-2">
						{{ title }}
					</CardTitle>

					<CardDescription class="pb-4">{{
						description
					}}</CardDescription>

					<div>
						<span class="text-3xl font-bold">${{ price }}</span>
						<span class="text-muted-foreground">
							/{{ paymentInterval }}</span
						>
					</div>
				</CardHeader>

				<CardContent class="flex">
					<div class="space-y-4">
						<span
							v-for="benefit in benefitList"
							:key="benefit"
							class="flex"
						>
							<Check class="mr-2 text-primary" />
							<h3>{{ benefit }}</h3>
						</span>
					</div>
				</CardContent>

				<CardFooter>
					<Button
						:variant="popular === false ? 'secondary' : 'default'"
						class="w-full"
					>
						{{ buttonText }}
					</Button>
				</CardFooter>
			</Card>
		</div>
	</section>
</template>
