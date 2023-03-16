import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import classes from '../../../utils/classes';
import styles from './Button.module.scss';
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  variant?: 'red' | 'white';
  href?: string;
}

export default function Button({
  variant,
  className,
  href,
  ...buttonProps
}: Props) {
  const colorClass = !!variant ? styles[variant] : null;
  buttonProps.type ||= 'button';

  if (href)
    return (
      <a
        href={href}
        className={classes(styles.button, colorClass, className)}
        {...buttonProps}
      >
        {buttonProps.children}
      </a>
    );
  return (
    <button
      className={classes(styles.button, colorClass, className)}
      {...buttonProps}
    >
      {buttonProps.children}
    </button>
  );
}
