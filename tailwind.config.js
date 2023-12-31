/** @type {import('tailwindcss').Config} */
export const darkMode = ['class'];
export const content = [
	'./pages/**/*.{ts,tsx}',
	'./components/**/*.{ts,tsx}',
	'./app/**/*.{ts,tsx}',
	'./src/**/*.{ts,tsx}',
];
export const theme = {
	container: {
		center: true,
		padding: '2rem',
		screens: {
			'2xl': '1400px',
		},
	},
	extend: {
		colors: {
			softblue: '#5368DF',
			softred: '#FA5757',
			grayishblue: '#9194A1',
			verydarkblue: '#252B46',
		},
		fontFamily: {
			rubik: ['Rubik', 'sans'],
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
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out',
		},
	},
};
// eslint-disable-next-line no-undef
export const plugins = [require('tailwindcss-animate')];
