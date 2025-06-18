// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Courier New', 'monospace'],
      },

       colors: {
        darkBlack: '#0e0e10',
        darkGray: '#1f1f22',
        darkPurple: '#3a0ca3',
      },

       backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0e0e10, #1f1f22, #3a0ca3)',
        'pattern': "url('/path/to/your/pattern.svg')", // optional for pattern overlay
      },

      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },


        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
    },
  },
  plugins: [],
}