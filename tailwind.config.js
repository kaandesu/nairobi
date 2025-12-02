import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	safelist: [
		'dark',
		'zinc',
		'rose',
		'green',
		'blue',
		'orange',
		'yellow',
		'violet',
	],
	prefix: '',

	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			boxShadow: {
				// Base versions
				liquid: 'inset 2px 2px 0px -2px hsl(var(--primary) / 0.7), inset 0 0 10px 1px hsl(var(--primary) / 0.7)',
				'liquid-destructive':
					'inset 2px 2px 0px -2px hsl(var(--destructive) / 0.7), inset 0 0 10px 1px hsl(var(--destructive) / 0.7)',
				'liquid-positive':
					'inset 2px 2px 0px -2px #22c55eaa, inset 0 0 10px 1px #22c55eaa',
				'liquid-info':
					'inset 2px 2px 0px -2px #3b82f6aa, inset 0 0 10px 1px #3b82f6aa',
				'liquid-warning':
					'inset 2px 2px 0px -2px #eab308aa, inset 0 0 10px 1px #eab308aa',
				'liquid-dark':
					'inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7), inset 0 0 10px 1px rgba(255, 255, 255, 0.7)',

				// Selected versions (stronger glow)
				'liquid-selected':
					'inset 2px 2px 0px -2px hsl(var(--primary) / 0.7), inset 0 0 20px 10px hsl(var(--primary) / 0.7)',
				'liquid-destructive-selected':
					'inset 2px 2px 0px -2px hsl(var(--destructive) / 0.7), inset 0 0 20px 10px hsl(var(--destructive) / 0.7)',
				'liquid-positive-selected':
					'inset 2px 2px 0px -2px #22c55eaa, inset 0 0 20px 10px #22c55eaa',
				'liquid-info-selected':
					'inset 2px 2px 0px -2px #3b82f6aa, inset 0 0 20px 10px #3b82f6aa',
				'liquid-warning-selected':
					'inset 2px 2px 0px -2px #eab308aa, inset 0 0 20px 10px #eab308aa',
				'liquid-dark-selected':
					'inset 2px 2px 0px -2px rgba(255, 255, 255, 0.7), inset 0 0 20px 10px rgba(255, 255, 255, 0.7)',
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'collapsible-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-collapsible-content-height)' },
				},
				'collapsible-up': {
					from: { height: 'var(--radix-collapsible-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'collapsible-down': 'collapsible-down 0.2s ease-in-out',
				'collapsible-up': 'collapsible-up 0.2s ease-in-out',
			},
		},
	},
	plugins: [animate],
}
