module.exports = {
  // mode: 'jit',
  purge: ['./src/components/**/*.{js,jsx,ts,tsx}', './src/pages/**/*.{js,jsx,ts,tsx}'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'green-1': '#009A5E',
        'green-2': '#045F34',
        'gray-dark': '#1c1c1e',
        'gray-darker': '#101010',
        'red-light': '#AA3838',
        'red-lighter': '#b24c4c',
      },
    },
  },

  variants: {
    extend: {
      opacity: ['disabled'],
    },
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
