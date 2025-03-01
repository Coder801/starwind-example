import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type CardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
};

export const Card: FC<CardProps> = ({ children, title, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.title}>{title || ''}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
