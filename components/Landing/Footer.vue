<script setup lang="ts">
import { ChevronsDown } from 'lucide-vue-next'
import { landing } from '@/config'
const { title, columns, copyrightNotice } = landing.Footer
</script>

<template>
	<footer id="footer" class="container py-24 pb-16 sm:py-32 sm:pb-24">
		<div class="rounded-2xl border bg-muted/50 p-10 dark:bg-card">
			<div
				class="grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-4 xl:grid-cols-6"
			>
				<div class="col-span-full xl:col-span-2">
					<a href="#" class="flex items-center font-bold">
						<ChevronsDown
							class="mr-2 h-9 w-9 rounded-lg border bg-gradient-to-tr from-primary via-primary/70 to-primary text-white"
						/>

						<h3 class="text-2xl">{{ title }}</h3>
					</a>
				</div>

				<div
					class="flex flex-col gap-2"
					v-for="{ title, links } in columns"
				>
					<h3 class="text-lg font-bold">{{ title }}</h3>
					<div v-for="link in links">
						<a
							:href="link.value"
							class="opacity-60 hover:opacity-100"
						>
							{{ link.label }}
						</a>
					</div>
				</div>
			</div>

			<Separator class="my-6" />
			<section>
				<h3 class="">
					&copy; {{ copyrightNotice[0] }}
					<a
						target="_blank"
						href="https://github.com/kaandesu"
						className="text-primary transition-all border-primary hover:border-b-2"
					>
						{{ copyrightNotice[1] }}
					</a>
				</h3>
			</section>
		</div>
	</footer>
</template>
