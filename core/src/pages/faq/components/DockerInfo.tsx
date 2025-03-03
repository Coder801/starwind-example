import { useTranslation } from 'react-i18next';

import { Typography } from '@/ui/Typography';
import { Code } from '@/ui/Code';
import { List } from '@/ui/List';

export const DockerInfo = () => {
  const { t } = useTranslation('faq');

  return (
    <div id="docker-info">
      <Typography tag="h2">{t('docker_info.title')}</Typography>
      <Typography tag="p">{t('docker_info.description')}</Typography>
      <Typography tag="h3">📌 {t('docker_info.stepsTitle')}</Typography>
      <Typography tag="p">
        1. {t('docker_info.step1')}
        <a target="_blank" href="https://www.docker.com/get-started">
          Docker
        </a>
      </Typography>
      <Typography tag="p">{t('docker_info.step2')}</Typography>
      <Code>docker:build</Code>
      <Typography tag="p">{t('docker_info.step3')}</Typography>
      <Code>docker:up</Code>
      <Typography tag="h4">{t('docker_info.structureTitle')}</Typography>
      <List type="disc">
        <List.Item>
          <Typography tag="p">
            <mark>{t('docker_info.containerCore')}</mark> -{' '}
            {t('docker_info.containerCoreDescription')}
          </Typography>
        </List.Item>
        <List.Item>
          <Typography tag="p">
            <mark>{t('docker_info.containerPluginA')}</mark>,{' '}
            <mark>{t('docker_info.containerPluginB')}</mark> -{' '}
            {t('docker_info.containerPluginsDescription')}
          </Typography>
        </List.Item>
        <List.Item>
          <Typography tag="p">
            <mark>{t('docker_info.containerNginx')}</mark> -{' '}
            {t('docker_info.containerNginxDescription')}
          </Typography>
        </List.Item>
      </List>
      <Typography tag="p">
        4. {t('docker_info.step4')} <a href="#">http://localhost</a>{' '}
        {t('docker_info.step4Description')}
      </Typography>
    </div>
  );
};
