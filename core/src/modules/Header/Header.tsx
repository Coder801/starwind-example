import { FC } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

import { Typography } from '@/ui/Typography';

type HeaderProps = {
  className?: string;
};

export const Header: FC<HeaderProps> = ({ className }) => {
  const router = useRouter();

  return (
    <header className={clsx(className, styles.container)}>
      <Typography variant="h1">{router.pathname === '/' ? 'Homepage' : 'Plugins'}</Typography>
    </header>
  );
};
