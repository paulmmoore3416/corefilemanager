import React, { useState, useEffect } from 'react';

function FileList({ currentDir, setCurrentDir, setSelectedFile }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        const fileList = await window.electronAPI.listFiles(currentDir);
        setFiles(fileList);
      } catch (error) {
        console.error(error);
        setFiles([]);
      }
    };
    loadFiles();
  }, [currentDir]);

  const handleFileClick = (file) => {
    if (file.isDirectory) {
      setCurrentDir(file.path);
    } else {
      setSelectedFile(file);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto gh-bg gh-text p-6">
      <h2 className="text-2xl font-bold mb-6 gh-text">Files in {currentDir}</h2>
      <div className="gh-grid gh-grid-auto">
        {files.map(file => (
          <div 
            key={file.path} 
            className="gh-surface gh-rounded p-4 gh-shadow gh-item"
            onClick={() => handleFileClick(file)}
          >
            <div className="text-3xl mb-2">{file.isDirectory ? '📁' : '📄'}</div>
            <div className="font-medium gh-text truncate">{file.name}</div>
            {!file.isDirectory && (
              <div className="text-sm gh-muted mt-1">
                {(file.size / 1024).toFixed(1)} KB
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileList;