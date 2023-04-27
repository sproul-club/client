import useAuth from '../../contexts/Auth/useAuth';
import Category, { CategoryString } from '../../models/Category';
import Event from '../../models/Event';
import EventCard from '../../components/EventCard';
import User from '../../models/User';
import Club from '../../models/club/Club';
import { ChangeEvent, HTMLProps, useMemo, useState } from 'react';
import styles from './Events.module.scss';
import ListedEvent from './components/ListedEvent/ListedEvent';

// test data -- unsure as to how this will be passed in through the Props so I hard coded for now
// assuming a list of event objects
const dummyClubs = [
  {
    id: 'innovate',
    name: 'Innovate Design',
    abbreviation: '',
    description: '',
    profilePhoto: '',
    headingPhoto: '',
    isApplicationOpen: true,
    isApplicationRequired: true,
    categories: [],
    events: ['2'],
    recruitingSeasons: [],
    numMembers: 0,
    yearFounded: '2023',
    branches: [],
    website: 'www.sproul.club',
    email: 'sproulclub@gmail.com',
  },
];
const dummyEvents: Event[] = [
  {
    id: '1',
    name: 'Case in point: a guide to finance',
    description: 'this is the description',
    startTimestamp: '2023-10-13T08:30:00',
    endTimestamp: '2023-10-13T10:30:00',
    clubHosts: [],
    userHosts: [],
    location: 'Wheeler 150',
    meetingURI: '',
    categories: ['Technology'],
    image: '',
  },
  {
    id: '2',
    name: 'Innovative Design Workshop',
    description: 'this is the description',
    startTimestamp: '2023-04-05T17:30:00',
    endTimestamp: '2023-04-05T18:30:00',
    clubHosts: ['innovate'],
    userHosts: ['jane'],
    location: 'Wheeler 150',
    meetingURI: '',
    categories: ['Design', 'Technology', 'Social Good'],
    image: '',
  },
  {
    id: '3',
    name: 'Intro to consulting in the world of social good',
    description: 'this is the description',
    startTimestamp: '2023-01-01T17:30:00',
    endTimestamp: '2023-10-13T18:30:00',
    clubHosts: [],
    userHosts: [],
    location: 'Wheeler 150',
    meetingURI: '',
    categories: ['Design', 'Technology', 'Social Good'],
    image: '',
  },
  {
    id: '4',
    name: 'Audio design in VR',
    description: 'this is the description',
    startTimestamp: '2023-04-02T17:30:00',
    endTimestamp: '2023-10-13T18:30:00',
    clubHosts: [],
    userHosts: [],
    location: 'Wheeler 150',
    meetingURI: '',
    categories: ['Design', 'Technology', 'Social Good'],
    image: '',
  },
  {
    id: '5',
    name: 'Innovative Design Workshop',
    description: 'this is the description',
    startTimestamp: '2023-07-04T17:30:00',
    endTimestamp: '2023-10-13T18:30:00',
    clubHosts: [],
    userHosts: [],
    location: 'Wheeler 150',
    meetingURI: '',
    categories: ['Design', 'Technology', 'Social Good'],
    image: '',
  },
  {
    id: '6',
    name: 'Innovative Design Workshop',
    description: 'this is the description',
    startTimestamp: '2023-11-17T17:30:00',
    endTimestamp: '2023-10-13T18:30:00',
    clubHosts: [],
    userHosts: [],
    location: 'Wheeler 150',
    meetingURI: '',
    categories: ['Design', 'Technology', 'Social Good'],
    image: '',
  },
];
const dummyUsers = [
  {
    id: 'jane',
    firstName: 'Jane',
    lastName: 'Doe',
    nickname: 'Jane',
    pronouns: 'she/her',
    race: '',
    ethnicity: '',
    profilePhotoURI: '',
    majors: [],
    minors: [],
    emailPersonal: 'test@gmail.com',
    emailSchool: 'testschool@gmail.com',
    phone: '',
    linkedin: '',
    website: '',
    github: '',
    twitter: '',
    createdAt: '',
    interests: [],
    recommendations: [],
    favorites: [],
    applications: [],
    roles: [],
    favoriteEvents: [],
    favoriteClubs: [],
  },
];

const allMonths = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const allTimes = ['morning', 'afternoon', 'evening'];

const months = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
];
const timeOfDay = ['AM', 'PM'];

interface Props extends HTMLProps<HTMLDivElement> {
  events: Event[];
  clubs: Club[];
  users: User[];
}

interface Filters {
  query?: string;
  date?: string;
  time?: string;
  categories?: CategoryString[];
  tag?: CategoryString;
  /* @ggams2020 implement the rest of the potential filters*/
}

function getMap(events: Event[]) {
  const map: Record<Event['id'], Event> = {};
  events.forEach((event) => {
    map[event.id] = event;
  });
  return map;
}

function filterEvents(filters: Filters, events: Event[]) {
  return events.filter((event) => {
    var filtered = true;
    if (filters.query) {
      const query = filters.query.toLowerCase();
      if (!(event.name.toLowerCase().includes(query) || event.description.toLowerCase().includes(query))) filtered = false;
    }
    if (filters.date) {
      const date = filters.date.toLowerCase();
      const eventMonthNumber = parseInt(event.startTimestamp.slice(5, 7));
      if (!(date == allMonths[eventMonthNumber - 1])) filtered = false;
    }
    if (filters.time) {
      const time = filters.time.toLowerCase();
      const eventHourNumber = parseInt(event.startTimestamp.slice(11, 13));
      if ((time == 'morning') && !(eventHourNumber < 12)) filtered = false;
      else if ((time == 'afternoon') && !(eventHourNumber >= 12 && eventHourNumber < 17)) filtered = false;
      else if ((time == 'evening') && !(eventHourNumber >= 17)) filtered = false;
    }
    if (filters.tag) {
      const tag = filters.tag as CategoryString;
      const eventTagsFormatted = event.categories;
      if (!(eventTagsFormatted.includes(tag))) filtered = false;
    }
    if (filters.categories) {
      const categs = filters.categories
      for (var i = 0; i < categs.length; i++) {
        var c = categs[i];
        const eventTagsFormatted = event.categories;
        if (!(eventTagsFormatted.includes(c))) filtered = false;
      }
    }
    return filtered;
  });
}

export default function Events({
  events = dummyEvents,
  clubs = dummyClubs,
  users = dummyUsers,
}: Props) {
  // to do: implement adding and removing categories.  Currently only adding works
  const [categoryStyle, setStyle] = useState(styles.category);
  const { toggleFavoriteEvent } = useAuth();
  const mappedEvents = useMemo(() => getMap(events), [events]);
  const [filters, setFilters] = useState<Filters>({});
  const queryResults = filterEvents(filters, events);
  const [selectedEventId, setSelectedEvent] = useState<Event['id']>(
    events[0].id
  );
  const selectedEvent = mappedEvents[selectedEventId];

  function handleEventClick(eventId: Event['id']) {
    setSelectedEvent(eventId);
  }

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    setFilters((prev) => ({ ...prev, query: event.target.value }));
  }

  function addCategory(category: CategoryString) {
    setFilters((prev) => ({
      ...prev,
      categories: (prev.categories
        ? prev.categories.concat(category)
        : [category]),
    }));
  }

  function removeCategory(category: string) {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories
        ? prev.categories.filter((c) => c != category)
        : [],
    }));
  }

  function handleDateChange(event: ChangeEvent<HTMLSelectElement>) {
    setFilters((prev) => ({ ...prev, date: event.target.value }));
  }

  function handleTimeChange(event: ChangeEvent<HTMLSelectElement>) {
    setFilters((prev) => ({ ...prev, time: event.target.value }));
  }

  function handleTagChange(event: ChangeEvent<HTMLSelectElement>) {
    setFilters((prev) => ({ ...prev, tag: event.target.value as CategoryString }));
  }

  return (
    <div className={styles.container}>
      <div className={styles.categoriesTitle}>Featured club categories</div>
      <div className={styles.categories}>
        {Category.featuredCategories.map((category, catIdx) => (
          <div
            key={catIdx}
            className={styles.category}
            onClick={() => addCategory(category as CategoryString)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <div className={styles.search}>
          <input
            className={styles.searchBox}
            placeholder="Search for events"
            type="text"
            value={filters.query}
            onChange={handleQueryChange}
          />
          <div className={styles.dropdowns}>
            <select
              className={styles.dateDropdown}
              name="date"
              id="date"
              value={filters.date}
              onChange={handleDateChange}
            >
              <option value="" disabled selected>
                Date
              </option>
              {allMonths.map((month, monthIdx) => (
                <option key={monthIdx} value={month}>
                  {month.toTitleCase()}
                </option>
              ))}
            </select>
            <select
              className={styles.timeDropdown}
              name="time"
              id="time"
              value={filters.time}
              onChange={handleTimeChange}
            >
              <option value="" disabled selected>
                Time
              </option>
              {allTimes.map((time, timeIdx) => (
                <option key={timeIdx} value={time}>
                  {time.toTitleCase()}
                </option>
              ))}
            </select>
            <select
              className={styles.tagsDropdown}
              name="tag"
              id="tag"
              value={filters.tag}
              onChange={handleTagChange}
            >
              <option value="" disabled selected>
                Tags
              </option>
              {Category.allCategories.map((tag, tagIdx) => (
                <option key={tagIdx} value={tag}>
                  {tag.toTitleCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.eventsContainer}>
          <div className={styles.eventsList}>
            {queryResults.map((e, eventIdx) => (
              <div style={eventIdx + 1 === events.length ? { border: 'none' } : { borderBottom: '1px solid #dbdbdb' }}>
                <ListedEvent
                  key={eventIdx}
                  event={e}
                  isSelected={e.id === selectedEventId}
                  onClick={() => handleEventClick(e.id)}
                />
              </div>
            ))}
          </div>
          {selectedEvent && <EventCard data={selectedEvent} clubs={clubs} users={users} />}
        </div>
      </div>
    </div>
  );
}
