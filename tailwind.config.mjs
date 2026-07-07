/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0ea5e9',
          hover: '#0284c7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        serif: ['Lora', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            color: 'var(--text-primary)',
            a: {
              color: '#0ea5e9',
              '&:hover': { color: '#0284c7' },
            },
            code: {
              backgroundColor: 'var(--bg-code)',
              padding: '0.2em 0.4em',
              borderRadius: '4px',
              fontWeight: '400',
            },
            'pre code': {
              backgroundColor: 'transparent',
              padding: '0',
            },
            blockquote: {
              borderLeftColor: '#0ea5e9',
              color: 'var(--text-secondary)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
