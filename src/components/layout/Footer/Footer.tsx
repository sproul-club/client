import Image from 'next/image';
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
      <Image src={instagram} alt="Instagram" width={20} height={20} />
      <Image src={globe} alt="globe" width={20} height={20} />
    </div>

  </div >;
};

export default Footer;
