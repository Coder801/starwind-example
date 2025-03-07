import '@/styles/index.scss';
import '@/translate/i18n';

import { ComponentType } from 'react';
import { AppProvider } from '@/context/AppContext';
import { useRouter } from 'next/router';

import Home from './home';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const routesMap: Record<string, ComponentType> = {
    '/': Home
  };

  const PageComponent = routesMap[router.pathname] || Component;

  return (
    <AppProvider>
      <PageComponent {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
