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
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 15px rgba(255, 255, 255, 0.05), 0 0 40px rgba(255, 255, 255, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 15px rgba(255, 255, 255, 0.1), 0 0 60px rgba(255, 255, 255, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 15px rgba(255, 255, 255, 0.05), 0 0 40px rgba(255, 255, 255, 0.1)' 
          },
        }
      }
    }
  },
  plugins: [],
}


