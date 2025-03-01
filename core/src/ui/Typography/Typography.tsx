import clsx from 'clsx';
import { join, compact } from 'lodash';

import styles from './styles.module.scss';
import { TypographyProps } from './types';

export const Typography = ({
  variant = 'primary',
  tag = 'p',
  size = 'l',
  weight = 'regular',
  className,
  children,
  onClick
}: TypographyProps) => {
  const combineClassName = (...strings: string[]) => join(compact(strings), '-');
  const Component = tag;
  const current =
    tag === 'p'
      ? styles[combineClassName('paragraph', variant, size, weight)]
      : styles[combineClassName('header', tag, variant)];

  return (
    <Component className={clsx(current, className)} onClick={onClick}>
      {children}
    </Component>
  );
};
