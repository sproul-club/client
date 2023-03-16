import { ReactNode } from 'react';
import styles from './SectionHeading.module.scss';
interface Props {
  children: ReactNode;
}

export default function SectionHeading({ children }: Props) {
  return <h3 className={styles.text}>{children}</h3>;
}
