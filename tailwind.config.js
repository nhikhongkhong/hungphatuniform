module.exports = {
  // mode: 'jit',
  purge: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/hoc/**/*.{js,jsx,ts,tsx}',
  ],

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
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        marqueeStop: 'marquee2 100s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
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
