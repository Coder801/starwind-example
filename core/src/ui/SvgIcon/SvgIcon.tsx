'use client';

import clsx from 'clsx';

import { Icons } from './constants';
import { SvgIconProps } from './types';

import styles from './styles.module.scss';

export const SvgIcon = ({ name, className, color, onClick = () => {} }: SvgIconProps) => {
  const Icon = Icons[name];

  return (
    <div className={clsx(styles.icon, className)} onClick={onClick || undefined}>
      <Icon color={color || '#bbb'} />
    </div>
  );
};
