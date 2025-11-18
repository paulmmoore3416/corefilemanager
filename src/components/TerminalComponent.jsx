import React, { useState, useRef, useEffect } from 'react';

function TerminalComponent() {
  const [output, setOutput] = useState('Welcome to CoreManager Terminal\n$ ');
  const [command, setCommand] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = async (e) => {
    if (e.key === 'Enter') {
      const newOutput = output + command + '\n';
      setOutput(newOutput + '$ ');

      try {
        const result = await window.electronAPI.runCommand(command);
        setOutput(newOutput + result + '\n$ ');
      } catch (error) {
        setOutput(newOutput + `Error: ${error.message}\n$ `);
      }

      setCommand('');
    }
  };

  return (
    <div className="h-64 bg-gray-900 border-t gh-border gh-text p-4 overflow-y-auto">
      <div className="font-mono text-sm">
        <pre className="whitespace-pre-wrap">{output}</pre>
        <span>$ </span>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none text-inherit font-mono flex-1"
          style={{ width: 'calc(100% - 20px)' }}
        />
      </div>
    </div>
  );
}

export default TerminalComponent;