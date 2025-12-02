<template>
	<div class="w-full max-w-4xl">
		<!-- Main Card -->
		<Card
			class="blur2 border-border bg-transparent shadow-liquid dark:shadow-liquid-dark"
		>
			<CardHeader>
				<CardTitle class="text-2xl">Define Your Company</CardTitle>
				<CardDescription>Tell us about your company</CardDescription>
			</CardHeader>

			<CardContent class="space-y-8">
				<!-- Stepper -->
				<Stepper
					v-model="currentStep"
					class="flex w-full items-start gap-2"
				>
					<StepperItem
						v-for="step in totalSteps"
						:key="step"
						:step="step"
						class="relative flex w-full flex-col items-center justify-center"
					>
						<StepperSeparator
							v-if="step !== totalSteps"
							class="absolute left-[calc(50%+20px)] right-[calc(-50%+20px)] top-5 block h-0.5 shrink-0 rounded-full bg-border group-data-[state=completed]:bg-primary"
						/>

						<StepperTrigger as-child>
							<Button
								:variant="
									currentStep === step
										? 'default'
										: currentStep > step
											? 'default'
											: 'outline'
								"
								size="icon"
								class="z-10 shrink-0 rounded-full"
								:class="currentStep > step ? 'bg-primary' : ''"
								:disabled="currentStep < step"
							>
								<StepperIndicator>{{ step }}</StepperIndicator>
							</Button>
						</StepperTrigger>

						<div
							class="mt-5 flex flex-col items-center text-center"
						>
							<StepperTitle
								:class="
									currentStep >= step
										? 'text-foreground'
										: 'text-muted-foreground'
								"
							>
								{{
									step === 1
										? 'Configuration'
										: step === 2
											? 'Company Details'
											: 'Review'
								}}
							</StepperTitle>

							<StepperDescription
								:class="
									currentStep >= step
										? 'text-muted-foreground'
										: 'text-muted-foreground/50'
								"
							>
								{{
									step === 1
										? 'Basic info'
										: step === 2
											? 'What the company does'
											: 'Review inputs'
								}}
							</StepperDescription>
						</div>
					</StepperItem>
				</Stepper>

				<!-- Step 1: Company Configuration -->
				<div
					v-if="currentStep === 1"
					class="space-y-6 duration-500 animate-in fade-in-50"
				>
					<div class="space-y-2">
						<Label for="company-name">Company Name</Label>
						<Input
							id="company-name"
							v-model="companyName"
							class="border-border bg-background"
							placeholder="Ex: Github"
						/>
					</div>

					<div class="space-y-2">
						<Label for="company-url">Url</Label>
						<Input
							id="company-url"
							v-model="companyUrl"
							class="border-border bg-background"
							placeholder="ex: github.com"
						/>
					</div>

					<div class="space-y-2">
						<Label for="company-sector">Industry / Sector</Label>
						<Input
							id="company-sector"
							v-model="companySector"
							class="border-border bg-background"
							placeholder="ex: version control software"
						/>
					</div>

					<div class="space-y-2">
						<Label for="company-size">Company Size</Label>
						<div class="flex items-center gap-4">
							<Input
								id="company-size"
								v-model.number="companySize"
								type="number"
								min="1"
								max="100000"
								class="w-40 border-border bg-background"
							/>
							<span class="text-sm text-muted-foreground"
								>employees</span
							>
						</div>
					</div>
				</div>

				<!-- Step 2: Company Details -->
				<div
					v-if="currentStep === 2"
					class="space-y-6 duration-500 animate-in fade-in-50"
				>
					<div class="space-y-2">
						<Label for="company-description"
							>What does your company do?</Label
						>
						<Textarea
							id="company-description"
							v-model="companyDescription"
							placeholder="Describe your company...
Examples:
- We build software for automating logistics
- We sell eco-friendly consumer products
- We operate a digital marketing agency
- We manufacture medical devices"
							rows="8"
							class="resize-none border-border bg-background"
						/>
						<p class="text-xs text-muted-foreground">
							{{ companyDescription.length }}/500 characters
						</p>
					</div>
				</div>

				<!-- Step 3: Review (NO AI) -->
				<div
					v-if="currentStep === 3"
					class="space-y-6 duration-500 animate-in fade-in-50"
				>
					<div
						class="space-y-4 rounded-lg border border-border bg-muted/30 p-4"
					>
						<h3 class="text-lg font-semibold">
							Review Your Information
						</h3>

						<div class="space-y-2 text-sm">
							<p>
								<strong>Company Name:</strong> {{ companyName }}
							</p>
							<p>
								<strong>Industry / Sector:</strong>
								{{ companySector }}
							</p>
							<p>
								<strong>Company Size:</strong>
								{{ companySize }} employees
							</p>
							<p>
								<strong>Description:</strong>
							</p>

							<p class="overflow-y-auto text-wrap">
								{{ companyDescription }}
							</p>
						</div>
					</div>
				</div>
			</CardContent>

			<!-- Footer -->
			<CardFooter class="flex justify-between">
				<Button
					v-if="currentStep > 1"
					variant="outline"
					@click="prevStep"
				>
					Previous
				</Button>

				<div v-else></div>

				<Button
					v-if="currentStep < totalSteps"
					:disabled="!canProceed"
					@click="nextStep"
				>
					Next
				</Button>

				<Button
					v-else
					class="bg-primary hover:bg-primary/90"
					:disabled="!canProceed"
					@click="createCompany"
				>
					Create Company
				</Button>
			</CardFooter>
		</Card>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const viewport = useViewport()

// Step state
const currentStep = ref(1)
const totalSteps = 3

// Inputs
const companyName = ref('')
const companySector = ref('')
const companyUrl = ref('')
const companySize = ref(10)
const companyDescription = ref('')

// Validation
const canProceedStep1 = computed(() => {
	return (
		companyName.value.trim() !== '' &&
		companySector.value.trim() !== '' &&
		companySize.value > 0
	)
})

const canProceedStep2 = computed(() => {
	return companyDescription.value.trim().length > 10
})

const canProceedStep3 = computed(() => true)

const canProceed = computed(() => {
	if (currentStep.value === 1) return canProceedStep1.value
	if (currentStep.value === 2) return canProceedStep2.value
	if (currentStep.value === 3) return canProceedStep3.value
	return false
})

// Navigation
function nextStep() {
	if (currentStep.value < totalSteps) {
		currentStep.value++
	}
}

function prevStep() {
	if (currentStep.value > 1) {
		currentStep.value--
	}
}

const apiStore = useApiStore()
const { currentCompany } = storeToRefs(apiStore)

function createCompany() {
	console.log('Company created:', {
		name: companyName.value,
		sector: companySector.value,
		size: companySize.value,
		description: companyDescription.value,
	})

	currentCompany.value = {
		name: companyName.value,
		sector: companyName.value,
		url: companyUrl.value,
		size: companySize.value,
		description: companyDescription.value,
	}

	//TODO: Create the company here

	// redirect or whatever
	// router.push('/dashboard')
}
</script>

<style scoped>
@keyframes fade-in {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-in {
	animation: fade-in 0.5s ease-out;
}
</style>
