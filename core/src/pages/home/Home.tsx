import styles from './styles.module.scss';

import { Base as BaseLayout } from '@/layouts/Base';
import { Typography } from '@/ui/Typography';

const Plugins = () => {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <Typography tag="h2">Welcome to Starfleet home page!</Typography>
      </div>
    </BaseLayout>
  );
};

export default Plugins;
