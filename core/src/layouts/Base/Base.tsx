import { FC, ReactNode } from 'react';
import { Sidebar } from '@/modules/Sidebar';
import { Header } from '@/modules/Header';
import { Main } from '@/modules/Main';
import { Footer } from '@/modules/Footer';

import styles from './styles.module.scss';

type BaseProps = {
  children: ReactNode;
};

export const Base: FC<BaseProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <Main className={styles.main}>{children}</Main>
      <Footer className={styles.footer} />
    </div>
  );
};
