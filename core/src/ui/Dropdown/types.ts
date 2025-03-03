import React, { ReactNode } from "react";

export type DropdownContextProps = {
  isOpen: boolean;
  toggle: () => void;
};

export type DropdownProps = {
  children?: any;
  className?: string;
  isShow?: boolean;
};

export type DropdownContentProps = {
  onClick?: (event: MouseEvent | null) => void;
  className?: string;
  children?: any;
  direction?: "left" | "right";
};

export type DropdownToggleProps = {
  onClick?: (event: MouseEvent | null) => void;
  className?: string;
  children?: any;
  activeClass?: string;
};
