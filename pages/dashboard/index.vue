<template>
	<main class="h-full w-full pt-5">
		<!-- generated:content -->
		<GridLayout
			:gap="3"
			justify="end"
			items="center"
			:total="10"
			small="grid-rows-8 grid-cols-2"
			medium="md:grid-rows-3 md:grid-cols-3"
			large="lg:grid-rows-2 lg:grid-cols-4"
			class="items-stretch"
			:slots="{ 2: { colSpan: 2, rowSpan: 2 }, 3: { colSpan: 2 } }"
		>
			<template #slot-0>
				<BasicCard
					class="h-full"
					:title="'Total Revenue'"
					:value="'$45,231.89'"
					:muted="'+20.1% from last month'"
					:icon="'material-symbols-light:attach-money-rounded'"
				/>
			</template>
			<template #slot-1>
				<BasicCard
					class="h-full"
					:title="'Subscriptions'"
					:value="'+2350'"
					:muted="'+180.1% from last month'"
					:icon="'formkit:people'"
				/>
			</template>
			<template #slot-2>
				<CustomBarChartCard
					class="h-full"
					:title="'Downloads'"
					:desc="'Last 30 days'"
					:datas="datas"
					:options="[
						['Desktop', '12,345'],
						['Mobile', '56,789'],
					]"
				/>
			</template>
			<template #slot-3>
				<BasicCard
					class="h-full"
					:title="'Orders Processed'"
					:value="'3,214'"
					:muted="'+6.5% from last month'"
					:icon="'fluent:box-20-filled'"
				/>
			</template>
			<template #slot-4>
				<BasicCard
					class="h-full"
					:title="'Sales'"
					:value="'+12,234'"
					:muted="'+19% from last month'"
					:icon="'iconamoon:credit-card-thin'"
				/>
			</template>
			<template #slot-5>
				<BasicCard
					class="h-full"
					:title="'Active Now'"
					:value="'+573'"
					:muted="'+201 since last hour'"
					:icon="'majesticons:status-online-line'"
				/>
			</template>
			<template #slot-6>
				<BasicCard
					class="h-full"
					:title="'Ad Clicks'"
					:value="'9,876'"
					:muted="'+22.7% from last month'"
					:icon="'mdi:mouse'"
				/>
			</template>
			<template #slot-7>
				<BasicCard
					class="h-full"
					:title="'Conversion Rate'"
					:value="'5.2%'"
					:muted="'+0.9% from last month'"
					:icon="'mdi:chart-pie'"
				/>
			</template>
			<template #slot-8>
				<BasicCard
					class="h-full"
					:title="'Support Tickets'"
					:value="'289'"
					:muted="'-4.8% from last month'"
					:icon="'mdi:lifebuoy'"
				/>
			</template>
			<template #slot-9>
				<BasicCard
					class="h-full"
					:title="'Retention'"
					:value="'78%'"
					:muted="'+2.1% from last month'"
					:icon="'mdi:account-heart'"
				/>
			</template>
		</GridLayout>
		<!-- /generated:content -->
	</main>
</template>
<script setup lang="ts">
//

const data1 = [
	{ name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Nov', total: Math.floor(Math.random() * 5000) + 1000 },
	{ name: 'Dec', total: Math.floor(Math.random() * 5000) + 1000 },
]
const data2 = [
	{ name: 'Jan', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Feb', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Mar', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Apr', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'May', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Jun', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Jul', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Aug', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Sep', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Oct', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Nov', total: Math.floor(Math.random() * 4000) + 1000 },
	{ name: 'Dec', total: Math.floor(Math.random() * 4000) + 1000 },
]
const datas = [data1, data2]

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
