import React from 'react';

function ThemeToggle() {
  const toggle = () => {
    document.body.classList.toggle('theme-gh-gray');
    localStorage.setItem('theme-gh-gray', document.body.classList.contains('theme-gh-gray'));
  };

  React.useEffect(() => {
    const useDark = localStorage.getItem('theme-gh-gray') === 'true';
    if (useDark) document.body.classList.add('theme-gh-gray');
  }, []);

  return (
    <button
      className="px-3 py-1 rounded bg-transparent border gh-bordered gh-text hover:bg-gh-surface"
      onClick={toggle}
      title="Toggle GitHub Gray Theme"
    >
      🖤 Theme
    </button>
  );
}

export default ThemeToggle;