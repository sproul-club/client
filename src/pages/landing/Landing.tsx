import Link from 'next/link';
import Button from '../../components/ui/Button';

import styles from './Landing.module.scss';

export default function Landing() {
  return (
    <div className={styles['container']}>
      <div className={styles['content']}>
        <h1 className={styles['header']}>Find your community at Berkeley!</h1>
        <p className={styles['subheader']}>
          sproul.club helps you discover student clubs, organizations, and
          communities on campus - built by students, for students!
        </p>
        <div className={styles['buttonContainer']}>
          <Button href="/discover">Explore Clubs</Button>
          <Button href="/catalog">Add your club</Button>
        </div>
      </div>
    </div>
  );
}
