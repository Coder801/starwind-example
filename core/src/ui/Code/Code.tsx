import clsx from 'clsx';
import { FC } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './styles.module.scss';

type CodeProps = {
  title?: string;
  lang?: 'bash' | 'json' | 'typescript' | 'javascript' | 'css' | 'scss' | 'html';
  className?: string;
  children: string;
  copy?: boolean;
};

export const Code: FC<CodeProps> = ({ children, title, className, copy, lang = 'bash' }) => {
  return (
    <div className={clsx(styles.container, className)}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>
        <pre className={styles[lang]}>
          <code>{children}</code>
        </pre>
        {copy && (
          <div className={styles.copy}>
            <CopyToClipboard text={children}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                fill="#e0e1dd"
              >
                <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
              </svg>
            </CopyToClipboard>
          </div>
        )}
      </div>
    </div>
  );
};
