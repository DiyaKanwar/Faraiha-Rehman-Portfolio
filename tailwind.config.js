/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        peach: '#e2a679',         // your main peach color
        darkPeach: '#c68a4f',    // a darker shade for hover or accents
        lightPeach: '#f5e9d4',   // lighter version for backgrounds
        slateGray: '#4a5568',    // some neutral slate gray for text
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(226, 166, 121, 0.3)',  // subtle peachy shadow
      },
      fontFamily: {
        body: ['"Segoe UI"', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'], // nice clean fonts
      },
    },
  },
  plugins: [],
}
