/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bg-primary": "var(--primary-color)",
        "bg-primary-dark": "var(--primary-color-dark)"
      },
      fontFamily: {
        'archivo': ['Archivo', 'sans-serif'],
      },
      fontWeight: {
        'thin': 200, // Add 'thin' with a corresponding numeric value
        'normal': 400,
        // ... other font weights you might have
      },
      fontStyle: {
        'normal': 'normal',
        'italic': 'italic',
      }
    },
  },
  plugins: [],
};
