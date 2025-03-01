import { Typography } from '@/ui/Typography';
import { SvgIcon } from '@/ui/SvgIcon';
import { List } from '@/ui/List';

export const Description = () => (
  <>
    <Typography tag="h2">
      <SvgIcon name="link" />
      StarFleet Project — Платформа для мониторинга и управления информационными системами{' '}
    </Typography>
    <Typography tag="p">
      <strong>StarFleet Project</strong> — это open-source фреймворк, созданный для построения
      систем мониторинга и управления различными информационными системами. При разработке
      архитектуры и выборе технологий мы ориентировались на низкий порог вхождения для новых
      разработчиков, что позволяет легко начать участие в проекте. Для обеспечения высокой
      надежности и масштабируемости решения мы использовали проверенные технологии, такие как
      <mark>Node.js</mark>, <mark>Next.js</mark>, <mark>React.js</mark>,<mark>Docker</mark> и{' '}
      <mark>Nginx</mark>.
    </Typography>
    <Typography tag="h3">Основные компоненты StarFleet Project</Typography>
    <Typography tag="p">
      Основной движущей силой <mark>StarFleet Project</mark> являются разработчики плагинов. Мы
      уверены, что успех StarFleet напрямую зависит от комьюнити, и именно вам, разработчикам
      плагинов, мы обязаны нашим развитием. С помощью StarFleet Plugins вы можете расширять
      функциональность системы как на Frontend, так и на Backend. Проект предоставляет гибкость
      выбора инструментов и фреймворков для создания плагинов, будь то <mark>React</mark>,{' '}
      <mark>Vue</mark>, <mark>Angular</mark> или другие.
    </Typography>
    <Typography tag="p">
      Система интеграции плагинов работает через технологию <mark>Module Federation</mark>{' '}
      (Webpack), что позволяет плагинам быть независимыми и динамически подгружаемыми в основное
      приложение. Разработка плагинов с минимальными усилиями StarFleet почти не ограничивает вас в
      выборе инструментов для разработки, но при этом предоставляет готовые скрипты и примеры кода,
      которые позволят даже начинающим разработчикам создавать плагины с минимальными усилиями.
    </Typography>
    <Typography tag="h3">Интеграция плагинов в ядро StarFleet</Typography>
    <Typography tag="p">
      Ядро StarFleet Project является основой для взаимодействия плагинов и предоставляет несколько
      ключевых сервисов и инструментов:
    </Typography>
    <List>
      <List.Item>
        <Typography tag="p">Аутентификация и авторизация для защиты системы.</Typography>
      </List.Item>
      <List.Item>
        <Typography tag="p">
          Сервис хранения данных в формате ключ-значение для обеспечения обмена данными между
          плагинами.
        </Typography>
      </List.Item>
      <List.Item>
        <Typography tag="p">
          Механизмы передачи сообщений между плагинами на Frontend и Backend.
        </Typography>
      </List.Item>
      <List.Item>
        <Typography tag="p">
          Стилизационные компоненты для React.js, которые помогут вам создать интерфейсы в едином
          стиле и сократят время на поиски компонентов.
        </Typography>
      </List.Item>
    </List>
    <Typography tag="h3">Масштабируемость и гибкость </Typography>
    <Typography tag="p">
      Проект предоставляет две основные сборки для разработки и развертывания:
    </Typography>
    <List type="decimal">
      <List.Item>
        <Typography tag="p">
          <mark>Docker</mark> — контейнеризация и развертывание на различных средах.
        </Typography>
      </List.Item>
      <List.Item>
        <Typography tag="p">
          <mark>Lerna Monorepo</mark> — используется для динамичной разработки и управления
          плагинов. Разворачивает плагины как независимые приложения на разных портах.
        </Typography>
      </List.Item>
    </List>
    <Typography tag="h3">Примеры кода и документация</Typography>
    <Typography tag="p">
      Мы также предоставляем обширную документацию и примеры кода, которые помогут вам решить
      большинство распространенных задач, таких как агрегация данных с third-party систем. Эти
      примеры и готовые решения позволяют вам сосредоточиться на бизнес-логике, а не на реализации
      сложных технических деталей.
    </Typography>
    <Typography tag="p">
      <strong>StarFleet Project</strong> стремится сделать создание плагинов простым и доступным для
      всех, обеспечивая надежную и масштабируемую платформу для мониторинга и управления
      информационными системами.
    </Typography>
  </>
);
