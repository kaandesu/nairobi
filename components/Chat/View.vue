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
			:model-value="(currentQuestions * 100) / props.questions.length"
		/>
		<div
			ref="chatarea"
			class="scroll-area blur2 flex flex-col space-y-2 overflow-y-auto rounded-2xl bg-card/20 p-4 shadow-md md:h-[min(500px,100%)]"
		>
			<div
				v-for="(msg, index) in messages"
				:key="index"
				class="whitespace-pre-wrap break-words rounded-2xl p-3 text-sm"
				:class="
					msg.sender === 'me'
						? 'ml-auto text-right text-blue-900 shadow-liquid-info dark:text-primary-foreground'
						: 'mr-auto text-left text-green-900 text-muted-foreground shadow-liquid-positive dark:text-white'
				"
				v-html="msg.value"
			></div>
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

			<Button class="rounded-lg px-4 py-2" variant="outline">
				<Icon
					size="1.6rem"
					class="text-primary dark:text-white"
					name="majesticons:attachment"
				/>
			</Button>
		</form>
	</div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import { LoaderIcon } from 'lucide-vue-next'

const props = defineProps<{
	questions: string[]
	role: Role
}>()

type Message = {
	sender: 'me' | 'bot'
	value: string
}
const messages = ref<Message[]>([])

const currentQuestions = defineModel<number>()

const typing = ref(false)
const chatarea = ref<any>(null)
const input = ref('')

onMounted(() => {
	typing.value = true
	setTimeout(() => {
		if (currentQuestions.value === undefined) return
		console.log('asdga', props.questions[0])
		messages.value.push({
			sender: 'bot',
			value: props.questions[currentQuestions.value],
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
	if (currentQuestions.value === undefined) return
	setTimeout(() => {
		if (currentQuestions.value === undefined) return
		messages.value.push({
			sender: 'bot',
			value: props.questions[currentQuestions.value++],
		})
		typing.value = false
	}, props.questions[currentQuestions.value].length * 20)
}
</script>

<style>
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
h {
	font-weight: bold;
	--tw-text-opacity: 1;
	color: hsl(var(--primary));
}

j {
	font-weight: bold;
	--tw-text-opacity: 1;
	color: hsl(var(--input));
}

k {
	font-weight: bold;
	--tw-text-opacity: 1;
	color: rgb(234 179 8 / var(--tw-text-opacity, 1)) !important; /* #eab308 */
}
</style>
