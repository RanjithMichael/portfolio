module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#06B6D4',
          purple: '#7C3AED',
          pink: '#EC4899',
        },
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(6,182,212,0.8), 0 0 40px rgba(124,58,237,0.6)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(236,72,153,0.9), 0 0 60px rgba(124,58,237,0.9)',
          },
        },
        glowCycle: {
          '0%': { boxShadow: '0 0 20px rgba(6,182,212,0.8)' },   // cyan
          '33%': { boxShadow: '0 0 30px rgba(124,58,237,0.8)' }, // purple
          '66%': { boxShadow: '0 0 30px rgba(236,72,153,0.8)' }, // pink
          '100%': { boxShadow: '0 0 20px rgba(6,182,212,0.8)' }, // back to cyan
        },
        movePattern: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
        'glow-cycle': 'glowCycle 6s ease-in-out infinite',
        'pattern-move': 'movePattern 12s linear infinite',
      },
      backgroundImage: {
        geometric: `
          radial-gradient(theme('colors.neon.cyan') 1px, transparent 1px),
          radial-gradient(theme('colors.neon.purple') 1px, transparent 1px),
          radial-gradient(theme('colors.neon.pink') 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        geometric: '40px 40px, 30px 30px, 20px 20px',
      },
      backgroundPosition: {
        geometric: '0 0, 20px 20px, 10px 10px',
      },
    },
  },
  plugins: [],
};
