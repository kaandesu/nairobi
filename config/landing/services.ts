interface ServiceProps {
	title: string
	pro: boolean
	description: string
}

export const services = {
	serviceList: [
		{
			title: 'Custom Domain Integration',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit adipisicing.',
			pro: false,
		},
		{
			title: 'Social Media Integrations',
			description:
				'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dicta.',
			pro: false,
		},
		{
			title: 'Email Marketing Integrations',
			description: 'Lorem dolor sit amet adipisicing.',
			pro: false,
		},
		{
			title: 'SEO Optimization',
			description: 'Lorem ipsum dolor sit amet consectetur.',
			pro: true,
		},
	] as ServiceProps[],
}
