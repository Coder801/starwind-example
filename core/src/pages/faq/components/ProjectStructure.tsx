import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Typography } from '@/ui/Typography';
import { SvgIcon } from '@/ui/SvgIcon';
import { List } from '@/ui/List';
import { Card } from '@/ui/Card';

export const ProjectStructure = () => (
  <>
    <Typography tag="h2">
      <SvgIcon name="link" />
      Структура проекта
    </Typography>
    <Typography tag="p">
      Проект организован в виде монорепозитория с использованием <mark>Lerna</mark> и
      <mark>yarn workspaces</mark>.
    </Typography>
    <Card title="Структура проекта">
      <SyntaxHighlighter language="json" style={agate} customStyle={{ padding: '14px' }}>
        {JSON.stringify(
          {
            'starfleet-project': {
              core: '# Main interface',
              plugins: {
                'plugin-a': '# Plugin examle a',
                'plugin-b': '# Plugin examle b'
              },
              scripts: '# scripts for build, deploy, etc.',
              'lerna.json': '# Lerna config',
              'package.json': '',
              'yarn.lock': '',
              Dockerfile: '# Docker config',
              '.gitignore': ''
            }
          },
          null,
          2
        )}
      </SyntaxHighlighter>
    </Card>
    <List>
      <List.Item>
        <Typography tag="p">
          <mark>core/</mark> – это основной интерфейс, написанный на Next.js. В нем находятся
          страницы, API-роуты, базовая логика приложения.
        </Typography>
      </List.Item>
      <List.Item>
        <Typography tag="p">
          <mark>plugins/</mark> – каталог для плагинов. Каждый плагин является отдельным модулем и
          может быть написан на любом фреймворке (React, Vue, Angular). Подключение плагинов
          реализовано через Webpack Module Federation.
        </Typography>
      </List.Item>
      <List.Item>
        <Typography tag="p">
          <mark>scripts/</mark> – скрипты для сборки, управления плагинами и автоматизации
          развертывания.
        </Typography>
      </List.Item>
    </List>
  </>
);
