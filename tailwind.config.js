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
                transform: 'translateY(-1rem)'
            },
        },
        'fade-out-up': {
            'from': {
                opacity: '1',
                transform: 'translateY(0px)'
            },
            'to': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
        }
    },
    animation: {
        'fade-in-up': 'fade-in-up 1.7s ease-out infinite',
        'fade-out-up': 'fade-out-up 0.5s ease-out'
    }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  important: true
}