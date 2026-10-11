/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5EFE2',
        'cream-alt': '#EFE7D5',
        charcoal: '#17140D',
        coral: '#FF5B57',
        teal: '#12B3A4',
        mustard: '#FFC531',
        violet: '#6B5BE6',
        skyblue: '#3AA0FF',
        
        // Aliases for compatibility
        canvas: '#F5EFE2',
        'canvas-muted': '#EFE7D5',
        'canvas-card': '#FFFFFF',
        ink: '#17140D',
        'ink-muted': '#4F4B41',
        'ink-faint': '#787366',
        accent: '#FF5B57',
        'accent-dark': '#E04844',
        'border-light': '#17140D',
        'border-dark': '#17140D',
        dark: {
          bg: '#17140D',
          surface: '#242018',
          border: '#FFC531',
          text: '#F5EFE2',
          muted: '#C5BEAF',
        }
      },
      fontFamily: {
        heading: ['"Bricolage Grotesk"', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        'hard-xl': '10px 10px 0px #17140D',
        'hard-lg': '8px 8px 0px #17140D',
        'hard-md': '5px 5px 0px #17140D',
        'hard-sm': '3px 3px 0px #17140D',
        'hard-btn': '4px 4px 0px #17140D',
        'hard-coral': '6px 6px 0px #FF5B57',
        'hard-teal': '6px 6px 0px #12B3A4',
        'hard-mustard': '6px 6px 0px #FFC531',
        'hard-yellow': '5px 5px 0px #17140D',
      },
      borderWidth: {
        '3': '3px',
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem, 8.5vw, 7.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '0.96', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'heading-md': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      animation: {
        'memphis-float': 'memphisFloat 4s ease-in-out infinite',
        'memphis-float-reverse': 'memphisFloatReverse 5s ease-in-out infinite',
        'memphis-spin-slow': 'memphisSpin 16s linear infinite',
        'memphis-wiggle': 'memphisWiggle 3s ease-in-out infinite',
        'memphis-bounce-gentle': 'memphisBounce 2.5s ease-in-out infinite',
      },
      keyframes: {
        memphisFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        memphisFloatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-3deg)' },
        },
        memphisSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        memphisWiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        memphisBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
