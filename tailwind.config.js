/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        girassol: ['Girassol', 'cursive'],
        balthazar: ['Balthazar', 'serif'],
        ebgaramond: ['"EB Garamond"', 'serif'], // Adicione esta linha
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
