/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-green': 'linear-gradient(150deg, rgba(0,0,0,0) 60%, rgba(21,106,42,1) 100%)',
				'stars-sm': "url('../public/stars-mobile.png')",
				'stars-lg': "url('../public/stars-large.png')"
			  },
			colors: {
				// primary: '#14cb42', // #06AA06
				// secondary : '#f3ea78',
				// background: '#FFFFFF',
				// // background: '#F1F7FC',
				// // background: '#efeff1',
				// textPrimary: '#0F141A',
				// textSecondary: '#1E2736',
				// textTertiary: '#1E2736',
				primary: '#14cb42',
				primaryHover: '#3fec6b',
				gradient: '#156A2A',
				secondary : '#f3ea78',
				background: '#0f141a',
				surface:'#1e2736',
				textPrimary: '#efeff1',
				textSecondary: '#c8c8c8',
				textTertiary: '#98979d',
			}
		},
	},
	plugins: [],
}

// linear-gradient(135deg, rgba(15,20,26,1) 60%, rgba(21,106,42,1) 100%)