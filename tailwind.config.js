module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'body': ['Open Sans'],
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'lato': ['Lato', 'Arial', 'sans-serif'],

      'berkshire': ['Berkshire Swash, cursive', 'Arial', 'sans-serif'],

      'Heading': ['Berkshire Swash , cursive', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
