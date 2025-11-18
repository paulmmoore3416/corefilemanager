module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'gh-accent': 'var(--gh-accent)',
        'gh-bg': 'var(--gh-bg)',
        'gh-surface': 'var(--gh-surface)',
        'gh-text': 'var(--gh-text)',
        'gh-muted': 'var(--gh-muted)',
        'gh-border': 'var(--gh-border)',
        'gh-selected': 'var(--gh-selected)',
        'gh-hover': 'var(--gh-hover)'
      }
    },
  },
  plugins: [],
}