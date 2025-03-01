import { startCase } from 'lodash';
import Link from 'next/link';
import { Base as BaseLayout } from '@/layouts/Base';
import { Card } from '@/ui/Card';
import { Typography } from '@/ui/Typography';

import styles from './styles.module.scss';

import { useAppSelector, selectPlugins } from '@/context/AppContext';

const Plugins = () => {
  const plugins = useAppSelector(selectPlugins);

  return (
    <BaseLayout>
      <div className={styles.container}>
        <Typography className={styles.title} variant="h2">
          Please coose a plugin
        </Typography>
        <div className={styles.items}>
          {plugins &&
            plugins.map(({ name }) => (
              <Link
                key={name}
                href={`/plugins/${name}`}
                prefetch={false}
                className={styles.section}
              >
                <Card title={startCase(name)}>
                  <p>Starfleet is a platform for managing your plugins.</p>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Plugins;
