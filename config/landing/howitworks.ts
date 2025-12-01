interface HowItWorksProps {
	badgeTitle: string
	title: string
	description: string
	image: string
}

export const howitworks = {
	title: 'How It Works',
	slogan: 'Step-by-Step Process',
	HowItWorksList: [
		{
			badgeTitle: 'Contribute',
			title: 'Make a Difference with Every Contribution',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.',
			image: 'https://picsum.photos/200',
		},
		{
			badgeTitle: 'Discover',
			title: 'Create an Impact with Every Choice',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, sint reiciendis quidem iure veritatis optio facere tenetur.',
			image: 'https://picsum.photos/201',
		},
		{
			badgeTitle: 'Innovate',
			title: 'Make Every Action Count',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, odit similique quasi sint.',
			image: 'https://picsum.photos/202',
		},
		{
			badgeTitle: 'Collaborate',
			title: 'Tackle this challenge together',
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fugiat, quasi sint reiciendis quidem iure.',
			image: 'https://picsum.photos/203',
		},
	] as HowItWorksProps[],
}
