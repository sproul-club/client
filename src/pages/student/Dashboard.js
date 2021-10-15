
import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import Footer from '../../components/layout/footer/Footer';
import Loading from '../../components/layout/loading/Loading';
import MasterTimeline from './MasterTimeline';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import Delete from '@material-ui/icons/DeleteOutlineRounded';
import RightArrow from '@material-ui/icons/ChevronRightRounded';
import LeftArrow from '@material-ui/icons/ChevronLeftRounded';
import ReactMoment from 'react-moment';
import {
  containsToday,
  isUpcoming,
  simplestRangeFormat,
  simpleDayFormat,
  END_DATETIME,
  isSameDay,
  isWithinOneWeek,
  isWithinFourWeeks,
  eventsOverlap,
} from '../../utils/formatTimeAndDate';
import AppTracker from './AppTracker';
import ClubCardSimple from '../club/ClubCardSimple';
import ClubEvents from './ClubEvents';
import Onboarding from './studentOnboarding/Onboarding';
import OnboardingModal from './studentOnboarding/onboardingModal/OnboardingModal';
import Modal from '../../components/layout/modal/Modal';

function Dashboard({ student }) {
  useEffect(() => {
    // Outline leftover from ClubPage
  }, []);
  const [showTrackerModal, setTrackerModal] = useState(false);
  const [showOnboardingModal, setOnboardingModal] = useState(true);
  const [showBoardModal, setBoardModal] = useState(false);
  const [showCurrentClub, setCurrentClub] = useState('');

  function cancelEdit() {
    setTrackerModal(false);
  }

  function exitOnboarding() {
    setOnboardingModal(false);
  }

  function exitBoardClub() {
    setBoardModal(false);
  }

  /* TEMPORARY HARDCODED STUDENT FOR TESTING */
  student = {
    name: 'Obama',
    majors: [],
    minors: [],
    interests: [],
    favorited_clubs: ['Karasuno High VBC', 'User Testing'],
    visited_clubs: [],
    recommended_clubs: [
      {
        link_name: "shrek-2-appreciation", 
        name: "Recommended Club 1", 
        logo_url: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png", 
        about_us: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis facilisis ipsum. Cras ac erat nibh. Integer semper nec arcu id elementum. Vestibulum in arcu lacus. Duis sodales lectus risus, quis blandit enim suscipit et. Sed tristique turpis ex, ut vulputate ex sollicitudin quis."
      },
      {
        link_name: "shrek-2-appreciation", 
        name: "Recommended Club 2", 
        logo_url: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png", 
        about_us: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis facilisis ipsum. Cras ac erat nibh. Integer semper nec arcu id elementum. Vestibulum in arcu lacus. Duis sodales lectus risus, quis blandit enim suscipit et. Sed tristique turpis ex, ut vulputate ex sollicitudin quis."
      },
      {
        link_name: "shrek-2-appreciation", 
        name: "Recommended Club 3", 
        logo_url: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png", 
        about_us: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis facilisis ipsum. Cras ac erat nibh. Integer semper nec arcu id elementum. Vestibulum in arcu lacus. Duis sodales lectus risus, quis blandit enim suscipit et. Sed tristique turpis ex, ut vulputate ex sollicitudin quis."
      }
    ],
    club_board: {
      interested_clubs: [
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          major_requirements: ["EECS", "Data Science", "Computer Science"],
          class_requirements: ["CS 61A"],
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-06-01T23:59:00',
              event_start: '2021-06-02T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Application Due',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-06-01T23:59:00',
              event_start: '2021-06-02T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Workshop #1',
            },
          ],
        },
        {
          name: 'random club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          major_requirements: ["MCB", "Bioengineering"],
          class_requirements: ["CHEM 1A", "CHEM 1AL"],
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-06-05T23:59:00',
              event_start: '2021-06-06T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #2',
            },
          ],
        },
      ],
      applied_clubs: [
        {
          name: 'devclub',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          major_requirements: ["Economics"],
          class_requirements: [],
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-06-04T23:59:00',
              event_start: '2021-06-05T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Virtual Tabling',
            },
          ],
        },
        {
          name: 'no club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          major_requirements: ["Data Science", "Computer Science"],
          class_requirements: ["Data 8", "CS 61A"],
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-05-31T15:30:00',
              event_start: '2021-06-01T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #1',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-06-02T15:30:00',
              event_start: '2021-06-03T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #2',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-04-27T15:30:00',
              event_start: '2021-04-27T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'First Wave Recruitment',
            },
          ],
        },
        {
          name: 'maybe club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          major_requirements: [],
          class_requirements: [],
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-04-30T15:30:00',
              event_start: '2021-04-30T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Speaker Panel',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-06-06T15:30:00',
              event_start: '2021-06-07T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Speaker Panel #2',
            },
          ],
        },
      ],
      interviewed_clubs: [
        {
          name: 'offbrand club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          major_requirements: [],
          class_requirements: [],
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-06-05T23:59:00',
              event_start: '2021-06-05T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Virtual Tabling',
            },
          ],
        },
      ],
    },
  };
  if (!student) return <Loading />;

  let eventDashboard = {
    today: [],
    upcoming: [],
    this_week: []
  };

  let appTracker = {
    interested_clubs: [],
    applied_clubs: [],
    interviewed_clubs: [],
  };

  let timeline = {};

  var recommendedClubCards;
  var recommendedClubs = student.recommended_clubs;
  var recommendedClubCards = Object.keys(recommendedClubs).map((i) =>
    recommendedClubs[i] !== null && recommendedClubs[i] !== '' ? (
      <ClubCardSimple club={recommendedClubs[i]} />
    ) : null
  );

  Object.keys(student.club_board).forEach((key) => {
    student.club_board[key].forEach((club, ind) => {
      appTracker[key].push(
        <div key={`tracker${ind}`} 
            className="dashboard-clubcard"
            onClick={() => {
              setBoardModal(true);
              setCurrentClub(club);
            }}
        >
          <div className="dashboard-clubcard-title">
            <img
              className="dashboard-clubicon"
              src={club.icon || require('../assets/default_logo.jpg')}
              alt="icon"
            />
            <h4 className="dashboard-clubcard-clubname">{club.name}</h4>
          </div>
          <div className="dashboard-clubpage-btns">
            <button className="dashboard-clubcard-remove">
              <Delete className="dashboard-clubcard-delete" />
            </button>
            <button className="dashboard-clubcard-left">
              <LeftArrow
                className={key !== 'interested_clubs' ? 'active' : ''}
              />
            </button>
            <button className="dashboard-clubcard-right">
              <RightArrow
                className={key !== 'interviewed_clubs' ? 'active' : ''}
              />
            </button>
          </div>
        </div>
      );
      club.events.forEach((event, ind) => {
        let evKey;
        if (containsToday(event.event_start, event.event_end)) {
          evKey = 'today';
        } else if(isWithinOneWeek(event.event_start)) {
          evKey = 'this_week';
        } else if (isUpcoming(event.event_start)) {
          evKey = 'upcoming';
        } else {
          return;
        }
        let date;
        if (
          evKey === 'today' &&
          isSameDay(event.event_start, event.event_end)
        ) {
          date = (
            <span className="dashboard-event-date">
              <ReactMoment
                interval={0}
                date={event.event_start}
                format={simplestRangeFormat(
                  event.event_start,
                  event.event_end,
                  END_DATETIME,
                  false
                )}
              />
              {' - '}
              <ReactMoment
                interval={0}
                date={event.event_end}
                format={simplestRangeFormat(
                  event.event_start,
                  event.event_end,
                  END_DATETIME,
                  false
                )}
              />
            </span>
          );
        } else if (evKey === 'today') {
          date = <span>All Day</span>;
        } else {
          date = (
            <span>
              <ReactMoment
                interval={0}
                date={event.event_start}
                format={simpleDayFormat(event.event_start)}
              />
            </span>
          );
        }
        eventDashboard[evKey].push(
          <div
            key={`${key}_${club.name}_event_${ind}`}
            className="dashboard-event">
            <div className="dashboard-event-content">
              <img
                className="dashboard-clubicon"
                src={club.icon || require('../assets/default_logo.jpg')}
                alt="icon"
              />
              <div className="dashboard-event-desc">
                <h4 className="dashboard-event-clubtitle">{event.name}</h4>
                <span className="dashboard-event-clubtitle">{club.name}</span>
              </div>
            </div>
            {date}
          </div>
        );
        if (isWithinFourWeeks(event.event_start)) {
          if (!timeline[club.name]) {
            timeline[club.name] = {
              icon: club.icon,
              events: [],
            };
          }
          let set = false;
          for (let i = 0, l = timeline[club.name].events.length; i < l; i++) {
            if (!eventsOverlap(timeline[club.name].events[i], event)) {
              set = true;
              timeline[club.name].events[i].push(event);
              break;
            }
          }
          if (!set) {
            timeline[club.name].events.push([event]);
          }
        }
      });
    });
  });

  if (!student) return <Loading />;

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard">
        <div className="dashboard-events">
          <div className="dashboard-events-content">
            <h1>Welcome back!</h1>
            <span>
              You have <b>{eventDashboard.today.length}</b> events happening
              today,
              <br />
              and <b>{eventDashboard.this_week.length}</b> important events
              this week!
            </span>
            <div className="dashboard-eventlist-container">
              <div className='dashboard-eventlist'>
                <h2>Events This Week</h2>
                <div className='dashboard-eventlist-scroll'>
                  {eventDashboard.this_week.length > 0 ? eventDashboard.this_week : "No events this week."}
                </div>
              </div>
            </div>
            <span>
              <i>
                *Only public events displayed. Invite-only events are hidden.
              </i>
            </span>
          </div>
          <div className="dashboard-events-photo">
            <img
              className="dashboard-flyer-bears-img"
              src={require('../assets/dashboard-flyer-bears.svg')}
              alt="flyer bears"
            />
          </div>
        </div>
        <div className="dashboard-app-tracker">
          <h2>Application Tracker Board</h2>
          <span>
            Clubs added to the Application Tracker Board will be automatically
            added to the Master Application Timeline and Events
          </span>
          <div className="dashboard-app-tracker-content">
            <div className="dashboard-app-tracker-list">
              <h3>Interested</h3>
              {appTracker.interested_clubs.length > 0 ? (
                appTracker.interested_clubs
              ) : (
                <span>No interested clubs.</span>
              )}
              <button
                className="dashboard-add-interested"
                onClick={() => setTrackerModal(true)}>
                + New
              </button>
            </div>
            <div className="dashboard-app-tracker-list">
              <h3>Applied</h3>
              {appTracker.applied_clubs.length > 0 ? (
                appTracker.applied_clubs
              ) : (
                <span>No clubs selected for the application process.</span>
              )}
            </div>
            <div className="dashboard-app-tracker-list">
              <h3>Interview</h3>
              {appTracker.interviewed_clubs.length > 0 ? (
                appTracker.interviewed_clubs
              ) : (
                <span>No clubs selected for the interview process.</span>
              )}
            </div>
          </div>
        </div>
        <div className="dashboard-app-timeline">
          <span className="dashboard-app-tl-header">
            <h2>Master Application Timeline</h2>
            <i className="dashboard-subtext">*Timeline in PST</i>
          </span>
          <MasterTimeline data={timeline} />
        </div>
        <div className="dashboard-recommended-clubs">
            <h2>Recommended organizations</h2>
            <div className="recommended-clubs">{recommendedClubCards}</div>
        </div>

        <Modal
          showModal={showTrackerModal}
          setShowModal={setTrackerModal}
          close={cancelEdit}>
          <div className="dashboard-modal">
            <AppTracker student={student} close={cancelEdit} />
          </div>
        </Modal>

        <Modal
          showModal={showBoardModal}
          setShowModal={setBoardModal}
          close={exitBoardClub}
        >
          <div className="dashboard-modal events">
            <ClubEvents club={showCurrentClub}/>
          </div>
        </Modal>

        {/* <OnboardingModal
          showModal={showOnboardingModal}
          setShowModal={setOnboardingModal}>
          <div className="onboarding-modal">
            <Onboarding
              student={student}
              closeOnlyCurrent={exitOnboarding}
              close={exitOnboarding}
            />
          </div>
        </OnboardingModal> */}

        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({});

export default connect(mapStateToProps, {})(withRouter(Dashboard));
