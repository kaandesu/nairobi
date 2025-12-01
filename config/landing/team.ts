import { LinkedinIcon, GithubIcon, XIcon } from 'lucide-vue-next'

interface SocialNetworkProps {
	name: string
	url: string
}

interface TeamProps {
	imageUrl: string
	firstName: string
	lastName: string
	positions: string[]
	socialNetworks: SocialNetworkProps[]
}

export const team = {
	title: 'Team',
	slogan: 'The Company Dream Team',
	teamList: [
		{
			imageUrl:
				'https://media.licdn.com/dms/image/v2/D5603AQErGIZ6iL7Ojg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1702656759738?e=1747267200&v=beta&t=LMJ6zvYfldIZAxSknFLWQqCy4oZR-Xfj7ZffIZbAIeg',
			firstName: 'I. Kaan',
			lastName: 'Yilmaz',
			positions: ['Front-end Developer'],
			socialNetworks: [
				{
					name: 'LinkedIn',
					url: 'https://www.linkedin.com/in/ismet-kaan-yilmaz-809175245/',
				},
				{
					name: 'Github',
					url: 'https://github.com/kaandesu',
				},
			],
		},
		{
			imageUrl:
				'https://media.licdn.com/dms/image/v2/D4D22AQE4Qyp-ALfY_A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728851243078?e=1745452800&v=beta&t=CRkSN8uoiVXO9yn3w6_k0kO5HcoyIBB-OhmP0IvHnfA',
			firstName: 'Kaan',
			lastName: 'Yilmaz',
			positions: ['Back-end Developer'],
			socialNetworks: [
				{
					name: 'LinkedIn',
					url: 'https://www.linkedin.com/in/ismet-kaan-yilmaz-809175245/',
				},
				{
					name: 'Github',
					url: 'https://github.com/kaandesu',
				},
			],
		},
	] as TeamProps[],
	socialIcon: (socialName: string) => {
		switch (socialName) {
			case 'LinkedIn':
				return LinkedinIcon
			case 'Github':
				return GithubIcon
			case 'X':
				return XIcon
		}
	},
}
