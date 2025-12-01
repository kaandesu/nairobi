<template>
	<Card>
		<CardHeader class="relative">
			<CardTitle>{{ props.title }}</CardTitle>
			<CardDescription v-if="props.desc" class="-mb-[1.88rem]">
				{{ props.desc }}
			</CardDescription>
			<div
				class="w-55 absolute right-0 top-0 flex h-14 rounded-bl-lg rounded-tr-lg border-b-[1px] border-l-[1px] bg-card text-card-foreground"
			>
				<Button
					@click="() => (selected = index)"
					class="h-10 w-full rounded-bl-lg"
					:class="[
						{
							'!bg-accent':
								selected == index && props.options?.length != 1,
						},
						{ 'pointer-events-none': props.options?.length == 1 },
					]"
					variant="ghost"
					v-for="(opt, index) in props.options"
					:key="opt[0]"
				>
					<div
						class="pointer-events-none flex h-full w-full flex-col items-center justify-center"
					>
						<label class="text-xs text-muted-foreground">
							{{ opt[0] }}
						</label>
						<label
							class="text-lg font-semibold leading-none sm:text-xl"
							>{{ opt[1] }}</label
						>
					</div>
				</Button>
			</div>
		</CardHeader>
		<CardContent class="pl-2">
			<BarChart
				class="h-[11rem]"
				:data="props.datas[selected]"
				:categories="['total']"
				:index="'name'"
				:rounded-corners="4"
			/>
		</CardContent>
	</Card>
</template>

<script setup lang="ts">
interface Props {
	title: string
	desc?: string
	options?: string[][]
	datas: any[][]
}

const selected = ref<number>(0)

const props = defineProps<Props>()
</script>
