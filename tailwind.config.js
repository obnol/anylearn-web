module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'anylearn-blue-dark': '#3d5a80',
        'anylearn-blue': '#98c1d9',
        'anylearn-blue-light': '#e0fbfc',
        'anylearn-accent': '#ee6c4d',
        'anylearn-contrast': '#293241'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
