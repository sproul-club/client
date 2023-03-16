import Image from 'next/image';
import Club from '../../models/club/Club';
import classes from '../../utils/classes';
import defaultLogo from '../assets/default_logo.jpg';
import checkMark from '../assets/icons/check_mark.png';
import redVector from '../assets/icons/red_vector.png';
import vector from '../assets/icons/vector.png';
import styles from './Card.module.scss';

interface ClubCard_Props {
  data: Club;
}

const ClubCard = ({ data }: ClubCard_Props) => {
  const { name, description, isApplicationOpen, isApplicationRequired } = data;
  return (
    <div className={styles.card}>
      <div className={styles.background}>
        <div className={styles.content}>
          <div className={styles.bear}>
            <Image
              src={defaultLogo}
              className={styles['default-logo']}
              alt="default-logo"
            />
          </div>
          <div className="right">
            <text className="club-name">{name}</text>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {isApplicationOpen ? (
                <div>
                  <Image src={checkMark} className="check-mark-logo" />
                  <text className={classes(styles['app-info'], styles['open'])}>
                    OPEN
                  </text>
                </div>
              ) : (
                <></>
              )}
              {isApplicationRequired ? (
                <div>
                  <Image src={vector} alt="vector-logo" />
                  <text className={classes(styles['app-info'], styles['req'])}>
                    APPLICATION
                  </text>
                </div>
              ) : (
                <div>
                  <Image src={redVector} alt="red-vector-logo" />
                  <text
                    className={classes(styles['app-info'], styles['not-req'])}
                  >
                    NO APPLICATION
                  </text>
                </div>
              )}
            </div>
          </div>
        </div>
        <text className={styles.desc}>{description}</text>
      </div>
    </div>
  );
};

export default ClubCard;
