interface FAQProps {
	question: string
	answer: string
	value: string
}

export const fAQ = {
	title: 'FAQS',
	slogan: 'Common Questions',
	contactRedirect: 'Still have questions?',
	contactButtonLabel: 'Contact us',
	FAQList: [
		{
			question:
				'Duis aute irure dolor in reprehenderit in voluptate velit?',
			answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam consectetur sapiente, iste rerum reiciendis animi nihil nostrum sit quo, modi quod.',
			value: 'item-1',
		},
		{
			question:
				'Lorem ipsum dolor sit amet Consectetur natus dolor minus quibusdam?',
			answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis.',
			value: 'item-2',
		},
		{
			question: 'Excepteur sint occaecat cupidata non proident sunt?',
			answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
			value: 'item-3',
		},
		{
			question:
				'Enim ad minim veniam, quis nostrud exercitation ullamco laboris?',
			answer: 'consectetur adipisicing elit. Sint labore.',
			value: 'item-4',
		},
	] as FAQProps[],
}
