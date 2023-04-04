import ClubCard from '../../components/ClubCard';
import Club from '../../models/club/Club';
import { useState } from 'react';
import styles from './Discover.module.scss';

const club1: Club = {
  id: '1',
  name: 'Club Development at Berkeley',
  abbreviation: 'CDB',
  description:
    'We are a human-centered design consultancy at UC Berkeley founded in 2003. Our mission is to provide a community for students interested in design to develop their skills and experience, and make design education & resources more accessible to everyone at Berkeley. Every semester, we work on design projects that give members hands-on experience with the entire design process, from conducting user research to building and marketing prototypesWe are looking for sick cunts',
  profilePhoto: 'https://via.placeholder.com/150',
  headingPhoto: 'https://via.placeholder.com/300',
  isApplicationOpen: true,
  isApplicationRequired: true,
  categories: ['Tag1', 'Tag2', 'Tag3'],
  events: ['event1', 'event2'],
  recruitingSeasons: ['season1', 'season2'],
  numMembers: 100,
  yearFounded: '2014',
  branches: [],
  website: 'https://example.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  email: 'email@example.com',
};
const club2: Club = {
  id: '2',
  name: 'Clubby',
  abbreviation: 'CN',
  description: 'This is a club about something interesting.',
  profilePhoto: 'https://via.placeholder.com/150',
  headingPhoto: 'https://via.placeholder.com/300',
  isApplicationOpen: false,
  isApplicationRequired: true,
  categories: ['Tag1', 'Tag2'],
  events: ['event1', 'event2'],
  recruitingSeasons: ['season1', 'season2'],
  numMembers: 20,
  yearFounded: '2020',
  branches: [],
  website: 'https://example.com',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  discord: 'https://discord.com',
  email: 'email@example.com',
};

const clubs: Club[] = [club1, club2];

const Discover: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(clubs[0]);

  const handleClubClick = (club: Club) => {
    setSelectedClub(club);
  };

  return (
    <div className={styles.discover}>
      <div className={styles.leftColumn}>
        <div className={styles.clubList}>
          {clubs.map((club) => (
            // Can put this into another component
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

                  {club.isApplicationRequired && (
                    <span>Application Required</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.rightColumn}>
        {selectedClub && <ClubCard data={selectedClub} />}
      </div>
    </div>
  );
};

export default Discover;
