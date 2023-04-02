import styles from './Events.module.scss';
import { HTMLProps, useState, useCallback } from 'react';
import $ from 'jquery';
import { Console } from 'console';

interface Tag {
  name: string;
}

interface Link {
  url: string;
}

interface Event {
  title: string;
  club: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tags: Tag[];
  links: Link[];
  image: string;
}
interface Props extends HTMLProps<HTMLDivElement> {
  events: Event[];
}


export default function Events({ events }: Props) {
  console.log(events)
  // search functionality
  const [query, setQuery] = useState('')
  const onChange = useCallback((event) => {
    const query = event.target.value
    const formattedQuery = query.toLowerCase()
    console.log(query)
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

      </div>
      <div className={styles.body}>
        <div className={styles.search}>
          <input
            className={styles.search_box}
            placeholder="Search for events"
            type="text"
            value={query}
            onChange={onChange}
          />

        </div>
      </div>
    </div>
  );
}
