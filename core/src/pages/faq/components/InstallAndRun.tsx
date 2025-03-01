import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Typography } from '@/ui/Typography';
import { SvgIcon } from '@/ui/SvgIcon';
import { Card } from '@/ui/Card';

export const InstallAndRun = () => (
  <>
    <Typography tag="h2">
      <SvgIcon name="link" />
      Установка и запуск проекта
    </Typography>
    <Typography tag="h3">🛠 Установка зависимостей</Typography>
    <Card title="sh">
      <SyntaxHighlighter language="powershell" style={a11yDark} customStyle={{ padding: '14px' }}>
        yarn install
      </SyntaxHighlighter>
    </Card>
    <Typography tag="p">
      <em>
        * Мы предлагаем искольковать Yarn в качестве пакетног менеджера так как он дает возможностей
        для работы с монорепозиториями.
      </em>
    </Typography>
    <Typography tag="h3">🛠 Запуск проекта в режиме разработки</Typography>
    <Card title="sh">
      <SyntaxHighlighter language="powershell" style={a11yDark} customStyle={{ padding: '14px' }}>
        yarn dev
      </SyntaxHighlighter>
    </Card>
    <Typography tag="p">
      По умолчанию, при использовании <mark>Lerna</mark>, скрипт <mark>Next.js</mark> (core)
      запустится по адресу <a href="#">http://localhost:3000</a>. Плагины будут доступны на портах{' '}
      <mark>3001</mark>, <mark>3002</mark> и далее.. Перед запуском убедитесь, что эти порты
      свободны. Также предусмотрен скрипт, который завершает процессы, использующие соответствующие
      порты. Будьте осторожны и убедитесь, что среди них нет важных процессов.
    </Typography>
    <Typography tag="h3">🔌 Как создать и подключить новый плагин?</Typography>
    <Typography tag="h4">
      1. Использование <mark>starfleet-cli</mark>
    </Typography>
    <Typography tag="p">
      Для удобства мы создали <mark>npm script</mark>{' '}
      <a href="https://www.npmjs.com/package/starfleet-cli" target="_black">
        starfleet-cli
      </a>
      , который автоматически создает структуру нового плагина, удаляет, переименовыввает и
      подключает его к ядру StarFleet.
    </Typography>
    <Typography tag="p">Пример использования:</Typography>
    <Card title="sh">
      <SyntaxHighlighter language="powershell" style={a11yDark} customStyle={{ padding: '14px' }}>
        npx starfleet-cli create
      </SyntaxHighlighter>
    </Card>
    <Typography tag="p">
      Далее плагин задаст несколько вопросов для создания нового плагина и подключения дефолтного
      шаблона. (В примере создается React шаблон на порту <mark>3004</mark>).
    </Typography>
    <Card>
      <Image
        alt="starfleet-cli create"
        src="/images/faq/starfleet-cli-create-example.png"
        width={846}
        height={226}
      />
    </Card>
    <Typography tag="h4">2. Мануальная установка</Typography>
    <Typography tag="p">
      Если вы хотите создать плагин вручную, вам нужно выполнить следующие шаги:
    </Typography>
    <Typography tag="p">
      1. Создать папку в <mark>plugins</mark> с именем вашего плагина и перейдите в нее.
    </Typography>
    <SyntaxHighlighter language="powershell" style={a11yDark} customStyle={{ padding: '14px' }}>
      {`cd plugins

mkdir plugin-example && cd plugin-example
`}
    </SyntaxHighlighter>
    <Typography tag="p">2. Инициализируйте новый package.json:</Typography>
    <SyntaxHighlighter language="powershell" style={a11yDark} customStyle={{ padding: '14px' }}>
      {`yarn init -y
`}
    </SyntaxHighlighter>
  </>
);
