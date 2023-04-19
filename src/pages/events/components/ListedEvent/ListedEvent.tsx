import defaultClub from 'assets/default-club-photo.png';
import clock from 'assets/icons/Property 1=clock.svg';
import calendar from 'assets/icons/calendar.svg';
import heartOutline from 'assets/icons/heartoutline.svg';
import pin from 'assets/icons/pin.svg';
import useAuth from 'contexts/Auth/useAuth';
import Event from 'models/Event';
import Image from 'next/image';
import { MouseEvent } from 'react';
import classes from 'utils/classes';
import styles from './ListedEvent.module.scss';

interface Props {
  event: Event;
  onClick: (event: MouseEvent) => void;
  isSelected?: boolean;
}

const timeOfDay = ['AM', 'PM'];
const months = [
  'Jan.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May.',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
];

export default function ListedEvent({
  event,
  onClick,
  isSelected = false,
}: Props) {
  const { user, toggleFavoriteEvent } = useAuth();
  const start = new Date(event.startTimestamp);
  const end = new Date(event.endTimestamp);
  const startSuffix = timeOfDay[Math.floor(start.getHours() / 12)];
  const endSuffix = timeOfDay[Math.floor(end.getHours() / 12)];

  const isFavorited = user?.favoriteEvents.includes(event.id);

  return (
    <div className={styles.event} onClick={onClick}>
      <div
        className={classes(
          styles.favorite,
          isFavorited ? styles.heartFilled : styles.heartOutline
        )}
        onClick={() => toggleFavoriteEvent(event.id)}
      >
        <Image src={heartOutline} alt="heart-outline" width={27} height={25} />
      </div>
      {event.image ? (
        <div
          className={styles.eventImage}
          style={{ backgroundImage: 'url(' + event.image + ')' }}
        ></div>
      ) : (
          <div className={styles.eventImage}>
            <Image src={defaultClub} />
          </div>
        )}

      <div className={styles.eventContent}>
        <div className={styles.eventName}>{event.name}</div>
        <div className={styles.tagList}>{event.categories.join(' · ')}</div>
        <div className={styles.iconList}>
          <div className={styles.meetingItem}>
            <Image src={calendar} alt="calendar" width={16} height={16} />
            <div className={styles.text} id="date">
              {months[start.getMonth()]} {start.getDay()}
            </div>
          </div>
          <div className={styles.meetingItem}>
            <Image src={clock} alt="clock" width={16} height={16} />
            <div className={styles.text} id="time">
              {start.getHours() % 12}:{start.getMinutes()} {startSuffix}-
              {end.getHours() % 12}:{end.getMinutes()} {endSuffix}
            </div>
          </div>
          <div className={styles.meetingItem}>
            <Image src={pin} alt="pin" width={16} height={16} />
            <div className={styles.text}>{event.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
