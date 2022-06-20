/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: {
					400: '#ccc',
				},
				primary: '#d7eaf3',
				secondary: '#77b5d9',
				tertiary: "#14297d"
			},
		},
	},
	plugins: [],
};
