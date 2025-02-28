const fs = require('fs');
const path = require('path');
const killPort = require('kill-port');
const dotenv = require('dotenv');

async function killPortsFromPlugins() {
  const pluginsDir = path.join(__dirname, '../plugins');

  const plugins = fs.readdirSync(pluginsDir).filter((item) => {
    return fs.statSync(path.join(pluginsDir, item)).isDirectory();
  });

  for (const plugin of plugins) {
    const envPath = path.join(pluginsDir, plugin, '.env');
    if (fs.existsSync(envPath)) {
      try {
        const envContent = fs.readFileSync(envPath, 'utf8');
        const config = dotenv.parse(envContent);
        if (config.PORT) {
          const port = parseInt(config.PORT, 10);
          try {
            await killPort(port);
            console.log(`Port ${port} for plugin "${plugin}" has been successfully freed.`);
          } catch (err) {
            console.error(
              `Error while trying to free port ${port} for plugin "${plugin}":`,
              err.message
            );
          }
        } else {
          console.log(`The .env file for plugin "${plugin}" does not contain a PORT variable.`);
        }
      } catch (err) {
        console.error(`Error reading file ${envPath}:`, err.message);
      }
    } else {
      console.log(`.env file not found for plugin "${plugin}"`);
    }
  }
}

killPortsFromPlugins();
