import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary))',
        'primary-light': 'rgba(var(--primary-light))',
        'primary-dark': 'rgba(var(--primary-dark))',
      },
    },
  },
  plugins: [],
};
export default config;
