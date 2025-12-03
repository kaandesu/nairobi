<template>
	<main
		class="relative box-border flex touch-manipulation select-none flex-col items-center justify-start gap-y-6 p-0 px-4 text-primary dark:text-white md:p-4"
		v-auto-animate
	>
		<Label
			v-if="percentage < 20 && props.phase === 0"
			class="text-nowrap text-3xl"
		>
			Analyzing your responses
		</Label>

		<Label
			v-if="percentage >= 20 && percentage < 66 && props.phase === 0"
			class="text-nowrap text-3xl"
		>
			Mapping out deeper follow-up questions
		</Label>

		<Label
			v-if="percentage >= 66 && props.phase === 0"
			class="text-nowrap text-3xl"
		>
			Preparing tailored clarifications
		</Label>

		<!-- division -->

		<Label
			v-if="percentage < 25 && props.phase > 0"
			class="text-nowrap text-3xl"
		>
			Learning and analyzing the knowledge base
		</Label>

		<Label
			v-if="percentage >= 25 && percentage < 50 && props.phase > 0"
			class="text-nowrap text-3xl"
		>
			Creating structured documentation
		</Label>

		<Label
			v-if="percentage >= 50 && percentage < 75 && props.phase > 0"
			class="text-nowrap text-3xl"
		>
			Building a custom AI agent
		</Label>

		<Label
			v-if="percentage >= 75 && props.phase > 0"
			class="text-nowrap text-3xl"
		>
			Preparing the onboarding experience
		</Label>
		<section
			class="flex w-full items-center justify-center transition-all duration-1000"
			:class="percentage === limit ? 'h-64' : 'h-64'"
		>
			<div
				class="waterContainer relative flex aspect-square h-full flex-col items-center justify-center overflow-hidden rounded-full border border-primary bg-primary text-black shadow-liquid dark:border-white"
				:style="{ '--percentage': percentage + '%' }"
			>
				<span
					class="z-20 transition-all duration-1000 dark:text-white"
					:class="[
						percentage === limit ? 'text-7xl' : 'text-7xl',
						percentage >= 50 ? 'text-white' : '',
					]"
				>
					%{{ percentage }}
				</span>
			</div>
		</section>

		<canvas
			id="confetti-canvas"
			class="pointer-events-none fixed left-0 top-0 h-full w-full"
		/>
	</main>
</template>
<script setup lang="ts">
const props = defineProps<{ phase: number }>()

const container = ref<HTMLElement | null>(null)

const percentage = ref<number>(0)

const limit = ref<number>(0)

let canvas: HTMLCanvasElement | null = null
let ctx: CanvasRenderingContext2D | null = null
let confettis: any[] = []
let animationFrameId: number

const loadingPhrases = [
	'Analyzing your responses',
	'Identifying key responsibilities',
	'Mapping out deeper follow-up questions',
	'Reviewing job-specific details',
	'Preparing tailored clarifications',
]

const activeSentence = computed(() => {
	const index = Math.floor(percentage.value / 20)
	return loadingPhrases[index] ?? loadingPhrases.at(-1)
})

onMounted(() => {
	limit.value = 100

	canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement
	if (!canvas) return

	ctx = canvas.getContext('2d')
	if (!ctx) return

	const resizeCanvas = () => {
		canvas!.width = window.innerWidth
		canvas!.height = window.innerHeight
	}
	resizeCanvas()
	window.addEventListener('resize', resizeCanvas)

	animateConfetti()

	setTimeout(() => {
		const interval = setInterval(() => {
			if (percentage.value + 1 <= limit.value) {
				percentage.value += 1
			} else {
				percentage.value = limit.value
				clearInterval(interval)
				if (limit.value == 100) startConfetti()
				setTimeout(() => {
					emit('complete')
				}, 1500)
			}
		}, 50)
	}, 800)
})

const emit = defineEmits(['complete'])

function startConfetti() {
	const container = document.querySelector('.waterContainer') as HTMLElement
	if (!ctx || !canvas || !container) return

	const rect = container.getBoundingClientRect()

	const centerX = rect.left + rect.width / 2
	const centerY = rect.top + rect.height / 2

	const count = 40
	for (let i = 0; i < count; i++) {
		confettis.push({
			x: centerX,
			y: centerY,
			dx: (Math.random() - 0.5) * 4,
			dy: Math.random() * -3 - 1,
			width: 6,
			height: 16,
			angle: Math.random() * 360,
			rotationSpeed: (Math.random() - 0.5) * 6,
			color: `hsl(${Math.random() * 360}, 70%, 55%)`,
			alpha: 1,
		})
	}
}

function animateConfetti() {
	if (!ctx || !canvas) return

	const draw = () => {
		ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

		confettis = confettis.filter((c) => {
			c.x += c.dx
			c.y += c.dy
			c.dy += 0.15 // Slightly lower gravity
			c.angle += c.rotationSpeed
			c.alpha -= 0.01

			if (c.alpha <= 0) return false

			ctx!.save()
			ctx!.translate(c.x, c.y)
			ctx!.rotate((c.angle * Math.PI) / 180)
			ctx!.globalAlpha = c.alpha
			ctx!.fillStyle = c.color
			ctx!.fillRect(-c.width / 2, -c.height / 2, c.width, c.height)
			ctx!.restore()
			return true
		})

		animationFrameId = requestAnimationFrame(draw)
	}
	draw()
}

onBeforeUnmount(() => {
	cancelAnimationFrame(animationFrameId)
	window.removeEventListener('resize', () => {})
})

definePageMeta({
	layout: 'dashboard-page',
})
</script>
<style scoped>
.waterContainer {
	content: '';
}

.waterContainer::before {
	content: '';
	position: absolute;
	width: 200%;
	pointer-events: none;
	height: 200%;
	background-color: hsl(var(--background));
	top: calc(-1 * (var(--percentage) + 105%));
	left: -50%;
	border-radius: 40%;
	animation: wave 12s infinite linear;
}

.waterContainer::after {
	content: '';
	position: absolute;
	pointer-events: none;
	width: 204%;
	height: 204%;
	background-color: hsl(var(--background) / 0.5);
	top: calc(-1 * (var(--percentage) + 105%));
	left: -52%;
	border-radius: 40%;
	animation: wave 12s infinite linear;
	animation-delay: 0.5s;
}

@keyframes wave {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
