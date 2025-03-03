import { startCase } from 'lodash';
import Link from 'next/link';

import { Base as BaseLayout } from '@/layouts/Base';
import { Card } from '@/ui/Card';
import { Code } from '@/ui/Code';
import { Typography } from '@/ui/Typography';

import styles from './styles.module.scss';

import { useAppSelector, selectPlugins } from '@/context/AppContext';
import { useState, useEffect } from 'react';

const Plugins = () => {
  const [data, setData] = useState([]);
  const plugins = useAppSelector(selectPlugins);
  const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('production');
  const fetchLink = `http://localhost${isProduction ? '/' : ':3000/'}api/plugins`;

  const getPluginInfo = async (plugin: string) => {
    try {
      const response = await fetch(`${fetchLink}/${plugin}/getinfo`);
      const pluginData = await response.json();
      return { name: plugin, data: pluginData };
    } catch (error) {
      console.error('Error getting info:', error);
      return { name: plugin, data: null };
    }
  };

  useEffect(() => {
    if (!plugins || plugins.length === 0) return;

    const fetchPluginData = async () => {
      const pluginInfoPromises = plugins.map(({ name }) => getPluginInfo(name));
      const pluginInfo = await Promise.all(pluginInfoPromises);
      console.log(pluginInfo);
      setData(pluginInfo as any); // eslint-disable-line
    };

    fetchPluginData();
  }, [plugins]);

  return (
    <BaseLayout>
      <div className={styles.container}>
        <Typography className={styles.title} tag="h2">
          Please choose a plugin
        </Typography>
        <div className={styles.items}>
          {data &&
            data.map(({ name, data: pluginData }) => (
              <Link
                key={name}
                href={`/plugins/${name}`}
                prefetch={false}
                className={styles.section}
              >
                <Card title={startCase(name)}>
                  <Typography tag="p">Short description:</Typography>
                  <Typography tag="p">
                    &nbsp;&nbsp;&nbsp; {pluginData?.info?.description}
                  </Typography>
                  &nbsp;
                  <Typography tag="p">Package JSON Info:</Typography>
                  <Code copy={false}>{JSON.stringify(pluginData?.info, null, 2)}</Code>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Plugins;
