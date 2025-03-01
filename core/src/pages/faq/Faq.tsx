import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Image from 'next/image';

import { Base as BaseLayout } from '@/layouts/Base';
import { Typography } from '@/ui/Typography';
import { SvgIcon } from '@/ui/SvgIcon';
import { Divider } from '@/ui/Divider';
import { Card } from '@/ui/Card';

import { Description } from './components/Description';
import { ProjectStructure } from './components/ProjectStructure';
import { InstallAndRun } from './components/InstallAndRun';

import styles from './styles.module.scss';

const Faq = () => {
  return (
    <BaseLayout>
      <div className={styles.container}>
        <Description />
        <Divider />
        <ProjectStructure />
        <Divider />
        <InstallAndRun />
      </div>
    </BaseLayout>
  );
};

export default Faq;
