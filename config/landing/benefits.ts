import {
	Sparkle,
	Tag,
	Paintbrush,
	Blocks,
	LineChart,
	Wallet,
} from 'lucide-vue-next'

interface BenefitsProps {
	icon: string
	title: string
	description: string
}

export const benefits = {
	title: 'Benefits',
	slogan: 'Your Shortcut to Success',
	desc: `
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Non ducimus reprehenderit architecto rerum similique facere
					odit deleniti necessitatibus quo quae.
    `,
	benefitList: [
		{
			icon: 'blocks',
			title: 'Build Brand Trust',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.',
		},
		{
			icon: 'lineChart',
			title: 'More Leads',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, natus consectetur.',
		},
		{
			icon: 'wallet',
			title: 'Higher Conversions',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus consectetur. A odio velit cum aliquam',
		},
		{
			icon: 'sparkle',
			title: 'Test Marketing Ideas',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur dolores.',
		},
	] as BenefitsProps[],
	iconMap: {
		sparkle: Sparkle,
		tag: Tag,
		paintbrush: Paintbrush,
		blocks: Blocks,
		lineChart: LineChart,
		wallet: Wallet,
	} as Record<string, HTMLElement>,
}
