import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import FileList from './components/FileList';
import PreviewPane from './components/PreviewPane';
import AIUtilities from './components/AIUtilities';

function App() {
  const [currentDir, setCurrentDir] = useState('/');
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setCurrentDir={setCurrentDir} />
      <div className="flex-1 flex flex-col">
        <Toolbar currentDir={currentDir} setCurrentDir={setCurrentDir} />
        <div className="flex flex-1 overflow-hidden">
          <FileList 
            currentDir={currentDir} 
            setCurrentDir={setCurrentDir} 
            setSelectedFile={setSelectedFile} 
          />
          <PreviewPane selectedFile={selectedFile} />
          <AIUtilities />
        </div>
      </div>
    </div>
  );
}

export default App;