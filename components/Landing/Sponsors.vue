<script setup lang="ts">
import { Marquee } from '@selemondev/vue3-marquee'
import { landing } from '@/config'
const { sponsorList, iconMap } = landing.Sponsors
</script>

<template>
	<section id="sponsors" class="mx-auto max-w-[75%] pb-24 sm:pb-32">
		<h2 class="mb-6 text-center text-lg md:text-xl">Our Sponsors</h2>

		<div class="mx-auto">
			<Marquee
				class="gap-[3rem]"
				:pauseOnHover="true"
				:fade="true"
				innerClassName="gap-[3rem]"
			>
				<div v-for="{ icon, name } in sponsorList" :key="name">
					<div
						class="flex items-center text-xl font-medium md:text-2xl"
					>
						<component
							:is="iconMap[icon]"
							class="mr-2"
							stroke-width="3"
						/>
						{{ name }}
					</div>
				</div>
			</Marquee>
		</div>
	</section>
</template>
<style>
.marquee-flex-row[data-v-4f206fca] {
	display: flex;
	flex-direction: row;
}
.marquee-flex-column[data-v-4f206fca] {
	display: flex;
	flex-direction: column;
}
@keyframes marquee-left {
	0% {
		transform: translate(0);
	}
	to {
		transform: translate(calc(-100% - var(--gap)));
	}
}
.animate-marquee-left {
	animation: marquee-left var(--duration, 40s) linear infinite;
}
@keyframes marquee-up {
	0% {
		transform: translateY(0);
	}
	to {
		transform: translateY(calc(-100% - var(--gap)));
	}
}
.animate-marquee-up {
	animation: marquee-up var(--duration, 40s) linear infinite;
}
.justify-around {
	justify-content: space-around;
}
.gap-\[1rem\] {
	gap: 1rem;
}
.overflow-hidden {
	overflow: hidden;
}
@keyframes enter {
	0% {
		opacity: var(--tw-enter-opacity, 1);
		transform: translate3d(
				var(--tw-enter-translate-x, 0),
				var(--tw-enter-translate-y, 0),
				0
			)
			scale3d(
				var(--tw-enter-scale, 1),
				var(--tw-enter-scale, 1),
				var(--tw-enter-scale, 1)
			)
			rotate(var(--tw-enter-rotate, 0));
	}
}
@keyframes exit {
	to {
		opacity: var(--tw-exit-opacity, 1);
		transform: translate3d(
				var(--tw-exit-translate-x, 0),
				var(--tw-exit-translate-y, 0),
				0
			)
			scale3d(
				var(--tw-exit-scale, 1),
				var(--tw-exit-scale, 1),
				var(--tw-exit-scale, 1)
			)
			rotate(var(--tw-exit-rotate, 0));
	}
}
.\[--gap\:1rem\] {
	--gap: 1rem;
}
.group:hover .group-hover\:\[animation-play-state\:paused\] {
	animation-play-state: paused;
}
</style>
