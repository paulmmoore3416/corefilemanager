module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gh-accent': 'var(--gh-accent)',
        'gh-bg': 'var(--gh-bg)',
        'gh-surface': 'var(--gh-surface)'
      }
    },
  },
  plugins: [],
}