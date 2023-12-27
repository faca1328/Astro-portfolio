/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
	  ],
	  theme: {
		screens: {
	  
		  'sm': '620px',
	
		  'md': '910px'
		},
		extend: {
		  screens: {
			'phone': '440px',
			
		  },
		  keyframes: {
			bounce: {
			  '0%, 100%': { transform: 'translate3d(0,0,0)' },
			  '70%': { transform: 'translate3d(0, -10px, 0)' },
			  '90%': { transform: 'translate3d(0, -5px, 0)' },
	
			},
		  },
		  animation: {
			'bounce-arrow': 'bounce 1s linear 2',
		  },
		},
	  },
	plugins: [],
}
