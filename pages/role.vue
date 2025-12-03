<template>
	<main
		class="box-border flex h-full w-full flex-col items-start justify-center py-4"
	>
		<section
			class="flex h-full w-full flex-col items-center justify-start gap-4 overflow-hidden lg:flex-row lg:items-start lg:justify-start"
			v-auto-animate
		>
			<div class="mt-4 flex flex-col">
				<RoleCard
					v-if="
						currentRole !== undefined &&
						viewport.isGreaterOrEquals('md')
					"
					:role="currentRole"
				/>
				<UploadFile class="mt-6" />
			</div>

			<section
				class="box-border flex h-full w-full flex-col"
				v-auto-animate
			>
				<ChatView
					v-if="questions.length !== currentQuestion && lastStep < 2"
					:questions="questions"
					v-model="currentQuestion"
					:role="
						!viewport.isGreaterOrEquals('md')
							? currentRole
							: undefined
					"
				/>
				<LoadingPage
					@complete="handleGeneratedQuestions()"
					:phase="lastStep"
					v-if="questions.length === currentQuestion && lastStep < 2"
				/>

				<section
					v-if="lastStep === 2"
					class="flex h-full w-full items-start justify-center"
				>
					<Card
						class="w-96 border border-gray-200 p-8 text-center shadow-lg dark:border-gray-700"
					>
						<Check class="mx-auto mb-4 h-16 w-16 text-green-500" />
						<h2
							class="mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
						>
							Handover Complete
							<Icon
								name="line-md:check-all"
								size="3rem"
								class="ml-4"
							/>
						</h2>
						<p class="mb-6 text-gray-600 dark:text-gray-300">
							All steps have been completed successfully. You can
							now continue to your dashboard or review the
							summary.
						</p>
						<div class="flex justify-center gap-4">
							<Button
								variant="default"
								@click="navigateTo('/company')"
							>
								Go to Dashboard
							</Button>
							<Button variant="outline" @click="">
								Review Summary
							</Button>
						</div>
					</Card>
				</section>
			</section>
		</section>
	</main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const apiStore = useApiStore()
const { currentCompany, roles, products } = storeToRefs(apiStore)

const lastStep = ref<number>(0)

const handleGeneratedQuestions = () => {
	lastStep.value++
	if (lastStep.value === 2) return
	questions.value = techQuestions
	currentQuestion.value = 0
}

const questions = ref([
	'What exactly are you working on?',
	'What is your tech stack / what technologies do you use?',
	'Which section of the platform do you work on?',
	'Who do you work with? What other projects or teams do you collaborate with?',
	'What are some key features of your product?',
	'What are the main concerns or challenges you deal with?',
	// 'Do you use any internal tools, in what context do you use them, when do you use them, and who is affected by their use?',
	// 'How do you approach collaborating with different teams?',
	// 'How do you prioritize tasks?',
	// 'What are some bottlenecks in the codebase?',
	// 'If you were relearning the codebase, where would you start?',
	// 'How do you test and validate your code?',
	// 'From 0 to 100, what happens when you add a new feature?',
	// 'While developing a feature or fixing a bug, what is your biggest concern?',
])

const techQuestions = [
	'In the <h>DashboardContainer.vue</h> component, which reactive states or composables tend to create side-effects when you modify them?',
	'When you update logic inside <k>useUserSession()</k> composable, which components are most affected across the app?',
	'How tightly coupled is your <h>NotificationBell.vue</h> component to the <j>global store</j>, and what breaks if you change its <j>event listeners</j>?',
	'Does modifying the props of <h>DataTable.vue</h> require updates in other components like <h>TableFilter.vue</h> or <h>TablePagination.vue</h>?',
	'How is <j>state</j> shared between <h>SidebarNavigation.vue</h> and the page-level components, and what issues arise if the shape of the <j>navigation config</j> changes?',
	// 'When changing API response mapping in <k>useApiClient()</k>, which <j>modules</j> tend to fail first?',
	// 'How often do changes made inside <h>FormBuilder.vue</h> cascade into validation issues in <k>useFormValidator()</k>?',
	// 'If you refactor the <j>AuthGuard</j> in <h>router/index.ts</h>, what routes or <j>layouts</j> typically break?',
	// 'Which parts of the codebase rely on implicit side effects inside <k>usePermissions()</k> and are therefore easy to unintentionally break?',
	// 'What risks appear when you modify the <j>event-emitting logic</j> in <h>ChartContainer.vue</h> that parent components depend on?',
	// 'How well-isolated is <h>ModalManager.vue</h>, and what components are coupled to its <k>open()</k>/<k>close()</k> API?',
	// 'What are the most confusing or poorly documented interactions between <h>ProfileSettings.vue</h> and <k>useUserPreferences()</k>?',
	// 'Where do you encounter the most frequent <j>infinite re-render loops</j>, and which <j>reactive dependencies</j> usually cause them?',
	// 'If you move a shared component like <h>InputField.vue</h> into a different folder or namespace, what <j>import paths</j> or <j>build steps</j> typically fail?',
	// 'What part of the codebase causes the most friction when making small UI changes—<j>pages</j>, <j>reusable components</j>, <j>composables</j>, or <j>API layers</j>?',
]
const currentQuestion = ref<number>(0)

const viewport = useViewport()

const router = useRouter()

// Access the current route
const route = useRoute()

// Get the `id` from query params and convert to a number
const roleId = computed(() => {
	const idParam = route.query.id
	// route.query.id can be string | string[] | undefined
	if (Array.isArray(idParam)) {
		return Number(idParam[0])
	}
	return idParam ? Number(idParam) : null
})

const currentRole = ref<Product>()

onMounted(async () => {
	setTimeout(async () => {
		if (roleId.value === undefined || roleId.value === null) {
			await navigateTo('/company')
		}
		// TODO: get the current role from API
		// if the id is undefined just sent back to company
		currentRole.value = roles.value.find((e) => e.id === roleId.value)
	}, 250)
})

console.log(roleId.value) // This will log 31 if ?id=31

definePageMeta({
	layout: 'dashboard-page',
})
</script>
<style scoped>
.scroll-area {
	scrollbar-color: lightgray #3a3a3a; /* thumb (red) + track (light gray) */
}

/* Chrome, Edge, Safari */
.scroll-area::-webkit-scrollbar {
	width: 12px;
}

.scroll-area::-webkit-scrollbar-track {
	background: #f0f0f0; /* track color */
	border-radius: 4px;
}

.scroll-area::-webkit-scrollbar-thumb {
	background-color: gray; /* 🔴 red bar */
	border-radius: 4px;
}

.scroll-area::-webkit-scrollbar-thumb:hover {
	background-color: gray; /* darker red on hover */
}
</style>
