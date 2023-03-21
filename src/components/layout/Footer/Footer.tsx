import Image from 'next/image';
import Link from 'next/link';
import heart from '../../../assets/icons/heart.svg';
import instagram from '../../../assets/instagram.svg';
import globe from '../../../assets/globe.svg';

import styles from './Footer.module.scss';

const Footer = () => {
  return <div>
    <div className={styles.loveMsg}>
      <div>made with</div>
      <Image src={heart} alt="heart" width={20} height={18} />
      <div className={styles.space}>by</div>
      <div className={styles.lightBlue}>Web Development at Berkeley</div>
      <div className={styles.noGap}>!</div>
    </div>
    <div className={styles.icons}>
      <Link href="https://www.instagram.com/webatberkeley">
        <a className={styles.iconLink}>
          <Image src={instagram} alt="Instagram" width={20} height={20} />
        </a>
      </Link>
      <Link href="https://www.webatberkeley.org/">
        <a className={styles.iconLink}>
          <Image src={globe} alt="globe" width={20} height={20} />
        </a>
      </Link>
    </div>

  </div >;
};

export default Footer;
