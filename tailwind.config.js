import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        main: 'rgba(var(--main-color), <alpha-value>)',
        background: 'rgba(var(--background-color), <alpha-value>)',
        txtcolor: 'rgba(var(--text-color), <alpha-value>)',
        container: 'rgba(var(--container-background-color), <alpha-value>)',
      },
    },
  },
  plugins: [
    typography,
  ],
};
