import React, { useState, useEffect } from 'react';

function Sidebar({ setCurrentDir }) {
  const [drives, setDrives] = useState([]);
  const [favorites, setFavorites] = useState(['/home', '/usr', '/var']);

  useEffect(() => {
    // For Linux, list common mount points
    setDrives(['/', '/home', '/mnt', '/media']);
  }, []);

  return (
    <div className="w-64 gh-sidebar gh-text">
      <h2 className="text-xl font-bold mb-6 gh-text">CoreManager</h2>
      <div className="gh-grid gh-grid-auto">
        <div className="gh-surface gh-rounded p-4 gh-shadow">
          <h3 className="text-lg font-semibold mb-3 gh-text">Drives</h3>
          <div className="space-y-2">
            {drives.map(drive => (
              <div 
                key={drive} 
                className="gh-item gh-text"
                onClick={() => setCurrentDir(drive)}
              >
                💾 {drive}
              </div>
            ))}
          </div>
        </div>
        <div className="gh-surface gh-rounded p-4 gh-shadow">
          <h3 className="text-lg font-semibold mb-3 gh-text">Favorites</h3>
          <div className="space-y-2">
            {favorites.map(fav => (
              <div 
                key={fav} 
                className="gh-item gh-text"
                onClick={() => setCurrentDir(fav)}
              >
                ⭐ {fav}
              </div>
            ))}
          </div>
        </div>
        <div className="gh-surface gh-rounded p-4 gh-shadow">
          <h3 className="text-lg font-semibold mb-3 gh-text">Extensions</h3>
          <div className="space-y-2">
            <div className="gh-item gh-text">🐳 Docker</div>
            <div className="gh-item gh-text">🔐 SSH</div>
            <div className="gh-item gh-text">📊 Monitor</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;