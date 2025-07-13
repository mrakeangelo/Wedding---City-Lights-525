/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        champagne: {
          50: '#fefcf8',
          100: '#fdf5e6',
          200: '#fae8c1',
          300: '#f5d592',
          400: '#eeb75a',
          500: '#e89e32',
          600: '#d98327',
          700: '#b46623',
          800: '#925325',
          900: '#784621',
        },
        charcoal: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3a3a3a',
          950: '#1a1a1a',
        },
        neon: {
          50: '#fef7f7',
          100: '#fdeef0',
          200: '#fcdce2',
          300: '#f8bfca',
          400: '#f294a8',
          500: '#e8677f',
          600: '#d64465',
          700: '#b5344f',
          800: '#962d45',
          900: '#7f2a3f',
        },
        navy: {
          50: '#f0f4f8',
          100: '#dae8f0',
          200: '#b8d2e3',
          300: '#88b4d1',
          400: '#5090bb',
          500: '#2e73a6',
          600: '#1f5c8c',
          700: '#1a4d73',
          800: '#1a4260',
          900: '#1b3951',
          950: '#0f1f2e',
        },
        fog: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        }
      },
      fontFamily: {
        'condensed': ['Oswald', 'Arial Narrow', 'sans-serif'],
        'serif': ['Crimson Text', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 2s infinite alternate',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'pulse-neon': {
          '0%': { 
            boxShadow: '0 0 5px #f294a8, 0 0 10px #f294a8, 0 0 15px #f294a8',
            opacity: '0.8'
          },
          '100%': { 
            boxShadow: '0 0 10px #f294a8, 0 0 20px #f294a8, 0 0 30px #f294a8',
            opacity: '1'
          },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(242, 148, 168, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(242, 148, 168, 0.8)' },
        }
      },
      backgroundImage: {
        'city-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #2e73a6 50%, #1a1a1a 100%)',
        'neon-gradient': 'linear-gradient(45deg, #f294a8, #e8677f)',
        'champagne-gradient': 'linear-gradient(135deg, #fdf5e6, #f5d592)',
      }
    },
  },
  plugins: [],
}