import { FC, ReactNode } from "react";

import clsx from "clsx";
import styles from "./styles.module.scss";

type MainProps = {
  className?: string;
  children?: ReactNode;
};

export const Main: FC<MainProps> = ({ className, children }) => (
  <main className={clsx(className, styles.container)}>{children}</main>
);
