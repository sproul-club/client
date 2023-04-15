import Link from 'next/link';
import Button from '../../components/ui/Button';

import styles from './Landing.module.scss';

import { DataStore } from '@aws-amplify/datastore';
import { Clubs } from '../../models';

export default function Landing() {
  const getData = async () => {
    const models = await DataStore.query(Clubs);
    console.log(models);
  };

  getData();

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
          <Button href="/catalog" variant="outlined">
            Add your club
          </Button>
        </div>
      </div>
    </div>
  );
}
