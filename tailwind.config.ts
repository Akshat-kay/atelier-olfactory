import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				serif: ['Cormorant Garamond', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// Mystical Palette
				mist: 'hsl(var(--mist))',
				midnight: 'hsl(var(--midnight))',
				charcoal: 'hsl(var(--charcoal))',
				ethereal: 'hsl(var(--ethereal))',
				'sage-green': 'hsl(var(--sage-green))',
				'sage-light': 'hsl(var(--sage-light))',
				gold: 'hsl(var(--gold))',
				platinum: 'hsl(var(--platinum))',
				// Seasonal Colors
				'spring-light': 'hsl(var(--spring-light))',
				'spring-accent': 'hsl(var(--spring-accent))',
				'summer-warm': 'hsl(var(--summer-warm))',
				'summer-accent': 'hsl(var(--summer-accent))',
				'autumn-mist': 'hsl(var(--autumn-mist))',
				'autumn-accent': 'hsl(var(--autumn-accent))',
				'winter-crystal': 'hsl(var(--winter-crystal))',
				'winter-accent': 'hsl(var(--winter-accent))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-mystical': 'var(--gradient-mystical)',
				'gradient-ethereal': 'var(--gradient-ethereal)',
				'gradient-sage': 'var(--gradient-sage)',
				'gradient-metallic': 'var(--gradient-metallic)',
			},
			boxShadow: {
				mystical: 'var(--shadow-mystical)',
				ethereal: 'var(--shadow-ethereal)',
				glow: 'var(--shadow-glow)',
			},
			transitionTimingFunction: {
				mystical: 'cubic-bezier(0.4, 0, 0.2, 1)',
				ethereal: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'mystical-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(1deg)' }
				},
				'ethereal-fade': {
					from: { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
					to: { opacity: '1', transform: 'translateY(0) scale(1)' }
				},
				'sage-glow': {
					from: { boxShadow: '0 0 20px hsl(var(--sage-green) / 0.3)' },
					to: { boxShadow: '0 0 40px hsl(var(--sage-green) / 0.6)' }
				},
				'mystical-shimmer': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'mystical-float': 'mystical-float 6s ease-in-out infinite',
				'ethereal-fade': 'ethereal-fade 1.2s ease-out forwards',
				'sage-glow': 'sage-glow 3s ease-in-out infinite alternate',
				'mystical-shimmer': 'mystical-shimmer 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;