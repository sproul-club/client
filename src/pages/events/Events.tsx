import Image from 'next/image';
import styles from './Events.module.scss';
import { HTMLProps, useState, useCallback } from 'react';
import $ from 'jquery';
import { Console } from 'console';
import Club from '../../models/club/Club';
import Event from '../../models/Event';
import User from '../../models/User';
import heartOutline from '../../assets/icons/heartoutline.svg';
import calendar from '../../assets/icons/Property 1=calendar.svg';
import clock from '../../assets/icons/Property 1=clock.svg';
import pin from '../../assets/icons/pin.svg';
import defaultClub from '../../assets/default-club-photo.png';
import dropdown from '../../assets/icons/dropdown.svg';
import { setDefaultResultOrder } from 'dns';


interface Props extends HTMLProps<HTMLDivElement> {
  events: Event[];
  clubs: Club[];
  users: User[];
}

export default function Events({ events, clubs, users }: Props) {
  //test data -- unsure as to how this will be passed in through the Props so I hard coded for now
  // assuming a list of event objects
  clubs = [
    { id: 'innovate', name: 'Innovate Design', abbreviation: '', description: '', profilePhoto: '', headingPhoto: '', isApplicationOpen: true, isApplicationRequired: true, categories: [], events: ['2'], recruitingSeasons: [], numMembers: 0, yearFounded: '2023', branches: [], website: 'www.sproul.club.com', email: 'sproulclub@gmail.com' }
  ]
  events = [
    { id: '1', name: 'Test', description: 'this is the description', startTimestamp: '2023-10-13T17:30:00Z', endTimestamp: '2023-10-13T18:30:00Z', clubHosts: [], userHosts: [], location: 'Wheeler 150', meetingURI: '', tags: ['a', 'b'], image: '' },
    { id: '2', name: 'Innovative Design Workshop', description: 'this is the description', startTimestamp: '2023-10-13T17:30:00Z', endTimestamp: '2023-10-13T18:30:00Z', clubHosts: ['innovate'], userHosts: ['jane'], location: 'Wheeler 150', meetingURI: '', tags: ['Design', 'Technology', 'Social Good'], image: '' },
    { id: '3', name: 'Innovative Design Workshop', description: 'this is the description', startTimestamp: '2023-10-13T17:30:00Z', endTimestamp: '2023-10-13T18:30:00Z', clubHosts: [], userHosts: [], location: 'Wheeler 150', meetingURI: '', tags: ['Design', 'Technology', 'Social Good'], image: '' },
    { id: '4', name: 'Innovative Design Workshop', description: 'this is the description', startTimestamp: '2023-10-13T17:30:00Z', endTimestamp: '2023-10-13T18:30:00Z', clubHosts: [], userHosts: [], location: 'Wheeler 150', meetingURI: '', tags: ['Design', 'Technology', 'Social Good'], image: '' },
    { id: '5', name: 'Innovative Design Workshop', description: 'this is the description', startTimestamp: '2023-10-13T17:30:00Z', endTimestamp: '2023-10-13T18:30:00Z', clubHosts: [], userHosts: [], location: 'Wheeler 150', meetingURI: '', tags: ['Design', 'Technology', 'Social Good'], image: '' },
    { id: '6', name: 'Innovative Design Workshop', description: 'this is the description', startTimestamp: '2023-10-13T17:30:00Z', endTimestamp: '2023-10-13T18:30:00Z', clubHosts: [], userHosts: [], location: 'Wheeler 150', meetingURI: '', tags: ['Design', 'Technology', 'Social Good'], image: '' }

  ]
  users = [
    { id: 'jane', firstName: 'Jane', lastName: 'Doe', nickname: 'Jane', pronouns: 'she/her', race: '', ethnicity: '', profilePhotoURI: '', majors: [], minors: [], emailPersonal: 'test@gmail.com', emailSchool: 'testschool@gmail.com', phone: '', linkedin: '', website: '', github: '', twitter: '', createdAt: '', interests: [], recommendations: [], favorites: [], applications: [], roles: [] }
  ]
  var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']

  // TODO: toggle favorite heart
  const toggleFavorite = useCallback((event) => {
    console.log(event.target.classList)
    if (event.target.classList.contains(`.${styles.heartOutline}`)) {
      event.target.classList.add(`.${styles.heartFilled}`);
      event.target.classList.remove(`.${styles.heartOutline}`);
    } else {
      event.target.classList.remove(`.${styles.heartFilled}`);
      event.target.classList.add(`.${styles.heartOutline}`);
    }

  }, []);


  // search functionality
  const [query, setQuery] = useState('')
  const onChange = useCallback((event) => {
    const query = event.target.value
    $(`.${styles.event}`).each(function (i, item) {
      var clubName = $(this).find(`.${styles.eventName}`).html()
      if (searchMatches(query, clubName)) {
        $(item).css("display", "flex")
      } else {
        $(item).css("display", "none")
      }
    });
    setQuery(query)
  }, [])
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

  // TODO: clicking event to expand

  // TODO: filter functionality

  //TODO: add event to calendar

  return (
    <div className={styles.container}>
      <div className={styles.categoriesTitle}>Featured club categories</div>
      <div className={styles.categories}>
        <div className={styles.category}>Design</div>
        <div className={styles.category}>Pre-Professional</div>
        <div className={styles.category}>Social Good</div>
        <div className={styles.category}>Sports & Rec</div>
        <div className={styles.category}>Computer Science</div>
      </div>
      <div className={styles.body}>
        <div className={styles.search}>
          <input
            className={styles.searchBox}
            placeholder="Search for events"
            type="text"
            value={query}
            onChange={onChange}
          />
          <div className={styles.dropdowns}>
            <select className={styles.dateDropdown} name="date" id="date">
              <option value="" disabled selected>Date</option>
            </select>
            <select className={styles.timeDropdown} name="time" id="time">
              <option value="" disabled selected>Time</option>
            </select>
            <select className={styles.tagsDropdown} name="tags" id="tags">
              <option value="" disabled selected>Tags</option>
            </select>
          </div>
        </div>
        <div className={styles.eventsContainer}>
          <div id='eventsList' className={styles.eventsList}>
            {events.map((e, i) => {
              var start = new Date(e.startTimestamp)
              var end = new Date(e.endTimestamp)
              return (
                <div className={styles.event} style={i + 1 === events.length ? { border: 'none' } : { borderBottom: '1px solid #dbdbdb' }}>
                  <div className={styles.favorite}>
                    <Image src={heartOutline} alt="heart-outline" width={27} height={25} className={styles.heartOutline} onClick={toggleFavorite} />
                  </div>

                  <div className={styles.eventImage} style={e.image ? { backgroundImage: 'url(' + e.image + ')' } : { backgroundImage: 'url(' + defaultClub + ')' }}></div>

                  <div className={styles.eventContent}>
                    <div className={styles.eventName}>{e.name}</div>
                    <div className={styles.tagList}>{e.tags.join(' · ')}</div>
                    <div className={styles.iconList}>
                      <div className={styles.meetingItem}>
                        <Image src={calendar} alt="calendar" width={16} height={16} />
                        <div className={styles.text}>{months[start.getMonth()]} {start.getDay()}</div>
                      </div>
                      <div className={styles.meetingItem}>
                        <Image src={clock} alt="clock" width={16} height={16} />
                        <div className={styles.text}>{start.getHours() % 12}:-{end.getTime()}</div>
                      </div>
                      <div className={styles.meetingItem}>
                        <Image src={pin} alt="pin" width={16} height={16} />
                        <div className={styles.text}>{e.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.bigEvent}>
            <div className={styles.title}>
              <div className={styles.titleContent}>
                <div className={styles.eventName}>{events[1].name}</div>
                <div className={styles.clubName}>Club: {events[1].clubHosts.map(clubID => clubs.find(item => item.id === clubID)?.name).join(', ')}</div>
                <div className={styles.iconList}>
                  <div className={styles.meetingItem}>
                    <Image src={calendar} alt="calendar" width={16} height={16} />
                    <div className={styles.text}>{months[new Date(events[1].startTimestamp).getMonth()]} {new Date(events[1].startTimestamp).getDay()}</div>
                  </div>
                  <div className={styles.meetingItem}>
                    <Image src={clock} alt="clock" width={16} height={16} />
                    <div className={styles.text}>clock</div>
                  </div>
                  <div className={styles.meetingItem}>
                    <Image src={pin} alt="pin" width={16} height={16} />
                    <div className={styles.text}>{events[1].location}</div>
                  </div>
                </div>
              </div>
              <div className={styles.calendarAndHeart}>
                <div className={styles.addCalendar}>Add to calendar</div>
                <div className={styles.favorite}>
                  <Image src={heartOutline} alt="heart-outline" width={27} height={25} className={styles.heartOutline} onClick={toggleFavorite} />
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.about}>
                <div className={styles.aboutHeading}>About event</div>
                <div className={styles.aboutDescription}>{events[1].description}</div>
              </div>
              <div className={styles.sidebar}>
                <div className={styles.tagsTitle}>Tags</div>
                <div className={styles.tags}>
                  {events[1].tags.sort().map((tag) => (
                    <div className={styles.tag}>{tag}</div>
                  ))}
                </div>
                <div className={styles.linksTitle}>Links</div>
                {/* TODO: make links functional */}
                {events[1].clubHosts.map((clubID) => {
                  var club = clubs.find(item => item.id === clubID)
                  return (
                    <div>
                      {club.website && <div className={styles.link}><div className={styles.underline}>{club.website}</div></div>}
                      {club.email && <div className={styles.link}>{club.email}</div>}
                    </div>
                  )
                })}
                <div className={styles.hosts}>
                  {events[1].userHosts.map((userID) => {
                    var user = users.find(item => item.id === userID)
                    return (
                      <Image src={user.profilePhotoURI} alt="profile photo" width={41} height={41} className={styles.user} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
