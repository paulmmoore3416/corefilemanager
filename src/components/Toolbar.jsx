import React from 'react';
import ThemeToggle from './ThemeToggle';

function Toolbar({ currentDir, setCurrentDir }) {
  const handleBack = () => {
    const parent = currentDir.split('/').slice(0, -1).join('/') || '/';
    setCurrentDir(parent);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center space-x-3">
        <button 
          className="gh-button"
          onClick={handleBack}
          title="Go Back"
        >
          ← Back
        </button>
        <span className="flex-1 gh-text font-medium text-lg">{currentDir}</span>
      </div>
      <div className="flex items-center space-x-3">
        <button className="gh-button" title="New Folder">
          📁 New Folder
        </button>
        <button className="gh-button" title="Delete">
          🗑️ Delete
        </button>
        <input 
          type="text" 
          placeholder="Search..." 
          className="px-4 py-2 border gh-border rounded gh-rounded gh-surface gh-text" 
        />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Toolbar;