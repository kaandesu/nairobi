<template>
	<div
		:class="[
			'grid',
			'grid-flow-dense',
			'h-full w-full',
			`gap-${gap}`,
			small,
			medium,
			large,
		]"
	>
		<div
			v-for="index in total"
			:key="index"
			:style="`
        grid-column: span ${slots[index - 1]?.colSpan ?? 1} / span ${slots[index - 1]?.colSpan ?? 1};
        grid-row: span ${slots[index - 1]?.rowSpan ?? 1} / span ${slots[index - 1]?.rowSpan ?? 1};
`"
			:class="[slots[index]?.class ?? 'h-full w-full']"
		>
			<slot :name="'slot-' + (index - 1)" />
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	gap: number
	total: number
	small: string
	medium: string
	large: string
	slots: Record<
		number,
		{ class?: string; colSpan?: number; rowSpan?: number }
	>
}

const {
	total = 4,
	gap = 5,
	small = 'grid-rows-4 grid-cols-1',
	medium = '',
	large = '',
	slots = {},
} = defineProps<Props>()
</script>
