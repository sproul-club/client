import styles from './Discover.module.scss';

export default function Discover() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find your community at Berkeley!</h1>;
      <p className={styles.desc}>
        sproul.club helps you discover student clubs, organizations, and
        communities on campus -- built by students, for students!
      </p>
      <div>
        <input className={styles.searchbar} placeholder="Search Clubs" />
      </div>
    </div>
  );
}
