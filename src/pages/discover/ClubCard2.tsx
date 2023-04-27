import React from 'react';
import styles from './Discover.module.scss';
import Club from '../../models/club/Club';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes,
  faPencilAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

export type ClubCard2Props = {
  club: Club;
  selectedClub: Club | null;
  handleClubClick: any;
};

export const ClubCard2 = ({
  club,
  selectedClub,
  handleClubClick,
}: ClubCard2Props) => {
  return (
    <div
      key={club.id}
      className={`${styles.frontCard} ${
        selectedClub && club.id === selectedClub.id ? styles.active : ''
      }`}
      onClick={() => handleClubClick(club)}
    >
      <img
        src={club.profilePhoto}
        alt={club.name}
        className={styles.cardImage}
      />
      <div className={styles.clubInfo}>
        <h3 className={styles.clubName}>{club.name}</h3>
        <div className={styles.clubStatus}>
          {club.isApplicationOpen ? (
            <div className={styles.openStatus}>
              <FontAwesomeIcon icon={faCheck} /> Open
            </div>
          ) : (
            <div className={styles.closedStatus}>
              <FontAwesomeIcon icon={faTimes} /> Closed
            </div>
          )}

          {club.isApplicationRequired && (
            <span className={styles.appRequired}>
              <FontAwesomeIcon icon={faPencilAlt} /> Application
            </span>
          )}
        </div>
        <div>{club.description.slice(0, 100) + '...'}</div>
      </div>
    </div>
  );
};
