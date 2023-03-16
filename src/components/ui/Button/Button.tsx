import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import classes from '../../../utils/classes';
import styles from './Button.module.scss';
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'filled' | 'outlined';
  href?: string;
}

export default function Button({
  variant = 'filled',
  className,
  href,
  ...buttonProps
}: Props) {
  buttonProps.type ||= 'button';

  if (href)
    return (
      <a
        href={href}
        className={classes(styles.button, styles[variant], className)}
        {...buttonProps}
      >
        {buttonProps.children}
      </a>
    );
  return (
    <button
      className={classes(styles.button, styles[variant], className)}
      {...buttonProps}
    >
      {buttonProps.children}
    </button>
  );
}
