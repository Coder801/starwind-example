import { LanguageSwitcher } from '@/components/LanguageSwitcher';

import { Base as BaseLayout } from '@/layouts/Base';
import { Divider } from '@/ui/Divider';

import { Description } from './components/Description';
import { ProjectStructure } from './components/ProjectStructure';
import { InstallAndRun } from './components/InstallAndRun';
import { DockerInfo } from './components/DockerInfo';

import styles from './styles.module.scss';

const Faq = () => {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <LanguageSwitcher className={styles.lang} />
        <Description />
        <Divider className={styles.divider} />
        <ProjectStructure />
        <Divider className={styles.divider} />
        <InstallAndRun />
        <Divider className={styles.divider} />
        <DockerInfo />
      </div>
    </BaseLayout>
  );
};

export default Faq;
