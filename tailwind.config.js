/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            'text': '#000000',
            'background': {
                'light': '#FEF9F4',
                'DEFAULT': '#ffffff',
                'dark': '#000000'
            },
            'primary': {
                'light': '#FDE5B2',
                'DEFAULT': '#ef841f',
                'dark': '#b25b00'
            },
            'secondary': {
                'light': '#f9f0e2',
                'DEFAULT': '#FCAC00',
                'dark': '#b25b00'           
            },
            'accent': '#00AAFC',
           }
      },
    },
    plugins: [],
  }