<script setup lang="ts">
import { landing } from '@/config'
const { FAQList, title, slogan, contactRedirect, contactButtonLabel } =
	landing.FAQ
</script>

<template>
	<section id="faq" class="container py-24 sm:py-32 md:w-[700px]">
		<div class="mb-8 text-center">
			<h2 class="mb-2 text-center text-lg tracking-wider text-primary">
				{{ title }}
			</h2>

			<h2 class="text-center text-3xl font-bold md:text-4xl">
				{{ slogan }}
			</h2>
		</div>

		<Accordion type="single" collapsible class="AccordionRoot">
			<AccordionItem
				v-for="{ question, answer, value } in FAQList"
				:key="value"
				:value="value"
			>
				<AccordionTrigger class="text-left">
					{{ question }}
				</AccordionTrigger>

				<AccordionContent>{{ answer }}</AccordionContent>
			</AccordionItem>
		</Accordion>

		<h3 class="mt-4 font-medium">
			{{ contactRedirect }}
			<a href="#contact" class="text-muted-foreground underline">{{
				contactButtonLabel
			}}</a>
		</h3>
	</section>
</template>
