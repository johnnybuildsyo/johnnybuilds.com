/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			display: ["var(--font-display)", "serif"]
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		typography: {
			DEFAULT: {
			css: {
			color: 'hsl(var(--foreground))',
			h1: {
				color: 'hsl(var(--foreground))',
			},
			h2: {
				color: 'hsl(var(--foreground))',
			},
			h3: {
				color: 'hsl(var(--foreground))',
			},
			h4: {
				color: 'hsl(var(--foreground))',
			},
			h5: {
				color: 'hsl(var(--foreground))',
			},
			h6: {
				color: 'hsl(var(--foreground))',
			},
			p: {
				color: 'hsl(var(--foreground))',
				textWrap: 'pretty'
			},
			strong: {
				color: 'hsl(var(--foreground))',
			},
			blockquote: {
				borderLeftColor: 'hsl(var(--foreground))',
				color: 'hsl(var(--foreground))',
				fontStyle: 'italic',
			},
			a: {
				color: 'hsl(var(--foreground))', // Ensure links are visible
				textDecoration: 'underline',
				fontWeight: '500', // Optional for better visibility
				'&:hover': {
				color: 'hsl(var(--foreground))',
				opacity: '0.8', // Slight hover effect
				},
			},
			img: {
				border: '2px solid rgba(122,122,122,.2)',
			},
			figcaption: {
				textAlign: 'center',
				width: '100%',
			},
			},
		},
      },
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	require("@tailwindcss/typography")
  ],
};
export default config;
