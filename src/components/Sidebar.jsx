import React, { useState, useEffect } from 'react';

function Sidebar({ setCurrentDir }) {
  const [drives, setDrives] = useState([]);
  const [favorites, setFavorites] = useState(['/home', '/usr', '/var']);

  useEffect(() => {
    // For Linux, list common mount points
    setDrives(['/', '/home', '/mnt', '/media']);
  }, []);

  return (
    <div className="w-64 p-4 gh-sidebar gh-surface gh-bordered">
      <h2 className="text-lg font-bold mb-4">CoreManager</h2>
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Drives</h3>
        {drives.map(drive => (
          <div 
            key={drive} 
            className="cursor-pointer p-2 rounded gh-item gh-text gh-bordered"
            onClick={() => setCurrentDir(drive)}
          >
            {drive}
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Favorites</h3>
        {favorites.map(fav => (
          <div 
            key={fav} 
            className="cursor-pointer p-2 rounded gh-item gh-text gh-bordered"
            onClick={() => setCurrentDir(fav)}
          >
            {fav}
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Extensions</h3>
        <div className="cursor-pointer p-2 rounded gh-item gh-text gh-bordered">Docker</div>
        <div className="cursor-pointer p-2 rounded gh-item gh-text gh-bordered">SSH</div>
        <div className="cursor-pointer p-2 rounded gh-item gh-text gh-bordered">Monitor</div>
      </div>
    </div>
  );
}

export default Sidebar;