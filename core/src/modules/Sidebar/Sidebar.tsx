import { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { PluginList } from '@/components/PluginList';

import styles from './styles.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => (
  <aside className={clsx(className, styles.container)}>
    <Link href="/" className={styles.logo}>
      <Image src="/images/logo.png" alt="" width={200} height={48} />
    </Link>
    <div className={styles.plugins}>
      <PluginList />
    </div>
  </aside>
);
