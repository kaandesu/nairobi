<template>
	<Form
		v-slot="{ handleSubmit }"
		as=""
		keep-values
		:validation-schema="formSchema"
	>
		<Dialog v-model:open="isOpen">
			<DialogTrigger as-child>
				<Button
					class="box-content h-3 rounded-lg p-3"
					variant="default"
				>
					New Product
					<Icon
						name="material-symbols:add"
						class="ml-2"
						size="1.5rem"
					/>
				</Button>
			</DialogTrigger>

			<DialogContent
				hideClose
				class="box-border border-none bg-transparent text-white shadow-liquid-dark sm:max-w-[480px]"
				blur
			>
				<DialogHeader>
					<DialogTitle>Create Product </DialogTitle>
					<DialogDescription>
						Enter your product information below.
					</DialogDescription>
				</DialogHeader>

				<form
					id="brandForm"
					@submit="handleSubmit($event, onSubmit as any)"
					class="space-y-4"
				>
					<FormField name="name" v-slot="{ componentField }">
						<FormItem>
							<FormLabel>Product Name</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. AI Ranker"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<FormField name="client" v-slot="{ componentField }">
						<FormItem>
							<FormLabel>Client</FormLabel>
							<FormControl>
								<Input
									placeholder="client name"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<FormField name="description" v-slot="{ componentField }">
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									rows="4"
									placeholder="Briefly tell us what your website is about so our AI can evaluate it more accurately."
									v-bind="componentField"
								/>
							</FormControl>
							<FormDescription
								>10–500 characters.</FormDescription
							>
							<FormMessage />
						</FormItem>
					</FormField>

					<div class="space-y-2">
						<label class="text-sm font-medium leading-none"
							>Type of Prouduct</label
						>
						<Select v-model="selectedModel" class="box-content">
							<SelectTrigger class="box-content h-6 w-auto">
								<SelectValue placeholder="field of product" />
							</SelectTrigger>
							<SelectContent class="box-content">
								<SelectGroup class="box-content">
									<SelectLabel>Fields</SelectLabel>
									<SelectItem value="Front-end">
										Front-end
									</SelectItem>
									<SelectItem value="Back-end">
										Back-End
									</SelectItem>
									<SelectItem value="Full-stack">
										Full-stack
									</SelectItem>
									<SelectItem value="Machine Learning">
										Machine Learning
									</SelectItem>
									<SelectItem value="UI/UX Design">
										UI/UX Design
									</SelectItem>
									<SelectItem value="Product Manager">
										Product Manager
									</SelectItem>
									<SelectItem value="Other">
										Other
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</form>

				<DialogFooter>
					<Button type="submit" form="brandForm"> Create </Button>
					<DialogClose as-child>
						<Button
							type="button"
							variant="ghost"
							class="hover:bg-transparent hover:text-muted-foreground"
							@click.prevent="() => {}"
						>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</Form>
</template>

<script setup lang="ts">
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const apiStore = useApiStore()
const { products } = storeToRefs(apiStore)
const { API } = apiStore

const formSchema = toTypedSchema(
	z.object({
		name: z.string().min(2, 'At least 2 chars').max(80, 'Max 80 chars'),
		description: z
			.string()
			.min(10, 'At least 10 chars')
			.max(500, 'Max 500 chars'),
		client: z.string().optional(),
	}),
)

const isOpen = ref<boolean>(false)

const selectedModel = ref<
	| 'Front-end'
	| 'Back-end'
	| 'Other'
	| 'Full-stack'
	| 'Machine Learning'
	| 'UI/UX Design'
	| 'Product Manager'
>()

async function onSubmit(values: {
	name: string
	description: string
	client: string
}) {
	const { name, description, client } = values
	// TODO: enable this
	// await API(() =>
	//
	// ).then(async () => await API(() => GetSiteList()))

	console.log(values)
	products.value.push({
		name,
		description,
		client,
	})

	isOpen.value = false
}
</script>
