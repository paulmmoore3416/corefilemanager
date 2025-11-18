import React from 'react';
import ThemeToggle from './ThemeToggle';

function Toolbar({ currentDir, setCurrentDir }) {
  const handleBack = () => {
    const parent = currentDir.split('/').slice(0, -1).join('/') || '/';
    setCurrentDir(parent);
  };

  return (
    <div className="bg-white border-b p-2 flex items-center">
      <button 
        className="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleBack}
      >
        Back
      </button>
      <span className="flex-1">{currentDir}</span>
      <button className="mr-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">
        New Folder
      </button>
      <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
        Delete
      </button>
      <div className="ml-2">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Toolbar;