import { ReactNode } from 'react';
import styles from './Subheading.module.scss';
interface Props {
  children: ReactNode;
}

export default function Subheading({ children }: Props) {
  return <h3 className={styles.text}>{children}</h3>;
}
