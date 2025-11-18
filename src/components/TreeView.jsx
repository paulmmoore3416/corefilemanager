import React, { useState, useEffect } from 'react';

function TreeView({ currentDir, setCurrentDir }) {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    const buildTree = async (path, level = 0) => {
      if (level > 3) return []; // Limit depth
      try {
        const files = await window.electronAPI.listFiles(path);
        const dirs = files.filter(f => f.isDirectory).map(f => ({
          name: f.name,
          path: f.path,
          children: [],
          expanded: false
        }));
        return dirs;
      } catch (error) {
        return [];
      }
    };

    const loadTree = async () => {
      const rootTree = await buildTree('/');
      setTree(rootTree);
    };
    loadTree();
  }, []);

  const toggleExpand = async (node) => {
    if (!node.expanded) {
      const children = await buildTree(node.path, 1);
      node.children = children;
    }
    node.expanded = !node.expanded;
    setTree([...tree]);
  };

  const buildTree = async (path, level) => {
    if (level > 3) return [];
    try {
      const files = await window.electronAPI.listFiles(path);
      return files.filter(f => f.isDirectory).map(f => ({
        name: f.name,
        path: f.path,
        children: [],
        expanded: false
      }));
    } catch (error) {
      return [];
    }
  };

  const renderNode = (node, level = 0) => (
    <div key={node.path} style={{ paddingLeft: level * 24 }}>
      <div 
        className="gh-item gh-text mb-1"
        onClick={() => {
          setCurrentDir(node.path);
          toggleExpand(node);
        }}
      >
        📁 {node.name}
      </div>
      {node.expanded && node.children.map(child => renderNode(child, level + 1))}
    </div>
  );

  return (
    <div className="p-6 overflow-y-auto h-full gh-bg gh-text">
      <h3 className="text-xl font-bold mb-6 gh-text">Folder Tree</h3>
      <div className="space-y-1">
        {tree.map(node => renderNode(node))}
      </div>
    </div>
  );
}

export default TreeView;