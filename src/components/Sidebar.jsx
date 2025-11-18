import React, { useState, useEffect } from 'react';

function Sidebar({ setCurrentDir }) {
  const [drives, setDrives] = useState([]);
  const [favorites, setFavorites] = useState(['/home', '/usr', '/var']);

  useEffect(() => {
    // For Linux, list common mount points
    setDrives(['/', '/home', '/mnt', '/media']);
  }, []);

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-lg font-bold mb-4">CoreManager</h2>
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Drives</h3>
        {drives.map(drive => (
          <div 
            key={drive} 
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
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
            className="cursor-pointer hover:bg-gray-700 p-2 rounded"
            onClick={() => setCurrentDir(fav)}
          >
            {fav}
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">Extensions</h3>
        <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Docker</div>
        <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">SSH</div>
        <div className="cursor-pointer hover:bg-gray-700 p-2 rounded">Monitor</div>
      </div>
    </div>
  );
}

export default Sidebar;