export const importRegister = {
  pluginExampleReact19:
    typeof window !== 'undefined' ? import('pluginExampleReact19') : Promise.resolve(null),
  pluginExampleReact18:
    typeof window !== 'undefined' ? import('pluginExampleReact18') : Promise.resolve(null)
};
