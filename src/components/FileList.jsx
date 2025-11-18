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
    <div className="flex-1 overflow-y-auto gh-bg gh-text">
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Files in {currentDir}</h2>
        <div className="grid grid-cols-1 gap-2">
          {files.map(file => (
            <div 
              key={file.path} 
              className="flex items-center p-2 cursor-pointer rounded gh-item gh-bordered"
              onClick={() => handleFileClick(file)}
            >
              <span className="mr-2">{file.isDirectory ? '📁' : '📄'}</span>
              <span className="flex-1">{file.name}</span>
              <span className="text-sm gh-muted">
                {file.isDirectory ? '' : `${(file.size / 1024).toFixed(1)} KB`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FileList;