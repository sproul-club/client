import { ButtonHTMLAttributes } from 'react';
import classes from '../../../utils/classes';
import styles from './Button.module.scss';
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'filled' | 'outlined';
  colorVariant?: 'light' | 'dark';
  href?: string;
}

export default function Button({
  variant = 'filled',
  colorVariant = 'light',
  className,
  children,
  href,
  ...buttonProps
}: Props) {
  buttonProps.type ||= 'button';

  const props: ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> = {
    className: classes(
      styles.button,
      styles[variant],
      styles[colorVariant],
      className
    ),
    ...buttonProps,
  };

  return href ? (
    <a href={href} {...props}>
      {children}
    </a>
  ) : (
    <button {...props}>{children}</button>
  );
}
