import { FC, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import styles from './styles.module.scss';

import { Typography } from '@/ui/Typography';

export const FaqNavigation: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const links = [
    {
      id: 'description',
      name: 'Description'
    },
    {
      id: 'project-structure',
      name: 'Project Structure'
    },
    {
      id: 'install-and-run',
      name: 'Install And Run'
    },
    {
      id: 'docker-info',
      name: 'Docker'
    }
  ];

  return (
    <div className={styles.container}>
      <Typography tag="h3" className={styles.title}>
        FAQ
      </Typography>
      <ul className={styles.list}>
        {links.map(({ name, id }) => (
          <li
            key={id}
            className={clsx(styles.item, {
              [styles.active]: name === router.query?.plugin
            })}
          >
            <Link href={`#${id}`} prefetch={false}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
