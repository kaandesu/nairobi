<script setup lang="ts">
import { landing } from '@/config'
const { title, link, buttonLabel, desc, icon } = landing.Community
</script>

<template>
	<section id="community" class="py-12">
		<hr />
		<div class="container py-20 sm:py-20">
			<div class="mx-auto lg:w-[60%]">
				<Card
					class="flex flex-col items-center justify-center border-0 bg-background text-center shadow-none"
				>
					<CardHeader>
						<CardTitle class="text-4xl font-bold md:text-5xl">
							<Icon :name="icon" class="h-14 w-14" />
							<br />
							{{ title[0] }}
							<span
								class="bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text text-transparent"
							>
								{{ title[1] }}
							</span>
						</CardTitle>
					</CardHeader>
					<CardContent
						class="text-xl text-muted-foreground lg:w-[80%]"
					>
						{{ desc }}
					</CardContent>

					<CardFooter>
						<Button as-child>
							<a :href="link" target="_blank">
								{{ buttonLabel }}
							</a>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</div>
		<hr />
	</section>
</template>
