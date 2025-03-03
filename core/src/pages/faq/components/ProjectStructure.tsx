import { useTranslation, Trans } from 'react-i18next';

import { Typography } from '@/ui/Typography';
import { SvgIcon } from '@/ui/SvgIcon';
import { List } from '@/ui/List';
import { Card } from '@/ui/Card';

export const ProjectStructure = () => {
  const { t } = useTranslation('faq');

  return (
    <div id="project-structure">
      <Typography tag="h2">
        <SvgIcon name="link" />
        {t('structure.title')}
      </Typography>
      <Typography tag="p">
        <Trans
          t={t}
          i18nKey="structure.intro"
          components={{ strong: <strong />, mark: <mark /> }}
        />
      </Typography>
      <Card title={t('structure.title')}>
        <pre>
          <code>
            {`starfleet-project/
├── core/                # Main interface
├── plugins/
│   ├── plugin-a/        # Plugin example A
│   ├── plugin-b/        # Plugin example B
├── scripts/             # Scripts for build, deploy, etc.
├── lerna.json           # Lerna config
├── package.json         
├── yarn.lock           
├── Dockerfile           # Docker config
├── .gitignore`}
          </code>
        </pre>
      </Card>
      <List>
        <List.Item>
          <Typography tag="p">
            <Trans t={t} i18nKey="structure.list_item_1" components={{ mark: <mark /> }} />
          </Typography>
        </List.Item>
        <List.Item>
          <Typography tag="p">
            <Trans t={t} i18nKey="structure.list_item_2" components={{ mark: <mark /> }} />
          </Typography>
        </List.Item>
        <List.Item>
          <Typography tag="p">
            <Trans t={t} i18nKey="structure.list_item_3" components={{ mark: <mark /> }} />
          </Typography>
        </List.Item>
      </List>
    </div>
  );
};
