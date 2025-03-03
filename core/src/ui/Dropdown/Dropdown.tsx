'use client';

import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import { createContext, FC, useContext, useRef, useState } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';

import styles from './styles.module.scss';
import {
  DropdownContentProps,
  DropdownContextProps,
  DropdownProps,
  DropdownToggleProps
} from './types.js';

const DropdownContext = createContext<DropdownContextProps>({
  isOpen: false,
  toggle: () => {}
});

const DropdownToggle: FC<DropdownToggleProps> = ({ children, className, activeClass }) => {
  const { toggle, isOpen } = useContext(DropdownContext);

  return (
    <button
      className={clsx(styles.toggle, className, {
        [activeClass || '']: isOpen
      })}
      onClick={toggle}
    >
      {children}
    </button>
  );
};

const DropdownContent: FC<DropdownContentProps> = ({
  children,
  className,
  direction = 'left',
  onClick = () => {}
}) => {
  const { isOpen, toggle } = useContext(DropdownContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClickHandler = (event: any) => {
    event.stopPropagation();
    onClick(event);
    toggle();
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={clsx(styles.content, { [styles[direction] as string]: direction }, className)}
      onClick={onClickHandler}
    >
      {children}
    </motion.div>
  );
};

const Dropdown: FC<DropdownProps> & {
  Content: FC<DropdownContentProps>;
  Toggle: FC<DropdownToggleProps>;
} = ({ className, children, isShow = false }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(isShow);

  const toggle = () => setIsOpen(!isOpen);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      <div className={clsx(styles.container, className)} ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

Dropdown.Content = DropdownContent;
Dropdown.Toggle = DropdownToggle;

export { Dropdown };
