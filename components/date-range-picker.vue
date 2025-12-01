<template>
	<Popover>
		<PopoverTrigger as-child>
			<Button
				variant="outline"
				:class="
					cn(
						'h-5 justify-start text-left font-normal',
						!dateValue && 'text-muted-foreground',
					)
				"
			>
				<Icon name="mdi:calendar-blank-outline" class="mr-2 h-4 w-4" />
				<template v-if="dateValue?.start">
					<template v-if="dateValue.end">
						{{
							df.format(
								dateValue.start.toDate(getLocalTimeZone()),
							)
						}}
						-
						{{
							df.format(dateValue.end.toDate(getLocalTimeZone()))
						}}
					</template>

					<template v-else>
						{{
							df.format(
								dateValue.start.toDate(getLocalTimeZone()),
							)
						}}
					</template>
				</template>
				<template v-else> Pick a date </template>
			</Button>
		</PopoverTrigger>
		<PopoverContent class="w-auto p-0">
			<RangeCalendar
				v-model="dateValue"
				initial-focus
				:number-of-months="2"
				@update:start-value="
					(startDate) => (dateValue!.start = startDate)
				"
			/>
		</PopoverContent>
	</Popover>
</template>

<script setup lang="ts">
import type { DateRange } from 'radix-vue'

import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { RangeCalendar } from '@/components/ui/range-calendar'
import { DateFormatter, getLocalTimeZone } from '@internationalized/date'

const df = new DateFormatter('en-US', {
	dateStyle: 'medium',
})

const dateValue = defineModel<DateRange>()
</script>
