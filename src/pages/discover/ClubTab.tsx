import React, { useEffect, useState } from 'react';
import styles from './Discover.module.scss';
import Club from '../../models/club/Club';
import { Storage } from 'aws-amplify';
import Image from 'next/image';
import { AmplifyS3Image } from '@aws-amplify/ui-react';

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
  const [postImage, setPostImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getImageFromStorage = async () => {
      const signedURL = await Storage.get(club.profilePhoto, {
        level: 'public',
        bucket: 'sproulclub44b893ace0574e03a41da91223ccdfdf202332-staging',
        region: 'us-west-1',
      });
      setPostImage(signedURL);
      console.log(club.profilePhoto);
    };
    getImageFromStorage();
    console.log(postImage);
  }, []);

  return (
    <div
      key={club.id}
      className={`${styles.clubListItem} ${
        selectedClub && club.id === selectedClub.id ? styles.active : ''
      }`}
      onClick={() => handleClubClick(club)}
    >
      <img
        src={postImage !== undefined ? postImage : ''}
        alt={club.name}
        className={styles.clubImage}
      />
      <div className={styles.clubInfo}>
        <h3 className={styles.clubName}>{club.name}</h3>
        <div className={styles.clubTags}>
          {club.categories?.map((tag) => (
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
