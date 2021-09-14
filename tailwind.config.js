const colors = require('tailwindcss/colors');

module.exports = {
	purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			main: ['Work Sans', 'ui-sans-serif'],
			title: ['Oswald', 'ui-serif'],
			sub: ['Hind Madurai', 'ui-monospace'],
		},
		colors: {
			main: '#438BFF',
			black: colors.black,
			white: colors.white,
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
