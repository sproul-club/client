import styles from './EventCard.module.scss';
import Event from '../../models/Event';
import Image from 'next/image';
import User from '../../models/User';
import Club from '../../models/club/Club';
import calendar from 'assets/icons/calendar.svg';
import clock from 'assets/icons/Property 1=clock.svg';
import heartOutline from 'assets/icons/heartoutline.svg';
import pin from 'assets/icons/pin.svg';
import useAuth from '../../contexts/Auth/useAuth';
import Link from 'next/link';



interface EventProps {
    data: Event;
    clubs: Club[];
    users: User[];
}

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

export default function EventCard({ data, clubs, users }: EventProps) {
    const selectedEvent = data;

    // TODO: add event to calendar
    function addToCalendar() {
        console.log(`${selectedEvent.name} added to calendar`);
    }
    const { toggleFavoriteEvent } = useAuth();

    return (
        <div className={styles.bigEvent}>
            <div className={styles.title}>
                <div className={styles.titleContent}>
                    <div className={styles.eventName}>{selectedEvent.name}</div>
                    <div className={styles.clubName}>
                        Club:{' '}
                        {selectedEvent.clubHosts
                            .map(
                                (clubID) => clubs.find((item) => item.id === clubID)?.name
                            )
                            .join(', ')}
                    </div>
                    <div className={styles.iconList}>
                        <div className={styles.meetingItem}>
                            <Image
                                src={calendar}
                                alt="calendar"
                                width={16}
                                height={16}
                            />
                            <div className={styles.text}>
                                {months[new Date(selectedEvent.startTimestamp).getMonth()]}{' '}
                                {new Date(selectedEvent.startTimestamp).getDate()}
                            </div>
                        </div>
                        <div className={styles.meetingItem}>
                            <Image src={clock} alt="clock" width={16} height={16} />
                            <div className={styles.text}>
                                {new Date(selectedEvent.startTimestamp).getHours() % 12}:
                      {new Date(selectedEvent.startTimestamp).getMinutes()}{' '}
                                {
                                    timeOfDay[
                                    Math.floor(
                                        new Date(selectedEvent.startTimestamp).getHours() / 12
                                    )
                                    ]
                                }
                      -{new Date(selectedEvent.endTimestamp).getHours() % 12}:
                      {new Date(selectedEvent.endTimestamp).getMinutes()}{' '}
                                {
                                    timeOfDay[
                                    Math.floor(
                                        new Date(selectedEvent.endTimestamp).getHours() / 12
                                    )
                                    ]
                                }
                            </div>
                        </div>
                        <div className={styles.meetingItem}>
                            <Image src={pin} alt="pin" width={16} height={16} />
                            <div className={styles.text}>{selectedEvent.location}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.calendarAndHeart}>
                    <div className={styles.addCalendar} onClick={addToCalendar}>
                        Add to calendar
                </div>
                    <div className={styles.favorite}>
                        <Image
                            src={heartOutline}
                            alt="heart-outline"
                            width={27}
                            height={25}
                            className={styles.heartOutline}
                            onClick={() => toggleFavoriteEvent(selectedEvent.id)}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.about}>
                    <div className={styles.aboutHeading}>About event</div>
                    <div className={styles.aboutDescription}>
                        {selectedEvent.description}
                    </div>
                </div>
                <div className={styles.sidebar}>
                    <div className={styles.tagsTitle}>Tags</div>
                    <div className={styles.tags}>
                        {selectedEvent.categories.sort().map((tag, tagIdx) => (
                            <div key={tagIdx} className={styles.tag}>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className={styles.linksTitle}>Links</div>

                    {selectedEvent.clubHosts.map((clubId) => {
                        const club = clubs.find((item) => item.id === clubId);
                        if (!club) return;
                        const website = 'https://' + club?.website;
                        const mailto = 'mailto: ' + club?.email;
                        return (
                            <div key={clubId}>
                                {club.website && (
                                    <div className={styles.link}>
                                        <Link href={website} className={styles.underline}>
                                            {club.website}
                                        </Link>
                                    </div>
                                )}
                                {club.email && (
                                    <div className={styles.link}>
                                        <Link href={mailto} className={styles.underline}>
                                            {club.email}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    <div className={styles.hosts}>
                        {selectedEvent.userHosts.map((userID) => {
                            const user = users.find((item) => item.id === userID);
                            if (user?.profilePhotoURI) {
                                return (
                                    <Image
                                        src={user.profilePhotoURI}
                                        alt="profile photo"
                                        width={41}
                                        height={41}
                                        className={styles.user}
                                    />
                                );
                            } else {
                                return <div className={styles.noPhoto}></div>;
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
