import { HTMLProps } from 'react';
import classes from '../../../../../utils/classes';
import styles from './Row.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {}

export default function Row({ children, className, ...divProps }: Props) {
  return (
    <div className={classes(styles.row, className)} {...divProps}>
      {children}
    </div>
  );
}
