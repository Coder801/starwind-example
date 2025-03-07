// import App from './App';
// import { createRoot } from 'react-dom/client';

// export const inject = (parentElementId) =>
//   createRoot(document.getElementById(parentElementId)).render(<App />);

import { createRoot } from 'react-dom/client';
import App from './App';
import { createShadowContainer } from './styleLoader';

export const inject = (parentElementId) => {
  const appPlaceholder = createShadowContainer(parentElementId);
  const root = createRoot(appPlaceholder);
  root.render(<App />);
};
