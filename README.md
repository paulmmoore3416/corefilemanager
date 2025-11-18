# CoreManager

<div align="center">
  <img src="https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java" alt="Java 17"/>
  <img src="https://img.shields.io/badge/JavaFX-17.0.2-blue?style=for-the-badge&logo=java" alt="JavaFX"/>
  <img src="https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js" alt="Node.js"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.3.0-38bdf8?style=for-the-badge&logo=tailwind-css" alt="TailwindCSS"/>
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass" alt="SCSS"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript" alt="JavaScript"/>
  <br>
  <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Windows%20%7C%20macOS-lightgrey?style=for-the-badge" alt="Platform"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge" alt="Version"/>
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge" alt="Build"/>
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" alt="Status"/>
</div>

---

## 🚀 **CoreManager: The Ultimate File Management Experience**

> **A professional-grade, AI-enhanced file manager built with Java, JavaFX, React, and modern web technologies. Designed for power users who demand elegance, performance, and extensibility.**

<div align="center">
  <img src="https://raw.githubusercontent.com/yourusername/coremanager/main/assets/screenshot.png" alt="CoreManager Screenshot" width="800"/>
</div>

---

## ✨ **Key Features**

### 🎨 **Modern UI/UX**
- **Responsive Design**: Built with TailwindCSS and custom SCSS for a sleek, professional interface
- **Dark/Light Themes**: Switch between themes with custom branding
- **Intuitive Navigation**: Sidebar with drives, favorites, and extension panels

### 🤖 **AI-Powered Utilities**
- **Smart File Analysis**: AI-driven file categorization and insights
- **Intelligent Search**: Natural language file search with AI suggestions
- **System Monitoring**: Real-time CPU, memory, and disk usage tracking
- **Personal AI Integration**: Ready for your custom AI assistant linkage

### 🔧 **Advanced File Operations**
- **File Preview**: Built-in preview for text, images, PDFs, and media files
- **Batch Operations**: Rename, move, compress multiple files at once
- **Secure Admin Tools**: Sandboxed terminal with restricted command execution
- **Plugin System**: Extensible architecture for Docker, SSH, and custom tools

### 🛠️ **System Integration**
- **Cross-Platform**: Runs on Linux, Windows, and macOS
- **Native Performance**: JavaFX for smooth desktop experience
- **Filesystem Access**: Direct system file operations with security
- **Extension Support**: Dynamic plugin loading for unlimited functionality

---

## 🏗️ **Architecture**

```
CoreManager/
├── src/main/java/com/coremanager/     # JavaFX Application
│   ├── Main.java                      # Entry point with WebView
│   └── ...
├── src/main/resources/web/            # React Web App
│   ├── index.html                     # HTML5 Entry
│   ├── bundle.js                      # JavaScript Bundle
│   └── styles/                        # CSS/SCSS Styles
├── extensions/                        # Plugin System
│   ├── docker.js                      # Docker Integration
│   ├── ssh.js                         # SSH Tools
│   └── monitor.js                     # System Monitoring
├── pom.xml                            # Maven Configuration
└── README.md                          # This file
```

### 🏛️ **Tech Stack**

| Component | Technology | Purpose |
|-----------|------------|---------|
| **Desktop Framework** | Java 17 + JavaFX | Native desktop app with WebView |
| **Frontend UI** | React 18 + JSX | Component-based interface |
| **Styling** | TailwindCSS + SCSS | Utility-first CSS with custom themes |
| **Build System** | Maven + Webpack | Dependency management and bundling |
| **File Operations** | Node.js APIs | Secure filesystem access |
| **AI Integration** | Custom APIs | Extensible AI utilities |

---

## 🚀 **Quick Start**

### Prerequisites
- **Java 17+** installed
- **Maven 3.6+** for building
- **Node.js 18+** for React development

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/coremanager.git
   cd coremanager
   ```

2. **Build the React frontend**
   ```bash
   npm install
   npm run build
   ```

3. **Build and run with Maven**
   ```bash
   mvn clean compile javafx:run
   ```

4. **Package as .deb (Linux)**
   ```bash
   mvn clean package
   jpackage --input target/ \
            --main-jar coremanager-1.0.0.jar \
            --main-class com.coremanager.Main \
            --type deb \
            --name CoreManager \
            --app-version 1.0.0
   ```

---

## 🎯 **Usage**

### Basic Navigation
- **Sidebar**: Access drives, favorites, and extensions
- **File List**: Browse directories with detailed file information
- **Preview Pane**: View file contents without opening external apps
- **Toolbar**: Perform file operations like copy, move, delete

### AI Features
- **System Stats**: Monitor CPU/memory usage in real-time
- **File Analysis**: Get AI-powered insights on file types and content
- **Smart Search**: Use natural language to find files quickly
- **AI Assistant**: Placeholder for your personal AI integration

### Extensions
- **Docker**: Manage containers directly from the file manager
- **SSH**: Connect to remote servers securely
- **Monitor**: Advanced system monitoring tools

---

## 🔧 **Development**

### Setting up Development Environment

1. **Install dependencies**
   ```bash
   npm install
   mvn install
   ```

2. **Start development mode**
   ```bash
   # Terminal 1: React dev server
   npm run dev

   # Terminal 2: JavaFX app
   mvn javafx:run
   ```

3. **Run tests**
   ```bash
   npm test
   mvn test
   ```

### Adding New Features

- **Frontend Components**: Add React components in `src/components/`
- **Java Backend**: Extend `Main.java` or add new classes
- **Plugins**: Create new files in `extensions/` directory
- **Styling**: Modify `src/styles/` for custom themes

---

## 📦 **Packaging**

### Linux (.deb)
```bash
jpackage --input target/ \
         --main-jar coremanager-1.0.0.jar \
         --main-class com.coremanager.Main \
         --type deb \
         --name CoreManager \
         --app-version 1.0.0 \
         --icon assets/icon.png \
         --description "Top-tier file manager with AI utilities"
```

### Windows (.msi)
```bash
jpackage --input target/ \
         --main-jar coremanager-1.0.0.jar \
         --main-class com.coremanager.Main \
         --type msi \
         --name CoreManager \
         --app-version 1.0.0 \
         --icon assets/icon.ico
```

### macOS (.dmg)
```bash
jpackage --input target/ \
         --main-jar coremanager-1.0.0.jar \
         --main-class com.coremanager.Main \
         --type dmg \
         --name CoreManager \
         --app-version 1.0.0 \
         --icon assets/icon.icns
```

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow Java naming conventions
- Use functional React components
- Write comprehensive tests
- Update documentation for new features

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 **Acknowledgments**

- **JavaFX** for the robust desktop framework
- **React** for the flexible UI components
- **TailwindCSS** for the utility-first styling approach
- **SystemInformation** for system monitoring capabilities
- **PDF.js** for PDF preview functionality

---

## 📞 **Support**

For support, email support@coremanager.com or join our Discord community.

<div align="center">
  <h3>⭐ Star this repo if you find it useful!</h3>
  <p>Made with ❤️ by the CoreManager team</p>
</div>