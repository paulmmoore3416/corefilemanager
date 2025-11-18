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
    <div className="w-64 bg-gray-50 border-l p-4">
      <h3 className="text-lg font-bold mb-4">AI Utilities</h3>
      <div className="mb-4">
        <h4 className="font-semibold">System Stats</h4>
        <p>CPU: {stats.cpu}%</p>
        <p>Memory: {stats.memory}%</p>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold">AI Tools</h4>
        <button className="w-full mb-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
          Analyze Files
        </button>
        <button className="w-full mb-2 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
          Smart Search
        </button>
        <button className="w-full px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
          AI Assistant
        </button>
      </div>
      <div>
        <h4 className="font-semibold">Personal AI</h4>
        <p className="text-sm text-gray-600">Link your personal AI here for enhanced file management.</p>
      </div>
    </div>
  );
}

export default AIUtilities;