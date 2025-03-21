import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-gradient': 'linear-gradient(to top, #0B0A0A, #0D0C0C)',
      },
      colors: {
        black: {
          '300': '#242527',
          '400': '#1A1B1C',
          '700': '#0D0C0C',
          '900': '#0B0A0A',
        },
        'purple-1': '#1E1F2A',
        'purple-2': '#37394E',
        'purple-3': '#EEF0FF',
        'beige-1': '#fff0db',
        'beige-2': '#FFD700',
        'pastel-red': '#FF3131',
      },
      screens: {
        xxxs: '320px',
        xxs: '385px',
        s: '425px',
        xs: '575px',
        xl: '1200px',
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        semibold: '600',
        bold: '700',
      },
      height: {
        '570': '2160px',
      },
      maxWidth: {
        '3xl': '1920px',
        '90': '22.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
