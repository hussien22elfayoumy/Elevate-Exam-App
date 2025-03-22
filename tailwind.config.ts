import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: 'rgba(var(--brand))',
        'brand-light': 'rgba(var(--brand-light))',
        'brand-dark': 'rgba(var(--brand-dark))',
        'my-grey': {
          0: 'rgba(var(--my-grey-0))',
          50: 'rgba(var(--my-grey-50))',
          100: 'rgba(var(--my-grey-100))',
          200: 'rgba(var(--my-grey-200))',
          300: 'rgba(var(--my-grey-300))',
          400: 'rgba(var(--my-grey-400))',
          500: 'rgba(var(--my-grey-500))',
          600: 'rgba(var(--my-grey-600))',
          700: 'rgba(var(--my-grey-700))',
          800: 'rgba(var(--my-grey-800))',
          900: 'rgba(var(--my-grey-900))',
        },
      },
    },
  },
  plugins: [],
};
export default config;
