import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type ListProps = {
  children: ReactNode;
  className?: string;
  type?: 'disc' | 'circle' | 'square' | 'decimal';
  icon?: string;
};

type ItemProps = {
  children: ReactNode;
  className?: string;
};

const List: FC<ListProps> & { Item: FC<ItemProps> } = ({
  children,
  className,
  type = 'circle'
}) => <ul className={clsx(styles.list, styles[type], className)}>{children}</ul>;

const Item: FC<ItemProps> = ({ children, className }) => {
  return <li className={clsx(styles.item, className)}>{children}</li>;
};

List.Item = Item;

export { List };
