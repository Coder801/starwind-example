import { FC } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './styles.module.scss';

import { Typography } from '@/ui/Typography';

type HeaderProps = {
  className?: string;
};

const title: { [key: string]: string } = {
  '/': 'Homepage',
  '/plugins': 'Plugins',
  '/faq': 'FAQ'
};

export const Header: FC<HeaderProps> = ({ className }) => {
  const router = useRouter();
  const regex = /^\/[^\/]+/;
  const match = router.pathname.match(regex);

  return (
    <header className={clsx(className, styles.container)}>
      <Typography tag="h1">{match ? title[match[0]] : title['/']}</Typography>

      <div className={styles.navigation}>
        <Link href="/">Home</Link>
        <Link href="/plugins">Plugins</Link>
        <Link href="/faq">FAQ</Link>
      </div>
    </header>
  );
};
