module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        girassol: ['Girassol', 'cursive'],
        balthazar: ['Balthazar', 'serif'],
        ebgaramond: ['"EB Garamond"', 'serif'],
        segoe: ['var(--font-segoe)', '"Segoe UI Symbol"', '"Noto Sans Symbols"', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', '"Cormorant Garamond"', 'serif'],
        // Make `serif` default map to cormorant (so Tailwind's font-serif reflects the primary font)
        serif: ['var(--font-cormorant)', '"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
