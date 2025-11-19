# CoreManager Developer Guide

This guide is for developers who want to contribute to or extend CoreManager.

## Architecture Overview

CoreManager is built using Electron for the desktop framework and React for the UI. The application consists of:

- **Main Process**: Handles system operations and window management
- **Renderer Process**: React-based UI running in a WebView
- **Extensions**: Plugin system for additional functionality

## Development Setup

### Prerequisites
- Node.js 18+
- Git

### Setup Steps
1. Clone the repository: `git clone https://github.com/paulmmoore3416/corefilemanager.git`
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Run the app: `npm start`

## Project Structure

```
coremanager/
├── main.js              # Electron main process
├── preload.js           # Preload script for IPC
├── src/
│   ├── components/      # React components
│   ├── styles/          # CSS/SCSS files
│   └── utils/           # Utility functions
├── extensions/          # Plugin extensions
├── assets/              # Static assets
└── docs/                # Documentation
```

## Adding Features

### Frontend Components
1. Create a new component in `src/components/`
2. Import and use it in `App.jsx`
3. Follow React best practices

### Backend Features
1. Add IPC handlers in `main.js`
2. Expose APIs in `preload.js`
3. Use secure context isolation

### Extensions
Extensions are JavaScript modules that can be loaded dynamically.

Example extension structure:
```javascript
// extensions/myextension.js
module.exports = {
  name: 'My Extension',
  init: function(api) {
    // Initialize extension
  },
  getUI: function() {
    // Return React component
  }
};
```

## API Reference

### IPC Channels
- `run-command`: Execute shell commands
- `get-files`: Retrieve file list
- `read-file`: Read file contents

### System APIs
CoreManager uses the `systeminformation` library for system monitoring.

## Testing

### Running Tests
```bash
npm test
```

### Writing Tests
- Use Jest for unit tests
- Place test files alongside source files with `.test.js` extension

## Building and Packaging

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run dist
```

### Linux Package
```bash
npm run dist-linux
```

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.

## Security

Follow secure coding practices:
- Validate all inputs
- Use IPC securely
- Avoid exposing sensitive APIs to renderer

For security issues, see [SECURITY.md](../SECURITY.md).