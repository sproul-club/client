import React from 'react';
import styles from './Discover.module.scss';
import Club from '../../models/club/Club';

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
          {club.categories.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.clubStatus}>
          {club.isApplicationOpen ? (
            <div className={styles.openStatus}>Open</div>
          ) : (
            <div className={styles.closedStatus}>Closed</div>
          )}

          {club.isApplicationRequired && <span>Application Required</span>}
        </div>
      </div>
    </div>
  );
};
