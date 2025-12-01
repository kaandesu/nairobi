interface PlanProps {
	title: string
	popular: boolean
	price: number
	description: string
	buttonText: string
	benefitList: string[]
}

export const pricing = {
	title: 'Pricing',
	slogan: 'Get unlimitted access',
	desc: 'Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.',
	paymentInterval: 'month',
	plans: [
		{
			title: 'Free',
			popular: false,
			price: 0,
			description:
				'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
			buttonText: 'Start Free Trial',
			benefitList: [
				'1 team member',
				'1 GB storage',
				'Upto 2 pages',
				'Community support',
				'AI assistance',
			],
		},
		{
			title: 'Premium',
			popular: true,
			price: 45,
			description:
				'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
			buttonText: 'Get starterd',
			benefitList: [
				'4 team member',
				'8 GB storage',
				'Upto 6 pages',
				'Priority support',
				'AI assistance',
			],
		},
		{
			title: 'Enterprise',
			popular: false,
			price: 120,
			description:
				'Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.',
			buttonText: 'Contact US',
			benefitList: [
				'10 team member',
				'20 GB storage',
				'Upto 10 pages',
				'Phone & email support',
				'AI assistance',
			],
		},
	] as PlanProps[],
}
