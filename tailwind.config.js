/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {},
    screens: {
      'mx': { max: '510px' }
    }
  },
  plugins: [],
}
