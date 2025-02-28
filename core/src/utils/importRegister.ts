export const importRegister = {
  pluginExampleReact19:
    typeof window !== 'undefined' ? import('pluginExampleReact19') : Promise.resolve(null)
};
