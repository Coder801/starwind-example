import { useTranslation, Trans } from 'react-i18next';
import Image from 'next/image';

import { Typography } from '@/ui/Typography';
import { SvgIcon } from '@/ui/SvgIcon';
import { Card } from '@/ui/Card';
import { Code } from '@/ui/Code';

export const InstallAndRun = () => {
  const { t } = useTranslation('faq');

  return (
    <div id="install-and-run">
      <Typography tag="h2">
        <SvgIcon name="link" />
        {t('install_and_run.title')}
      </Typography>
      <Typography tag="h3">{t('install_and_run.installDependencies')}</Typography>
      <Typography tag="p">
        <Trans
          t={t}
          i18nKey="install_and_run.installDescription"
          components={{ mark: <mark />, a: <a href="#" /> }}
        />
      </Typography>
      <Code>yarn install</Code>
      <Typography tag="p">
        <em>{t('install_and_run.note')}</em>
      </Typography>
      <Typography tag="h3">{t('install_and_run.runProject')}</Typography>

      <Code>yarn dev</Code>

      <Typography tag="h3">{t('install_and_run.createPlugin')}</Typography>

      <Typography tag="h4">
        <Trans t={t} i18nKey="install_and_run.cliUsage" components={{ mark: <mark /> }} />
      </Typography>

      <Typography tag="p">
        <Trans
          t={t}
          i18nKey="install_and_run.cliDescription"
          components={{
            mark: <mark />,
            a: <a href="https://www.npmjs.com/package/starfleet-cli" target="_blank" />
          }}
        />
      </Typography>

      <Typography tag="p">{t('install_and_run.cliExample')}</Typography>

      <Code>npx starfleet-cli create</Code>

      <Typography tag="p">
        <Trans t={t} i18nKey="install_and_run.cliProcess" components={{ mark: <mark /> }} />
      </Typography>

      <Card>
        <Image
          alt="starfleet-cli create"
          src="/images/faq/starfleet-cli-create-example.png"
          width={846}
          height={226}
        />
      </Card>

      <Typography tag="h4">{t('install_and_run.manualSetup')}</Typography>

      <Typography tag="p">{t('install_and_run.manualDescription')}</Typography>

      <Typography tag="p">
        <Trans t={t} i18nKey="install_and_run.step1" components={{ mark: <mark /> }} />
      </Typography>

      <Code>
        {`cd plugins

mkdir plugin-example && cd plugin-example
`}
      </Code>

      <Typography tag="p">{t('install_and_run.step2')}</Typography>

      <Code>yarn init -y</Code>
    </div>
  );
};
