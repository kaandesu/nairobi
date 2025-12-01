import {
	Paintbrush,
	MessageCircle,
	TabletSmartphone,
	BadgeCheck,
	Goal,
	PictureInPicture,
	MousePointerClick,
	Newspaper,
} from 'lucide-vue-next'

interface FeaturesProps {
	icon: string
	title: string
	description: string
}

export const features = {
	title: 'Features',
	slogan: 'What Makes Us Different',
	desc: `
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Non ducimus reprehenderit architecto rerum similique facere
					odit deleniti necessitatibus quo quae.
    `,
	featureList: [
		{
			icon: 'tabletSmartphone',
			title: 'Mobile Friendly',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam, consectetur.',
		},
		{
			icon: 'badgeCheck',
			title: 'Social Proof',
			description:
				'Lorem ipsum dolor sit amet consectetur. Natus consectetur, odio ea accusamus aperiam.',
		},
		{
			icon: 'goal',
			title: 'Targeted Content',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. odio ea accusamus aperiam.',
		},
		{
			icon: 'pictureInPicture',
			title: 'Strong Visuals',
			description:
				'Lorem elit. A odio velit cum aliquam. Natus consectetur dolores, odio ea accusamus aperiam.',
		},
		{
			icon: 'mousePointerClick',
			title: 'Clear CTA',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing. odio ea accusamus consectetur.',
		},
		{
			icon: 'newspaper',
			title: 'Clear Headline',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. A odio velit cum aliquam. Natus consectetur.',
		},
	] as FeaturesProps[],
	iconMap: {
		tabletSmartphone: TabletSmartphone,
		badgeCheck: BadgeCheck,
		goal: Goal,
		pictureInPicture: PictureInPicture,
		paintbrush: Paintbrush,
		mousePointerClick: MousePointerClick,
		messageCircle: MessageCircle,
		newspaper: Newspaper,
	} as Record<string, HTMLElement>,
}
