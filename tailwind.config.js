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
        romantic: {
          pink: '#F8BBD0',
          pinkLight: '#FFF0F5',
          pinkDark: '#E0859F',
          lavender: '#D8C4F1',
          lavenderLight: '#F3E8FF',
          lavenderDark: '#9C7DC9',
          cream: '#FFF9F3',
          wine: '#632B45',
          wineDark: '#4A1C32',
          wineLight: '#853A5E',
          roseGold: '#D9A5A5',
          roseGoldDark: '#B88282',
          darkBg: '#150A14',
          darkCard: '#241222',
          darkBorder: '#451D3A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        romantic: ['"Great Vibes"', 'cursive'],
        handwritten: ['Allura', 'cursive'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'drift': 'drift 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, -15px)' },
          '100%': { transform: 'translate(0, 0)' },
        }
      },
      boxShadow: {
        'romantic': '0 10px 35px -5px rgba(248, 187, 208, 0.4), 0 8px 10px -6px rgba(99, 43, 69, 0.1)',
        'romantic-lg': '0 20px 45px -10px rgba(216, 196, 241, 0.45), 0 10px 20px -8px rgba(99, 43, 69, 0.15)',
        'glow-pink': '0 0 25px rgba(248, 187, 208, 0.65)',
        'glow-lavender': '0 0 25px rgba(216, 196, 241, 0.65)',
        'glow-wine': '0 0 30px rgba(99, 43, 69, 0.5)',
      }
    },
  },
  plugins: [],
}
