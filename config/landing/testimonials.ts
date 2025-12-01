interface ReviewProps {
	image: string
	name: string
	userName: string
	comment: string
	rating: number
}

export const testimonials = {
	title: 'Testimonials',
	slogan: 'Hear What Our 1000+ Clients Say',
	reviewList: [
		{
			image: 'https://github.com/shadcn.png',
			name: 'John Doe',
			userName: 'Product Manager',
			comment:
				'Wow Vue + Shadcn-Vue is awesome!. This template lets me change colors, fonts and images to match my brand identity. ',
			rating: 5.0,
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'Sophia Collins',
			userName: 'Cybersecurity Analyst',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. ',
			rating: 4.8,
		},

		{
			image: 'https://github.com/shadcn.png',
			name: 'Adam Johnson',
			userName: 'Chief Technology Officer',
			comment:
				'Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
			rating: 4.9,
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'Ethan Parker',
			userName: 'Data Scientist',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua. Ut enim ad minim veniam.',
			rating: 5.0,
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'Ava Mitchell',
			userName: 'IT Project Manager',
			comment:
				'Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud incididunt consectetur adipiscing elit.',
			rating: 5.0,
		},
		{
			image: 'https://github.com/shadcn.png',
			name: 'Isabella Reed',
			userName: 'DevOps Engineer',
			comment:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			rating: 4.9,
		},
	] as ReviewProps[],
}
