import ClubCard from '../../components/ClubCard';
import Club from '../../models/club/Club';
import { useState } from 'react';
import styles from './Discover.module.scss';
import { ClubTab } from './ClubTab';
import { Dropdowns } from './Dropdowns';

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

function searchMatches(search: string, clubName: string): boolean {
  // Check if the length of the first string is greater than or equal to the second string
  if (clubName.length >= search.length) {
    // Check if the prefixes of both strings match
    if (
      clubName.substring(0, search.length).toLowerCase() ===
      search.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}

const Discover: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(clubs[0]);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleClubClick = (club: Club) => {
    setSelectedClub(club);
  };

  return (
    <div className={styles.discover}>
      <div className={styles.searchparams}>
        <input
          className={styles.searchbar}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Clubs"
        />
        <Dropdowns />
      </div>

      <div className={styles.leftColumn}>
        <div className={styles.clubList}>
          {clubs.map((club) =>
            searchMatches(searchValue, club.name) ? (
              <ClubTab
                club={club}
                handleClubClick={handleClubClick}
                selectedClub={selectedClub}
                key={club.id}
              />
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div className={styles.rightColumn}>
        {selectedClub && <ClubCard data={selectedClub} />}
      </div>
    </div>
  );
};

export default Discover;
