import { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './styles.module.scss';

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => (
  <div className={clsx(className, styles.container)}>
    <p className={styles.copy}> &copy; Starfleet 2025</p>
    <div className={styles.navigation}>
      <Link href="/">Home</Link>
      <Link href="/">About Us</Link>
    </div>
  </div>
);
