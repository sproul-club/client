import Club from '../../models/club/Club';
import { useState } from 'react';
import styles from './Discover.module.scss';
import { ClubTab } from './ClubTab';
import { Dropdowns } from './Dropdowns';
import { ClubCard2 } from './ClubCard2';
import ClubCard from '../../components/ClubCard';

const club1: Club = {
  id: '1',
  name: 'Club Development at Berkeley',
  abbreviation: 'CDB',
  description:
    'We are a human-centered design consultancy at UC Berkeley founded in 2003. Our mission is to provide a community for students interested in design to develop their skills and experience, and make design education & resources more accessible to everyone at Berkeley. Every semester, we work on design projects that give members hands-on experience with the entire design process, from conducting user research to building and marketing prototypes',
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
const club3: Club = {
  id: '3',
  name: 'Web Dawgs',
  abbreviation: 'WD',
  description: 'This is a club about something interesting.',
  profilePhoto: 'https://via.placeholder.com/150',
  headingPhoto: 'https://via.placeholder.com/300',
  isApplicationOpen: false,
  isApplicationRequired: true,
  categories: ['Tag4'],
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

const clubs: Club[] = [club1, club2, club3];

function checkMatch(
  search: string,
  club: Club,
  appOpen: string,
  appRequired: string,
  tag: string
): boolean {
  const appOpenMatch =
    appOpen === 'any' ||
    (appOpen === 'app-open' && club.isApplicationOpen) ||
    (appOpen === 'app-closed' && !club.isApplicationOpen);

  const appReqMatch =
    appRequired === 'any' ||
    (appRequired === 'app-needed' && club.isApplicationRequired) ||
    (appRequired === 'no-app' && !club.isApplicationRequired);

  let searchMatch = false;
  if (club.name.length >= search.length) {
    // Check if the prefixes of both strings match
    if (
      club.name.substring(0, search.length).toLowerCase() ===
      search.toLowerCase()
    ) {
      searchMatch = true;
    }
  }
  const tagsMatch =
    tag === 'any' ||
    club.categories.some(
      (item) =>
        item.toLowerCase().replaceAll(' ', '') ==
        tag.toLowerCase().replaceAll(' ', '')
    );
  return searchMatch && appOpenMatch && appReqMatch && tagsMatch;
}

const Discover: React.FC = () => {
  const [selectedClub, setSelectedClub] = useState<Club | null>(clubs[0]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [hitSearch, setHitSearch] = useState<boolean>(false);

  const [appOpen, setAppOpen] = useState('any');
  const [appRequired, setAppRequired] = useState('any');
  const [tag, setTag] = useState('any');

  const handleClubClick = (club: Club) => {
    setSelectedClub(club);
  };

  return hitSearch ? (
    <div className={styles.discover}>
      <div className={styles.searchparams}>
        <input
          className={styles.searchbar}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search Clubs"
        />

        <Dropdowns
          appOpen={appOpen}
          setAppOpen={setAppOpen}
          appRequired={appRequired}
          setAppRequired={setAppRequired}
          tag={tag}
          setTag={setTag}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <div className={styles.clubList}>
            {clubs.map((club) =>
              checkMatch(searchValue, club, appOpen, appRequired, tag) ? (
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
    </div>
  ) : (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Find your community at Berkeley!</h1>;
        <p className={styles.desc}>
          sproul.club helps you discover student clubs, organizations, and
          communities on campus -- built by students, for students!
        </p>
        <div>
          <input
            className={styles.searchbar2}
            placeholder="Search Clubs"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                // "Enter" key was pressed
                setHitSearch(true);
                setSearchValue(event.target.value);
              }
            }}
          />
        </div>
      </div>
      <h1>Business</h1>
      <div className={styles.clubScroll}>
        {clubs.map((club) =>
          checkMatch(searchValue, club, appOpen, appRequired, tag) ? (
            <ClubCard2
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
      <h1>Design</h1>
      <div className={styles.clubScroll}>
        {clubs.map((club) =>
          checkMatch(searchValue, club, appOpen, appRequired, tag) ? (
            <ClubCard2
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
  );
};

export default Discover;
