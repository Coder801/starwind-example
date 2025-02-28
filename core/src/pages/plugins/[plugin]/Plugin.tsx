'use client';

import { startCase } from 'lodash';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/ui/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { importRegister } from '@/utils/importRegister';
import styles from './styles.module.scss';

import { Base as BaseLayout } from '@/layouts/Base';

const INJECT_SECTION = 'injectSection';

const Plugin = () => {
  const { query } = useRouter();
  const [items, setItems] = useState([]);
  const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('production');
  const pluginName = query.plugin as keyof typeof importRegister;
  const fetchLink = `http://localhost${isProduction ? '/' : ':3000/'}api/plugins/${pluginName}`;

  const handleItemsRequest = async () => {
    try {
      const data = await fetch(`${fetchLink}/getitems`).then((res) => res.json());
      setItems(data.items);
    } catch (error) {
      console.error('Error getting items:', error);
    }
  };

  const handleCPUUsageRequest = async () => {
    try {
      const data = await fetch(`${fetchLink}/cpuusage`).then((res) => res.json());
      setItems(data.value);
    } catch (error) {
      console.error('Error getting items:', error);
    }
  };

  useEffect(() => {
    if (!pluginName || !(pluginName in importRegister)) return;

    const handleImport = async () => {
      try {
        const { inject } = (await importRegister[pluginName]) as {
          inject: (section: string) => void;
        };
        inject(INJECT_SECTION);
      } catch (error) {
        console.error(`Error loading plugin "${pluginName}":`, error);
      }
    };

    console.log('pluginName:', pluginName, PLUGINS);
    handleImport();
  }, [pluginName]);

  return (
    <BaseLayout>
      <div className={styles.container}>
        <h2 className={styles.header}>{startCase(pluginName?.toString())}</h2>
        <div id={INJECT_SECTION}></div>

        <div className={styles.control}>
          <div className={styles.section}>
            <p className={styles.title}>Get Items From Plugin</p>
            <div className={styles.content}>
              {!!items.length && (
                <SyntaxHighlighter
                  language="json"
                  customStyle={{ padding: '14px', marginBottom: '14px' }}
                >
                  {JSON.stringify(items, null, 2)}
                </SyntaxHighlighter>
              )}
              <Button onClick={() => handleItemsRequest()}>Get Items</Button>
            </div>
          </div>
          <div className={styles.section}>
            <p className={styles.title}>Get Items CPU Usage from Plugin</p>
            <div className={styles.content}>
              <Button onClick={() => handleCPUUsageRequest()}>Get Items</Button>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Plugin;
