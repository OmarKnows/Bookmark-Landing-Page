/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				tomato: '#36384D',
				darkslategrey: '#C5C5C5',
				charcoalgrey: '#FD5579',
				grey: '#FE6A3C',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans'],
			},
		},
	},
	plugins: [],
};
