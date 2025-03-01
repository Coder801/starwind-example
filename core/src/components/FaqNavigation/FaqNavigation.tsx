import { startCase } from 'lodash';
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import styles from './styles.module.scss';

import { Typography } from '@/ui/Typography';

import { useAppSelector, selectPlugins } from '@/context/AppContext';

export const FaqNavigation: FC = () => {
  const plugins = useAppSelector(selectPlugins);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Typography tag="h3" className={styles.title}>
        FAQ
      </Typography>
      <ul className={styles.list}>
        {plugins &&
          plugins.map(({ name }) => (
            <li
              key={name}
              className={clsx(styles.item, {
                [styles.active]: name === router.query?.plugin
              })}
            >
              <Link href={`/plugins/${name}`} prefetch={false}>
                {startCase(name)}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
