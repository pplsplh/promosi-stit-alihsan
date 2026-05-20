/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          950: '#0a1628',
          900: '#0d1a30',
          800: '#0d2040',
          700: '#1B7A6B',
        },
        emerald: {
          950: '#0a1a0f',
          900: '#1B4332',
        },
        gold: {
          50: '#FDF8EE',
          100: '#F5E6CC',
          200: '#E8C97A',
          300: '#D4AF50',
          400: '#C9A84C',
          500: '#A07830',
          600: '#8B6914',
        },
      },
    },
  },
  plugins: [],
};
