import Image from 'next/image';
import styles from './Events.module.scss';
import { HTMLProps, useState, useCallback } from 'react';
import $ from 'jquery';
import { Console } from 'console';
import Event from '../../models/Event';
import heartOutline from '../../assets/icons/heartoutline.svg';
import calendar from '../../assets/icons/Property 1=calendar.svg';
import clock from '../../assets/icons/Property 1=clock.svg';
import pin from '../../assets/icons/pin.svg';
import { setDefaultResultOrder } from 'dns';


interface Props extends HTMLProps<HTMLDivElement> {
  events: Event[];
}

export default function Events({ events }: Props) {
  console.log(events)
  events = [{ id: '1', name: 'test', description: 'this is the description', startTimestamp: '5:30', endTimestamp: '6:30 pm', clubHosts: [], userHosts: [], location: 'Wheeler 150', meetingURI: '', tags: ['a', 'b'] }]

  // clicking event to expand

  // toggle favorite
  const toggleFavorite = useCallback((event) => {
    console.log(event);
    $(`.${styles.heartOutline}`).click(function () {
      $(this).toggleClass(`.${styles.heartFilled}`);
      console.log("toggled");
    });
  }, []);


  // search functionality
  const [query, setQuery] = useState('')
  const onChange = useCallback((event) => {
    console.log(event);
    const query = event.target.value
    const formattedQuery = query.toLowerCase()
    $(`.${styles.event}`).each(function (i, item) {
      if ($(item).find(`.${styles.event_name}`).text().toLowerCase().startsWith(formattedQuery)) {
        $(item).css("display", "block")
      } else {
        $(item).css("display", "none")
      }
    });
    setQuery(query)
  }, [])



  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        Finish categories
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
        <div id='eventsList' className={styles.eventsList}>
          {events.map((e) => (
            <div className={styles.event}>
              <div className={styles.favorite}>
                <Image src={heartOutline} alt="heart-outline" width={27} height={25} className={styles.heartOutline} onClick={toggleFavorite} />
              </div>

              {e.image ?
                <div className={styles.eventImage} style={{ backgroundImage: 'url(' + e.image + ')' }}></div>
                : ''
              }
              <div className={styles.eventContent}>
                <div className={styles.eventName}>{e.name}</div>
                <div className={styles.tagList}>{e.tags.join(' · ')}</div>
                <div className={styles.iconList}>
                  <div className={styles.meetingItem}>
                    <Image src={calendar} alt="calendar" width={16} height={16} />
                    <div className={styles.text}>date</div>
                  </div>
                  <div className={styles.meetingItem}>
                    <Image src={clock} alt="clock" width={16} height={16} />
                    <div className={styles.text}>{e.startTimestamp}-{e.endTimestamp}</div>
                  </div>
                  <div className={styles.meetingItem}>
                    <Image src={pin} alt="pin" width={16} height={16} />
                    <div className={styles.text}>{e.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
