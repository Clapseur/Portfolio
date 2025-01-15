/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {    
      fontFamily: {
        'genocide': ['GENOCIDE'],
        'code_bar': ['Geo'],
        'mono': ['ui-monospace', 'SFMono-Regular',],
        'display': ['Oswald',],
        'body': ['"Open Sans"'],
      },
    },
  },
  plugins: [],
}


