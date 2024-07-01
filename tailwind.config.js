/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Nunito Sans", "sans-serif"],
      
    },
    extend: {
      backgroundColor: {
        main: {
          light: 'var(--light-mode-background)',
          dark: 'var(--dark-mode-background)'
        },
        elements:{
          light: 'var(--light-mode-elements)',
          dark: 'var(--dark-mode-elements)'
        }
      },
      textColor: {
        main:{
          light: 'var(--light-mode-text)',
          dark:'var(--dark-mode-text)'
        }
      }
    },
  },
  // darkMode:'class',
  plugins: [],
}

