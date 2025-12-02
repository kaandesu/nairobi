<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import {
	ProgressIndicator,
	ProgressRoot,
	type ProgressRootProps,
} from 'reka-ui'

const props = withDefaults(
	defineProps<
		ProgressRootProps & { class?: HTMLAttributes['class'] } & {
			indicatorClass?: HTMLAttributes['class']
		}
	>(),
	{
		modelValue: 0,
	},
)

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
	<ProgressRoot
		v-bind="delegatedProps"
		:class="
			cn(
				'relative h-2 w-full overflow-hidden rounded-full bg-primary/20',
				props.class,
			)
		"
	>
		<ProgressIndicator
			class="h-full w-full flex-1 bg-primary transition-all"
			:class="cn(props.indicatorClass)"
			:style="`transform: translateX(-${100 - (props.modelValue ?? 0)}%);`"
		/>
	</ProgressRoot>
</template>
