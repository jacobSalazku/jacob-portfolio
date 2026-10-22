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
      boxShadow: {
        glow: '0 0 0 1px rgba(255,240,219,0.25), 0 10px 40px -10px rgba(255,240,219,0.25)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.8)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
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
        // Width of the page content, also used by the navigation bar
        site: '1240px',
        '3xl': '1920px',
        '90': '22.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
