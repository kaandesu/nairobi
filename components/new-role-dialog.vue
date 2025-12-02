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
					Add Role
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
					<DialogTitle>Create Role</DialogTitle>
					<DialogDescription>
						Enter your role information below.
					</DialogDescription>
				</DialogHeader>

				<form
					id="roleForm"
					@submit="handleSubmit($event, onSubmit as any)"
					class="space-y-4"
				>
					<!-- Role Name -->
					<FormField name="name" v-slot="{ componentField }">
						<FormItem>
							<FormLabel>Role Name</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. Frontend Developer"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<!-- Description -->
					<FormField name="description" v-slot="{ componentField }">
						<FormItem>
							<FormLabel>Description</FormLabel>
							<FormControl>
								<Textarea
									rows="3"
									placeholder="Brief description of the role"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<!-- Responsibilities -->
					<FormField
						name="responsibilities"
						v-slot="{ componentField }"
					>
						<FormItem>
							<FormLabel>Responsibilities</FormLabel>
							<FormControl>
								<Textarea
									rows="2"
									placeholder="Key Responsibilities separated by commas"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<!-- Skills -->
					<FormField name="skills" v-slot="{ componentField }">
						<FormItem>
							<FormLabel>Skills</FormLabel>
							<FormControl>
								<Textarea
									rows="2"
									placeholder="Key skills required, separated by commas"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>

					<!-- Reports To -->
					<FormField name="reportsTo" v-slot="{ componentField }">
						<FormItem>
							<FormLabel>Reports To</FormLabel>
							<FormControl>
								<Input
									placeholder="e.g. Project Manager"
									v-bind="componentField"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>
				</form>

				<DialogFooter>
					<Button type="submit" form="roleForm">Create</Button>
					<DialogClose as-child>
						<Button
							type="button"
							variant="ghost"
							class="hover:bg-transparent hover:text-muted-foreground"
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
const { roles } = storeToRefs(apiStore) // changed from products to roles
const { API } = apiStore

const formSchema = toTypedSchema(
	z.object({
		name: z.string().min(2, 'At least 2 chars').max(80, 'Max 80 chars'),
		description: z
			.string()
			.min(5, 'At least 5 chars')
			.max(500, 'Max 500 chars'),
		responsibilities: z.string().optional(),
		skills: z.string().optional(),
		reportsTo: z.string().optional(),
	}),
)

const isOpen = ref<boolean>(false)

async function onSubmit(values: Role) {
	// Here you would call your API to create a role
	console.log('Role submitted:', values)

	const temp = { ...values, id: Math.floor(Math.random() * 10000) }

	// TODO: instead of pushing
	// create then re-fetch the list here!
	roles.value.push(temp) // save locally for demo purposes
	isOpen.value = false
}
</script>
