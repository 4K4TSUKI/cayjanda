const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
	  colors: {
		"foreground": "var(--foreground-rgb)",
		"default": {
			'50': '#4f4f4f',
			'100': '#4f4f4f',
			'200': '#4f4f4f',
			'300': '#4f4f4f',
			'400': '#4f4f4f',
			'500': '#4f4f4f',
			'600': '#4f4f4f',
			'700': '#4f4f4f',
			'800': '#454545',
			'900': '#3d3d3d',
			'950': '#000000',
			DEFAULT:"#4f4f4f"
		},
		'black': {
			'50': '#f5f5f5',
			'100': '#e8e8e8',
			'200': '#d1d1d1',
			'300': '#b0b0b0',
			'400': '#878787',
			'500': '#6e6e6e',
			'600': '#5c5c5c',
			'700': '#4f4f4f',
			'800': '#454545',
			'900': '#3d3d3d',
			'950': '#000000',
		},
		
	  }
    },
  },
  plugins: [nextui()],
}
