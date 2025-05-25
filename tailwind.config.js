// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#0f172a',
          surface: '#1e293b',
          primary: '#3b82f6',
          text: '#f8fafc',
          accent: '#4ade80',
          border: '#334155'
        }
      }
    }
  },
  plugins: []
}