<template>
	<main class="h-full w-full pt-5">
		<!-- generated:content -->
		<GridLayout
			:gap="3"
			justify="end"
			items="center"
			:total="9"
			small="grid-rows-8 grid-cols-2"
			medium="md:grid-rows-3 md:grid-cols-3"
			large="lg:grid-rows-2 lg:grid-cols-4"
		>
			<template #slot-0>
				<BasicCard
					class="h-full"
					:title="'New Users'"
					:value="'1,982'"
					:muted="'+14.7% from last week'"
					:icon="'mdi:account-plus'"
				/>
			</template>
			<template #slot-1>
				<BasicCard
					class="h-full"
					:title="'Daily Active Users'"
					:value="'12,350'"
					:muted="'+9.2% from yesterday'"
					:icon="'mdi:account-group'"
				/>
			</template>
			<template #slot-2>
				<BasicCard
					class="h-full"
					:title="'Total Products Sold'"
					:value="'8,721'"
					:muted="'+11.5% from last quarter'"
					:icon="'mdi:cart'"
				/>
			</template>
			<template #slot-3>
				<BasicCard
					class="h-full"
					:title="'Customer Satisfaction'"
					:value="'92%'"
					:muted="'+3.4% from last month'"
					:icon="'mdi:emoticon-happy'"
				/>
			</template>
			<template #slot-4>
				<BasicCard
					class="h-full"
					:title="'Pending Orders'"
					:value="'439'"
					:muted="'-5.1% from last week'"
					:icon="'mdi:clock-alert'"
				/>
			</template>
			<template #slot-5>
				<BasicCard
					class="h-full"
					:title="'Refund Requests'"
					:value="'78'"
					:muted="'+2.9% from last month'"
					:icon="'mdi:cash-refund'"
				/>
			</template>
			<template #slot-6>
				<BasicCard
					class="h-full"
					:title="'Bounce Rate'"
					:value="'38%'"
					:muted="'-1.2% from last week'"
					:icon="'mdi:arrow-u-down-left'"
				/>
			</template>
			<template #slot-7>
				<BasicCard
					class="h-full"
					:title="'Tickets Resolved'"
					:value="'521'"
					:muted="'+17.6% from last month'"
					:icon="'mdi:check-circle'"
				/>
			</template>
			<template #slot-8>
				<BasicCard
					class="h-full"
					:title="'Avg. Session Duration'"
					:value="'5m 43s'"
					:muted="'+15 seconds from last week'"
					:icon="'mdi:timer'"
				/>
			</template>
		</GridLayout>
		<!-- /generated:content -->
	</main>
</template>
<script setup lang="ts">
defineExpose({
	showDatePicker: true,
	showDownloadButton: true,
	onDownload: () => {
		createToast({
			message: 'Download started!',
			toastOps: {
				description: 'Downloading...',
			},
			type: 'info',
		})()
	},
})
</script>
