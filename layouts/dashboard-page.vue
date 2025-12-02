<template>
	<main
		class="grid-bg flex h-screen w-screen flex-col pt-16 dark:bg-background md:flex-row md:pt-0"
	>
		<sidebar2
			v-model:collapsed="navState.collapsed"
			v-model:open="navState.open"
		/>
		<main
			class="flex h-full w-full overflow-x-hidden transition-[margin]"
			:class="navState.collapsed ? 'md:ml-[3.7rem]' : 'md:ml-[15.15rem]'"
		>
			<div class="relative flex h-full w-full flex-col">
				<dark-button class="absolute right-5 top-5 z-10" />
				<section
					class="relative box-border h-[calc(100%-4rem)] w-full p-4 pt-4 md:p-6"
					:class="currentPageInfo.hideTitle ? 'h-full' : ''"
				>
					<div
						v-if="!currentPageInfo.hideTitle"
						class="text-3xl font-bold"
					>
						{{ currentPageInfo.title }}
					</div>
					<div
						v-if="!currentPageInfo.hideTitle"
						v-auto-animate
						class="pb-2"
					>
						<p v-if="currentPageInfo.desc">
							{{ currentPageInfo.desc }}
							<br />
						</p>
					</div>
					<slot />
				</section>
			</div>
		</main>
	</main>
</template>

<script setup lang="ts">
import { useAppStateStore } from '@/stores/app-state'
const { navState, currentPageInfo } = storeToRefs(useAppStateStore())
</script>
