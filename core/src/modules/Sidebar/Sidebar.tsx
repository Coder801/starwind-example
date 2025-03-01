import { FC } from 'react';
import { isEqual } from 'lodash';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { PluginList } from '@/components/PluginList';
import { FaqNavigation } from '@/components/FaqNavigation';

import styles from './styles.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const router = useRouter();
  const regex = /^\/[^\/]+/;
  const match = router.pathname.match(regex);

  return (
    <aside className={clsx(className, styles.container)}>
      <Link href="/" className={styles.logo}>
        <Image src="/images/logo.png" alt="" width={200} height={48} />
      </Link>

      {match && isEqual(match[0], '/faq') ? (
        <div className={styles.navigation}>
          <FaqNavigation />
        </div>
      ) : (
        <div className={styles.plugins}>
          <PluginList />
        </div>
      )}
    </aside>
  );
};
