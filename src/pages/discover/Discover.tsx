import ClubCard from '../../components/ClubCard';
import Club from '../../models/club/Club';
import { useState, useEffect } from 'react';
import styles from './Discover.module.scss';
import { ClubTab } from './ClubTab';
import { Dropdowns } from './Dropdowns';
import { DataStore } from '@aws-amplify/datastore';
import { Clubs } from '../../models';


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
  const [clubs, setClubs] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const models = await DataStore.query(Clubs);
      console.log(models);
      setClubs(models);
    };
    getData();
    console.log('df');
    console.log(clubs);
  }, []);

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
    <div className={styles.container}>
      <h1 className={styles.title}>Find your community at Berkeley!</h1>
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
  );
};

export default Discover;
