import React, { useState, useEffect } from 'react';

function AIUtilities() {
  const [stats, setStats] = useState({ cpu: 0, memory: 0 });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const systemStats = await window.electronAPI.getSystemStats();
        setStats(systemStats);
      } catch (error) {
        console.error(error);
      }
    };
    loadStats();
    const interval = setInterval(loadStats, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-64 gh-sidebar gh-text p-6">
      <h3 className="text-xl font-bold mb-6 gh-text">AI Utilities</h3>
      <div className="gh-grid gh-grid-auto space-y-4">
        <div className="gh-surface gh-rounded p-4 gh-shadow">
          <h4 className="font-semibold mb-3 gh-text">System Stats</h4>
          <div className="space-y-2">
            <p className="gh-text">CPU: {stats.cpu}%</p>
            <p className="gh-text">Memory: {stats.memory}%</p>
          </div>
        </div>
        <div className="gh-surface gh-rounded p-4 gh-shadow">
          <h4 className="font-semibold mb-3 gh-text">AI Tools</h4>
          <div className="space-y-2">
            <button className="w-full gh-button">Analyze Files</button>
            <button className="w-full gh-button">Smart Search</button>
            <button className="w-full gh-button">AI Assistant</button>
          </div>
        </div>
        <div className="gh-surface gh-rounded p-4 gh-shadow">
          <h4 className="font-semibold mb-3 gh-text">Personal AI</h4>
          <p className="text-sm gh-muted">Link your personal AI here for enhanced file management.</p>
        </div>
      </div>
    </div>
  );
}

export default AIUtilities;