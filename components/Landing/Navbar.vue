<script lang="ts" setup>
import { ChevronsDown } from 'lucide-vue-next'
import { landing } from '@/config'
const { routeList, features } = landing.Navbar
const { label, featureList } = features
</script>

<template>
	<header
		:class="{
			'sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between rounded-2xl border bg-card p-2 shadow-md md:w-[70%] lg:w-[75%] lg:max-w-screen-xl': true,
		}"
	>
		<a href="/" class="flex items-center text-lg font-bold">
			<ChevronsDown
				class="mr-2 h-9 w-9 rounded-lg border bg-gradient-to-tr from-primary via-primary/70 to-primary text-white"
			/>
			Dashboard
		</a>

		<!-- Desktop -->
		<NavigationMenu class="hidden lg:block">
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger class="bg-card text-base">
						{{ label }}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div class="grid w-[600px] grid-cols-2 gap-5 p-4">
							<img
								src="https://www.radix-vue.com/logo.svg"
								alt="Beach"
								class="h-full w-full rounded-md object-cover"
							/>
							<ul class="flex flex-col gap-2">
								<li
									v-for="{
										title,
										description,
									} in featureList"
									:key="title"
									class="rounded-md p-3 text-sm hover:bg-muted"
								>
									<p
										class="mb-1 font-semibold leading-none text-foreground"
									>
										{{ title }}
									</p>
									<p
										class="line-clamp-2 text-muted-foreground"
									>
										{{ description }}
									</p>
								</li>
							</ul>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<NavigationMenuLink asChild>
						<Button
							v-for="{ href, label } in routeList"
							:key="label"
							as-child
							variant="ghost"
							class="justify-start text-base"
						>
							<a :href="href">
								{{ label }}
							</a>
						</Button>
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>

		<div class="flex items-center justify-center gap-x-4">
			<DarkButton />
		</div>
	</header>
</template>
