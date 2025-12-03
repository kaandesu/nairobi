<script setup lang="ts">
import { Cloud } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from '@/components/ui/empty'
</script>

<template>
	<Empty class="border border-dashed">
		<EmptyHeader>
			<EmptyMedia variant="icon">
				<Cloud />
			</EmptyMedia>
			<EmptyTitle>Storage Empty</EmptyTitle>
			<EmptyDescription>
				Upload relevant files to your work to reference in the chat.
			</EmptyDescription>
		</EmptyHeader>
		<EmptyContent>
			<Button variant="outline" size="sm"> Upload Files </Button>
		</EmptyContent>
	</Empty>
</template>
