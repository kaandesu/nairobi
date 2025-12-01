<template>
	<aside
		:class="[
			'fixed left-0 right-0 top-0 z-50 w-full transition-[width] dark:border-r dark:border-r-border md:bottom-0 md:right-auto',
			,
			isCollapsed ? 'md:w-14' : 'md:w-60',
		]"
	>
		<layout>
			<section
				class="sticky top-0 flex flex-none items-center justify-between bg-primary p-4 px-4 py-3 text-white shadow-lg dark:bg-background"
			>
				<div
					:class="['flex items-center', !isCollapsed ? 'gap-2' : '']"
				>
					<Avatar
						class="rounded-md bg-white p-2 transition-all"
						:class="isCollapsed ? '-ml-2 h-6 w-6 p-2' : 'h-8 w-8'"
					>
						<AvatarImage
							v-if="config.sidebar.logo"
							:src="config.sidebar.logo"
							alt="logo"
						/>
						<AvatarFallback v-if="config.sidebar.logoFallback">{{
							config.sidebar.logoFallback
						}}</AvatarFallback>
					</Avatar>
					<div
						:class="[
							'ml-3 flex flex-col justify-end truncate',
							isCollapsed ? 'invisible w-0' : 'visible w-auto',
						]"
					>
						<span class="font-medium">{{
							$t(config.sidebar.title ?? '')
						}}</span>
						<span class="text-xs">{{ config.sidebar.desc }}</span>
					</div>
				</div>

				<!-- Toggle Button in mobile -->
				<Drawer v-model:open="drawerOpen">
					<DrawerTrigger as-child>
						<Button
							class="md:hidden"
							variant="ghost"
							size="icon"
							aria-label="Toggle Navigation"
							aria-controls="dashboard-menu"
						>
							<Icon
								v-if="!drawerOpen"
								size="1.5rem"
								name="line-md:close-to-menu-alt-transition"
							/>
							<Icon v-else size="1.5rem" name="line-md:close" />
						</Button>
					</DrawerTrigger>
					<DrawerContent class="bg-primary dark:bg-background">
						<Nav2
							id="dashboard-menu"
							:class="[
								'h-full flex-1 overflow-y-auto overflow-x-hidden text-black transition-[max-height] dark:bg-background dark:text-white',
								!navOpened ? 'overflow-hidden py-2' : '',
							]"
							v-model:collapsed="isCollapsed"
							v-model:drawerOpen="drawerOpen"
							v-model:pages="config.sidebar.pages"
						/>
					</DrawerContent>
				</Drawer>
			</section>

			<Nav2
				id="dashboard-menu"
				v-if="$viewport.isGreaterOrEquals('md')"
				:class="
					cn(
						'h-full flex-1 overflow-y-auto overflow-x-hidden bg-primary text-white transition-[max-height] dark:bg-background',
						navOpened
							? 'max-h-screen'
							: 'max-h-0 overflow-hidden py-0 md:max-h-screen md:py-2',
					)
				"
				v-model:collapsed="isCollapsed"
				v-model:pages="config.sidebar.pages"
			/>

			<Button
				@click="isCollapsed = !isCollapsed"
				size="icon"
				variant="outline"
				class="absolute -right-5 top-1/2 hidden rounded-full md:inline-flex"
			>
				<Icon
					size="1.25rem"
					:key="`${isCollapsed}`"
					:name="
						!isCollapsed
							? 'line-md:chevron-small-double-left'
							: 'line-md:chevron-small-double-right'
					"
				/>
			</Button>
		</layout>
	</aside>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useConfigStore } from '../stores/config'
import { tours } from '~/config/tours'

const drawerOpen = ref<boolean>(false)
const config = useConfigStore()
const navOpened = defineModel<boolean>('open')
const isCollapsed = defineModel<boolean>('collapsed')

const viewport = useViewport()
watch(viewport.breakpoint, (to, from) => {
	if (to == 'sm' && from == 'md') isCollapsed.value = false
})

onMounted(() => {
	if (viewport.isGreaterOrEquals('tablet'))
		startTour('sidebar', tours.sidebarTourSetup(), true)
})
</script>
