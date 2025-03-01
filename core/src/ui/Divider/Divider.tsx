import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';

type DividerProps = {
  className?: string;
};

export const Divider: FC<DividerProps> = ({ className }) => (
  <hr className={clsx(styles.container, className)} />
);
