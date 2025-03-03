'use client';

import clsx from 'clsx';
import { FC, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { COUNTRIES } from './constants';
import { LanguageSwitcherProps } from './types';
import styles from './styles.module.scss';

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n]);

  return (
    <div className={clsx(styles.container, className)}>
      {COUNTRIES.map(({ id, name, lang, code }) => (
        <div
          key={id}
          onClick={() => {
            handleLanguageChange(lang);
          }}
          className={styles.item}
        >
          <Image alt={`flag-${name}`} src={`/images/flags/${code}.svg`} width={24} height={24} />
        </div>
      ))}
    </div>
  );
};
