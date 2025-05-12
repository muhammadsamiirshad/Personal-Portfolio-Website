import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        purple: {
          600: '#8b5cf6',
          700: '#7c3aed',
        },
        slate: {
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
        'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.from-cyan-500': { '--tw-gradient-from': '#06b6d4', '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, rgb(6 182 212 / 0))' },
        '.to-purple-600': { '--tw-gradient-to': '#8b5cf6' },
        '.from-cyan-500\\/20': { '--tw-gradient-from': 'rgb(6 182 212 / 0.2)', '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, rgb(6 182 212 / 0))' },
        '.to-purple-600\\/20': { '--tw-gradient-to': 'rgb(139 92 246 / 0.2)' },
        '.to-cyan-600': { '--tw-gradient-to': '#0891b2' },
        '.bg-clip-text': { '-webkit-background-clip': 'text', 'background-clip': 'text' },
        '.text-transparent': { 'color': 'transparent' },
      });
    }),
  ],
};

export default config;
