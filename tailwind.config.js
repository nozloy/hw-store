/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			screens: {
				xs: '410px',
				// => @media (min-width: 410px) { ... }
			},
			textUnderlineOffset: {
				20: '20px',
			},
			keyframes: {
				rise: {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' },
				},
			},
			animation: {
				rise: 'rise 0.3s ease-in-out',
			},
		},
	},
	plugins: [],
}
