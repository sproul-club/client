import styles from './MenuOverlay.module.scss';
import Link from 'next/link';
import useAuth from '../../contexts/Auth/useAuth';
import { useRouter } from 'next/router';

interface Props {
  closeNav: () => void;
  navOpen: boolean;
  hasClub: boolean;
}

export default function MenuOverlay({ navOpen, closeNav, hasClub }: Props) {
    const auth = useAuth();
    const router = useRouter();

   return (
    <div className={styles.overlayContainer}>
      <div className={styles.listContainer}>
        
        <div className={router.pathname == "/about" ? styles.selectedMenuOption : styles.menuOption}>
            <Link href="/about">
                <a onClick={closeNav}>About</a>
            </Link>
        </div>
        <hr className={styles.menuDivider}/>
       
        <div className={router.pathname == "/discover" ? styles.selectedMenuOption : styles.menuOption}>
          <Link href="/discover">
            <a onClick={closeNav}>Discover</a>
            </Link>
        </div>
        <hr className={styles.menuDivider}/>
        
        <div className={router.pathname == "/events" ? styles.selectedMenuOption : styles.menuOption}>
          <Link href="/events">
            <a onClick={closeNav}>Events</a>
          </Link>
        </div>
        <hr className={styles.menuDivider}/>
      
        <div className={router.pathname == "/account" ? styles.selectedMenuOption : styles.menuOption}>
          <Link href="/account">
            <a onClick={closeNav}>Account</a>
          </Link>
        </div>
        <hr className={styles.menuDivider}/>
       
        {hasClub ?
        <>
        <div className={router.pathname == "/club" ? styles.selectedMenuOption : styles.menuOption}>
        <Link href="/club">
            <a onClick={closeNav}>Add your club</a>
        </Link>
        </div> 
        <hr className={styles.menuDivider}/>
        </>
        : null}
       
        {auth.isAuthenticated ? null :
        <>
        <div className={router.pathname == "/login" ? styles.selectedMenuOption : styles.menuOption}>
        <Link href="/login">
            <a onClick={closeNav}>Sign In</a>
        </Link> 
        </div>
        <hr className={styles.menuDivider}/>
        </>
        }
        
      </div>
    </div>
  );
};