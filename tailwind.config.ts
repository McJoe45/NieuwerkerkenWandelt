import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#2c2416',
          light:   '#5c5040',
        },
        moss: {
          DEFAULT: '#6b7c5a',
          light:   '#8fa07a',
        },
        earth:  '#a08060',
        cream: {
          DEFAULT: '#f9f5ee',
          dark:    '#f0e9db',
        },
        paper:  '#fdfbf7',
        sage:   '#d4ddc8',
        mist:   '#e8ede2',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        body:  ['var(--font-body)',  'system-ui', 'sans-serif'],
        mono:  ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        card: '12px',
        pill: '999px',
      },
      boxShadow: {
        card:  '0 2px 16px rgba(107,124,90,0.08)',
        hover: '0 6px 24px rgba(107,124,90,0.14)',
      },
    },
  },
  plugins: [],
}

export default config
