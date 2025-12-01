<template>
	<main class="p-5">
		<Title />
		<div
			class="absolute right-4 top-4 flex h-6 items-center justify-center gap-x-4 transition-all md:right-8 md:top-8"
		>
			<dark-button />
			<theme-select />
			<NuxtLink
				to="/sign-up"
				:class="cn(buttonVariants({ variant: 'ghost' }))"
			>
				Sign Up
			</NuxtLink>
			<NuxtLink
				to="/sign-in"
				:class="cn(buttonVariants({ variant: 'ghost' }))"
			>
				Sign In
			</NuxtLink>
		</div>

		<section v-if="structure.authentication.custom">
			<Label> {{ authSettings?.numOfChars }}-digit code </Label>
			<PinInput
				class="mb-6 mt-2"
				id="pin-input"
				v-model="pinValue"
				placeholder="○"
			>
				<PinInputGroup class="gap-1">
					<template
						v-for="(id, index) in authSettings?.numOfChars"
						:key="id"
					>
						<PinInputInput
							class="rounded-md border"
							:index="index"
						/>
						<template
							v-if="index !== (authSettings?.numOfChars ?? 1) - 1"
						>
							<PinInputSeparator />
						</template>
					</template>
				</PinInputGroup>
			</PinInput>
			<AutoForm
				class="space-y-6"
				:schema="schema"
				:field-config="{
					password: {
						label: 'New Password',
						inputProps: {
							type: 'password',
							placeholder: '••••••••',
						},
					},
					confirm: {
						label: 'Confirm Password',
						inputProps: {
							type: 'password',
							placeholder: '',
						},
					},
				}"
				@submit="onSubmit"
			>
				<Button
					variant="default"
					tabindex="13"
					type="submit"
					class="box-border w-full"
					:disabled="isLoading"
				>
					Reset Password
				</Button>
			</AutoForm>
		</section>
	</main>
</template>

<script setup lang="ts">
import * as z from 'zod'
import { h } from 'vue'
import { Button, buttonVariants } from '@/components/ui/button'
import { AutoForm } from '@/components/ui/auto-form'
import { useConfigStore } from '../stores/config'
import { pagesDict } from '@/config/pages'

const authSettings = pagesDict.ChangePassword.value.auth

const config = useConfigStore()
const { structure } = storeToRefs(config)

const isLoading = ref(false)
const Title = inject('TitleComp')
definePageMeta({
	layout: 'auth',
})

const pinValue = ref<string[]>()

// TODO: add password rules
const schema = z
	.object({
		password: z
			.string({
				required_error: 'Password is required.',
			})
			.min(8, {
				message: 'Password must be at least 8 characters.',
			}),
		confirm: z
			.string({
				required_error: 'Password is required.',
			})
			.min(8, {
				message: 'Password must be at least 8 characters.',
			}),
	})
	.refine((data: any) => data.password === data.confirm, {
		message: "Passwords don't match",
		path: ['confirm'],
	})

function onSubmit(values: Record<string, any>) {
	console.log(pinValue.value?.length)
	createToast({
		message: 'You submitted the following values:',
		toastOps: {
			description: h(
				'pre',
				{ class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
				h(
					'code',
					{ class: 'text-white' },
					JSON.stringify(values, null, 2),
				),
			),
		},
	})()
}
</script>
