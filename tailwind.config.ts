import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        brand: 'rgba(var(--brand))',
        'brand-light': 'rgba(var(--brand-light))',
        'brand-dark': 'rgba(var(--brand-dark))',
        'my-grey': {
          '0': 'rgba(var(--my-grey-0))',
          '50': 'rgba(var(--my-grey-50))',
          '100': 'rgba(var(--my-grey-100))',
          '150': 'rgba(var(--my-grey-150))',
          '200': 'rgba(var(--my-grey-200))',
          '300': 'rgba(var(--my-grey-300))',
          '400': 'rgba(var(--my-grey-400))',
          '500': 'rgba(var(--my-grey-500))',
          '600': 'rgba(var(--my-grey-600))',
          '700': 'rgba(var(--my-grey-700))',
          '800': 'rgba(var(--my-grey-800))',
          '900': 'rgba(var(--my-grey-900))',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      // borderRadius: {
      //   lg: 'var(--radius)',
      //   md: 'calc(var(--radius) - 2px)',
      //   sm: 'calc(var(--radius) - 4px)',
      // },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
