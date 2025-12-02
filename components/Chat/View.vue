<template>
	<div class="flex h-full flex-col gap-4 p-4 pb-12 text-primary">
		<Card
			v-if="props.role"
			class="blur2 flex w-full cursor-pointer select-none items-center justify-center bg-red-500 bg-transparent text-primary shadow-liquid transition-all hover:shadow-liquid-selected dark:text-white dark:shadow-liquid-dark hover:dark:shadow-liquid-dark-selected"
		>
			<CardHeader class="flex items-center justify-center py-2">
				<CardTitle> {{ props.role.name }} </CardTitle>
			</CardHeader>
		</Card>
		<!-- Messages List -->

		<Progress
			class="w-full dark:bg-white/20"
			indicator-class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
			:model-value="(currentQuestions * 100) / questions.length"
		/>
		<div
			ref="chatarea"
			class="scroll-area blur2 flex flex-col space-y-2 overflow-y-auto rounded-2xl bg-card/20 p-4 shadow md:h-[min(500px,100%)]"
		>
			<div
				v-for="(msg, index) in messages"
				:key="index"
				class="whitespace-pre-wrap break-words rounded-2xl p-3 text-sm"
				:class="
					msg.sender === 'me'
						? 'ml-auto bg-primary text-right text-primary-foreground'
						: 'mr-auto bg-muted text-left text-muted-foreground'
				"
			>
				{{ msg.value }}
			</div>
		</div>
		<div v-auto-animate class="flex items-center gap-4 [--radius:1.2rem]">
			<Badge v-if="typing">
				<LoaderIcon
					role="status"
					aria-label="Loading"
					:class="cn('size-4 animate-spin')"
				/>
				Thinking
			</Badge>
			<div class="size-4" v-else />
		</div>

		<!-- Input Area -->
		<form @submit.prevent="sendMessage" class="flex gap-2">
			<input
				v-model="input"
				type="text"
				class="flex-1 rounded-lg border border-border bg-background p-3 text-primary dark:text-white"
				placeholder="Type a message..."
			/>
			<button
				class="rounded-lg bg-primary px-4 py-2 text-primary-foreground"
				:disabled="!input.trim() || typing"
			>
				Send
			</button>
		</form>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { LoaderIcon } from 'lucide-vue-next'

const props = defineProps<{
	role: Role
}>()

type Message = {
	sender: 'me' | 'bot'
	value: string
}
const messages = ref<Message[]>([])

const questions = ref([
	'What exactly are you working on?',
	'What is your tech stack / what technologies do you use?',
	'Which section of the platform do you work on?',
	'Who do you work with? What other projects or teams do you collaborate with?',
	'What are some key features of your product?',
	'What are the main concerns or challenges you deal with?',
	'Do you use any internal tools, in what context do you use them, when do you use them, and who is affected by their use?',
	'How do you approach collaborating with different teams?',
	'How do you prioritize tasks?',
	'What are some bottlenecks in the codebase?',
	'If you were relearning the codebase, where would you start?',
	'How do you test and validate your code?',
	'From 0 to 100, what happens when you add a new feature?',
	'While developing a feature or fixing a bug, what is your biggest concern?',
])

const currentQuestions = ref(0)

const typing = ref(false)
const chatarea = ref<any>(null)
const input = ref('')

onMounted(() => {
	typing.value = true
	setTimeout(() => {
		console.log('asdga', questions.value[0])
		messages.value.push({
			sender: 'bot',
			value: questions.value[currentQuestions.value],
		})

		currentQuestions.value++

		typing.value = false
	}, 1000)
})

watch(
	messages,
	async () => {
		await nextTick()
		if (chatarea.value) {
			chatarea.value.scrollTop = chatarea.value.scrollHeight
		}
	},
	{ deep: true },
)

const sendMessage = () => {
	if (!input.value.trim() || typing.value) return

	messages.value.push({ sender: 'me', value: input.value })
	input.value = ''

	// TODO: save the mesage with the question here

	typing.value = true
	setTimeout(() => {
		messages.value.push({
			sender: 'bot',
			value: questions.value[currentQuestions.value++],
		})
		typing.value = false
	}, questions.value[currentQuestions.value].length * 50)
}
</script>

<style scoped>
.scroll-area {
	scrollbar-color: transparent transparent;
}

.scroll-area::-webkit-scrollbar {
	width: 12px;
}

.scroll-area::-webkit-scrollbar-track {
	background: #f0f0f0;
	border-radius: 4px;
}

.scroll-area::-webkit-scrollbar-thumb {
	background-color: gray;
	border-radius: 4px;
}

.scroll-area::-webkit-scrollbar-thumb:hover {
	background-color: gray;
}
</style>
