/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#C8C8C8', // cinza claro
          100: '#0095E4', // azul claro
          200: '#002D44', // azul escuro
          300: '#001E2E', // azul petróleo
          400: '#001622', // quase preto
          500: '#000F17',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
