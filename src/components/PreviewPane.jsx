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
      <div className="w-96 bg-white border-l p-4">
        <h3 className="text-lg font-bold">Preview</h3>
        <p>Select a file to preview</p>
      </div>
    );
  }

  return (
    <div className="w-96 bg-white border-l p-4 overflow-y-auto">
      <h3 className="text-lg font-bold mb-2">{selectedFile.name}</h3>
      {selectedFile.isDirectory ? (
        <p>This is a directory</p>
      ) : (
        <pre className="text-sm whitespace-pre-wrap">{content}</pre>
      )}
    </div>
  );
}

export default PreviewPane;