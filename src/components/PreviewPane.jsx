import React, { useState, useEffect } from 'react';

function PreviewPane({ selectedFile }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      if (selectedFile && !selectedFile.isDirectory) {
        try {
          const fileContent = await window.electronAPI.readFile(selectedFile.path);
          setContent(fileContent);
        } catch (error) {
          setContent('Error loading file');
        }
      } else {
        setContent('');
      }
    };
    loadContent();
  }, [selectedFile]);

  if (!selectedFile) {
    return (
      <div className="w-96 border-l gh-border p-6 gh-surface gh-text">
        <h3 className="text-xl font-bold mb-4 gh-text">Preview</h3>
        <p className="gh-muted">Select a file to preview</p>
      </div>
    );
  }

  return (
    <div className="w-96 gh-surface border-l gh-border p-6 overflow-y-auto">
      <h3 className="text-xl font-bold mb-4 gh-text">{selectedFile.name}</h3>
      {selectedFile.isDirectory ? (
        <p className="gh-muted">This is a directory</p>
      ) : (
        <pre className="text-sm whitespace-pre-wrap gh-text bg-gray-50 p-4 rounded gh-rounded">{content}</pre>
      )}
    </div>
  );
}

export default PreviewPane;