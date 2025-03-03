import { useTranslation, Trans } from 'react-i18next';
import { Typography } from '@/ui/Typography';
import { SvgIcon } from '@/ui/SvgIcon';
import { List } from '@/ui/List';

export const Description = () => {
  const { t } = useTranslation('faq');

  return (
    <div id="description">
      <Typography tag="h2">
        <SvgIcon name="link" />
        {t('description.title')}
      </Typography>
      <Typography tag="p">
        <Trans
          t={t}
          i18nKey="description.intro"
          components={{ strong: <strong />, mark: <mark /> }}
        />
      </Typography>
      <Typography tag="h3">{t('description.components_title')}</Typography>
      <Typography tag="p">
        <Trans
          t={t}
          i18nKey="description.components_text"
          components={{ strong: <strong />, mark: <mark /> }}
        />
      </Typography>
      <Typography tag="p">
        <Trans
          t={t}
          i18nKey="description.module_federation"
          components={{ strong: <strong />, mark: <mark /> }}
        />
      </Typography>
      <Typography tag="h3">{t('description.integration_title')}</Typography>
      <Typography tag="p">{t('description.integration_intro')}</Typography>
      <List>
        <List.Item>
          <Typography tag="p">{t('description.integration_auth')}</Typography>
        </List.Item>
        <List.Item>
          <Typography tag="p">{t('description.integration_storage')}</Typography>
        </List.Item>
        <List.Item>
          <Typography tag="p">{t('description.integration_messaging')}</Typography>
        </List.Item>
        <List.Item>
          <Typography tag="p">{t('description.integration_styling')}</Typography>
        </List.Item>
      </List>
      <Typography tag="h3">{t('description.scalability_title')}</Typography>
      <Typography tag="p">{t('description.scalability_intro')}</Typography>
      <List type="decimal">
        <List.Item>
          <Typography tag="p">
            <Trans
              t={t}
              i18nKey="description.scalability_docker"
              components={{ strong: <strong />, mark: <mark /> }}
            />
          </Typography>
        </List.Item>
        <List.Item>
          <Typography tag="p">
            <Trans
              t={t}
              i18nKey="description.scalability_lerna"
              components={{ strong: <strong />, mark: <mark /> }}
            />
          </Typography>
        </List.Item>
      </List>
      <Typography tag="h3">{t('description.documentation_title')}</Typography>
      <Typography tag="p">{t('description.documentation_text')}</Typography>
      <Typography tag="p">
        <Trans
          t={t}
          i18nKey="description.final_text"
          components={{ strong: <strong />, mark: <mark /> }}
        />
      </Typography>
    </div>
  );
};
