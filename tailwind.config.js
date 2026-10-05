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
          '0%, 100%': { boxShadow: '0 0 10px rgba(124,58,237,0.8)' },
          '50%': { boxShadow: '0 0 20px rgba(6,182,212,0.8)' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
