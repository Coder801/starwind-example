import { kebabCase } from 'lodash';

export const getModuleFederationRoute = (name: string, port: string): string => {
  const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('production');
  const link = `${PROTOCOL}://${HOST}`;
  return `${link}${isProduction ? `/${kebabCase(name)}` : `:${port}`}`;
};
