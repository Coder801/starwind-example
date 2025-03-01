import { Icons } from "./constants";

export type SvgIcons = keyof typeof Icons;

export type SvgIconProps = {
  name: SvgIcons;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  onClick?: () => void;
};
