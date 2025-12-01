interface RouteProps {
	href: string
	label: string
}

interface FeatureProps {
	title: string
	description: string
}

export const navbar = {
	routeList: [
		{
			href: '#testimonials',
			label: 'Testimonials',
		},
		{
			href: '#team',
			label: 'Team',
		},
		{
			href: '#contact',
			label: 'Contact',
		},
		{
			href: '#faq',
			label: 'FAQ',
		},
	] as RouteProps[],
	features: {
		label: 'Features',
		featureList: [
			{
				title: 'Showcase Your Value ',
				description: 'Highlight how your product solves user problems.',
			},
			{
				title: 'Build Trust',
				description:
					'Leverages social proof elements to establish trust and credibility.',
			},
			{
				title: 'Capture Leads',
				description:
					'Make your lead capture form visually appealing and strategically.',
			},
		] as FeatureProps[],
	},
}
