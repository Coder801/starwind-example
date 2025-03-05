import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import type { NextConfig } from 'next';
import { kebabCase } from 'lodash';
import { container, DefinePlugin } from 'webpack';

const { ModuleFederationPlugin } = container;

const pluginsDir = path.resolve(__dirname, '../plugins');
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('production');
const PROTOCOL = 'http';
const HOST = 'localhost';

const getAllPluginEnvs = (): { name: string; port: string }[] => {
  if (!fs.existsSync(pluginsDir)) return [];

  return fs
    .readdirSync(pluginsDir)
    .filter((folder) => fs.statSync(path.join(pluginsDir, folder)).isDirectory())
    .map((folder) => {
      const envPath = path.join(pluginsDir, folder, '.env');
      if (!fs.existsSync(envPath)) return null;
      const { PORT, REACT_APP_NAME } = dotenv.parse(fs.readFileSync(envPath, 'utf8'));
      return { name: REACT_APP_NAME, port: PORT };
    })
    .filter(Boolean) as { name: string; port: string }[];
};

const pluginEnvs = getAllPluginEnvs();

const nextConfig: NextConfig = {
  basePath: '',
  assetPrefix: '/',
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ['legacy-js-api']
  },
  webpack(config) {
    const remotes = Object.fromEntries(
      pluginEnvs.map(({ name, port }) => [
        name,
        `${name}@${PROTOCOL}://${isProduction ? kebabCase(name) : `${HOST}:${port}`}/remoteEntry.js`
      ])
    );

    config.resolve.fallback = { fs: false };
    config.plugins.push(
      new DefinePlugin({
        PLUGINS: JSON.stringify(pluginEnvs),
        HOST: JSON.stringify(HOST),
        PROTOCOL: JSON.stringify(PROTOCOL),
        IMPORT: 'pluginExampleReact19'
      }),
      new ModuleFederationPlugin({
        name: 'host',
        remotes,
        runtime: 'testPlugins'
      })
    );

    return config;
  }
};

export default nextConfig;
