<template>
	<NuxtLayout :class="theme">
		<NuxtLoadingIndicator :color="theme" height="5" />
		<NuxtPage />
		<Toaster />
	</NuxtLayout>
</template>
<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
import { useAppStateStore } from '@/stores/app-state'
const app = useAppStateStore()
const { updateActivePage } = app
const { theme } = storeToRefs(app)
const route = useRoute()

onMounted(() => {
	app.changeTheme(theme.value)
	updateActivePage(route.name)
})
watch(
	() => route.name,
	() => updateActivePage(route.name),
)
</script>
