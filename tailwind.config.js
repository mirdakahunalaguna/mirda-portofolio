/** @type {import('tailwindcss').Config} */
 
module.exports = {
  darkMode: 'class',
  
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: { 
      animation: {
        'fade-in-down': 'fade-in-down 1.5s ease-out',
        'fade-in-up': 'fade-in-up 1.5s ease-out',
        'fade-in-right': 'fade-in-right 1.5s ease-out',
        'fade-in-left': 'fade-in-left 1.5s ease-out',
      },
       keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(5px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  
  plugins: [],
}