const fs = require('fs');
const path = require('path');

function loadPlugins() {
  const pluginsDir = path.join(__dirname, '../../extensions');
  const files = fs.readdirSync(pluginsDir).filter(file => file.endsWith('.js'));
  const plugins = {};
  files.forEach(file => {
    const pluginName = path.basename(file, '.js');
    try {
      plugins[pluginName] = require(path.join(pluginsDir, file));
    } catch (error) {
      console.error(`Failed to load plugin ${pluginName}:`, error);
    }
  });
  return plugins;
}

module.exports = { loadPlugins };