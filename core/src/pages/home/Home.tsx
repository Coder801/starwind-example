import styles from './styles.module.scss';

import { Base as BaseLayout } from '@/layouts/Base';
import { Typography } from '@/ui/Typography';

const Home = () => {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <Typography variant="h2">Welcome to Starfleet home page!</Typography>
      </div>
    </BaseLayout>
  );
};

export default Home;
