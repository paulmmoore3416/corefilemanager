import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Toolbar from './components/Toolbar';
import FileList from './components/FileList';
import PreviewPane from './components/PreviewPane';
import AIUtilities from './components/AIUtilities';
import TreeView from './components/TreeView';
import TerminalComponent from './components/TerminalComponent';

function App() {
  const [currentDir, setCurrentDir] = useState('/');
  const [selectedFile, setSelectedFile] = useState(null);
  const [leftPaneDir, setLeftPaneDir] = useState('/');
  const [rightPaneDir, setRightPaneDir] = useState('/');

  return (
    <div className="flex h-screen gh-bg">
      {/* Header Bar with AI Utilities */}
      <div className="w-full gh-header">
        <div className="gh-grid gh-grid-4 mb-4">
          <AIUtilities />
        </div>
        <Toolbar currentDir={currentDir} setCurrentDir={setCurrentDir} />
      </div>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar setCurrentDir={setCurrentDir} />
        <div className="flex-1 flex flex-col">
          <div className="flex flex-1 overflow-hidden">
            {/* Left Pane: Tree View */}
            <div className="w-1/2 border-r gh-border gh-surface">
              <TreeView currentDir={leftPaneDir} setCurrentDir={setLeftPaneDir} />
            </div>
            {/* Right Pane: File List and Preview */}
            <div className="w-1/2 flex flex-col">
              <FileList
                currentDir={rightPaneDir}
                setCurrentDir={setRightPaneDir}
                setSelectedFile={setSelectedFile}
              />
              <PreviewPane selectedFile={selectedFile} />
            </div>
          </div>
          {/* Status Bar */}
          <div className="gh-status">
            Ready
          </div>
        </div>
      </div>
      {/* Terminal at the bottom */}
      <TerminalComponent />
    </div>
  );
}

export default App;