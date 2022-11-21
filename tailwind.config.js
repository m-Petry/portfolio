/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
            '0%': {
                opacity: '0',
            },
            '50%': {
                opacity: '1',
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(-0.5rem)'
            },
        },
    },
    animation: {
        'fade-in-up': 'fade-in-up 1.7s ease-out infinite',
    }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  important: true
}