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

export type ClubTabProps = {
  club: Club;
  selectedClub: Club | null;
  handleClubClick: any;
};

export const ClubTab = ({
  club,
  selectedClub,
  handleClubClick,
}: ClubTabProps) => {
  return (
    <div
      key={club.id}
      className={`${styles.clubListItem} ${
        selectedClub && club.id === selectedClub.id ? styles.active : ''
      }`}
      onClick={() => handleClubClick(club)}
    >
      <img
        src={club.profilePhoto}
        alt={club.name}
        className={styles.clubImage}
      />
      <div className={styles.clubInfo}>
        <h3 className={styles.clubName}>{club.name}</h3>
        <div className={styles.clubTags}>
          {club.categories &&
            club.categories.map((tag, index, arr) => (
              <React.Fragment key={tag}>
                <span className={styles.tag}>{tag}</span>
                {index < arr.length - 1 && (
                  <span className={styles.separator}>·</span>
                )}
              </React.Fragment>
            ))}
        </div>
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
            <span>
              <FontAwesomeIcon icon={faPencilAlt} /> Application Required
            </span>
          )}
        </div>
      </div>
      {selectedClub && club.id === selectedClub.id && (
        <FontAwesomeIcon icon={faHeart} className={styles.heartIcon} />
      )}
    </div>
  );
};
