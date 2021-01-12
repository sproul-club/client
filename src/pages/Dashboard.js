import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';
import MasterTimeline from './MasterTimeline';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import Delete from '@material-ui/icons/DeleteOutlineRounded';
import RightArrow from '@material-ui/icons/ChevronRightRounded';
import LeftArrow from '@material-ui/icons/ChevronLeftRounded';
import ReactMoment from 'react-moment';
import { containsToday, isUpcoming, simplestRangeFormat, simpleDayFormat, END_DATETIME, isSameDay, isWithinFourWeeks, eventsOverlap } from '../utils/formatTimeAndDate';
import AppTracker from './AppTracker';
import Modal from '../layout/Modal';

function Dashboard({student}) {
  useEffect(() => {
    // Outline leftover from ClubPage
  }, []);
  const [showTrackerModal, setTrackerModal] = useState(false);

  function cancelEdit() {
    setTrackerModal(false);
  }

  /* TEMPORARY HARDCODED STUDENT FOR TESTING */
  student = {
    majors: [],
    minors: [],
    interests: [],
    favorited_clubs: [],
    visited_clubs: [],
    club_board: {
      interested_clubs: [
        {
          name: "sproul.club",
          icon: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png",
          events: [
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-09-04T23:59:00",
              event_start: "2021-08-25T08:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Application Due"
            },
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-09-04T23:59:00",
              event_start: "2021-09-12T08:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Workshop #1"
            }
          ]
        },
        {
          name: "random club",
          icon: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png",
          events: [
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-09-04T23:59:00",
              event_start: "2021-09-23T08:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Infosession #2"
            }
          ]
        }
      ],
      applied_clubs: [
        {
          name: "devclub",
          icon: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png",
          events: [
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-01-22T23:59:00",
              event_start: "2021-01-10T08:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Virtual Tabling"
            }
          ]
        },
        {
          name: "no club",
          icon: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png",
          events: [
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-01-10T15:30:00",
              event_start: "2021-01-10T11:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Infosession #1"
            },
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-01-13T15:30:00",
              event_start: "2021-01-12T11:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Infosession #2"
            },
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-01-13T15:30:00",
              event_start: "2021-01-07T11:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "First Wave Recruitment"
            }
          ]
        },
        {
          name: "maybe club",
          icon: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png",
          events: [
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-01-11T15:30:00",
              event_start: "2021-01-08T11:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Speaker Panel"
            },
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-01-13T15:30:00",
              event_start: "2021-01-12T11:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Speaker Panel #2"
            }
          ]
        }
      ],
      interviewed_clubs: [
        {
          name: "offbrand club",
          icon: "https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png",
          events: [
            {
              description: "See our Facebook events for more details.",
              event_end: "2021-09-04T23:59:00",
              event_start: "2021-10-30T08:00:00",
              id: "fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley",
              link: "https://www.facebook.com/events/784593735644618/",
              name: "Virtual Tabling"
            }
          ]
        },
      ]
    }
  }
  if (!student) return <Loading />;

  let eventDashboard = {
    today: [],
    upcoming: []
  }

  let appTracker = {
    interested_clubs: [],
    applied_clubs: [],
    interviewed_clubs: []
  }

  let timeline = {
  }

  Object.keys(student.club_board).forEach((key) => {
    student.club_board[key].forEach((club, ind) => {
      appTracker[key].push(
        <div key={`tracker${ind}`} className='dashboard-clubcard'>
          <div className='dashboard-clubcard-title'>
            <img
              className='dashboard-clubicon'
              src={club.icon || require('./assets/default_logo.jpg')}
              alt="icon"
            />
            <h4 className='dashboard-clubcard-clubname'>{club.name}</h4>
          </div>
          <div className='dashboard-clubpage-btns'>
            <button className='dashboard-clubcard-remove'>
              <Delete className='dashboard-clubcard-delete'/>
            </button>
            <button className='dashboard-clubcard-left'>
              <LeftArrow className={key !== 'interested_clubs' ? 'active' : ''}/>
            </button>
            <button className='dashboard-clubcard-right'>
              <RightArrow className={key !== 'interviewed_clubs' ? 'active' : ''}/>
            </button>
          </div>
        </div>
      )
      club.events.forEach((event, ind) => {
        let evKey;
        if(containsToday(event.event_start, event.event_end)) {
          evKey = 'today';
        } else if(isUpcoming(event.event_start)) {
          evKey = 'upcoming';
        } else {
          return;
        }
        let date;
        if (evKey === 'today' && isSameDay(event.event_start, event.event_end)) {
          date = <span className='dashboard-event-date'>
            <ReactMoment
              interval={0}
              date={event.event_start}
              format={simplestRangeFormat(event.event_start, event.event_end, END_DATETIME, false)}
            />
            {" - "}
            <ReactMoment
              interval={0}
              date={event.event_end}
              format={simplestRangeFormat(event.event_start, event.event_end, END_DATETIME, false)}
            />
          </span>
        } else if (evKey === 'today') {
          date = <span>All Day</span>
        } else {
          date = <span>
            <ReactMoment
              interval={0}
              date={event.event_start}
              format={simpleDayFormat(event.event_start)}
            />
          </span>
        }
        eventDashboard[evKey].push(
          <div key={`${key}_${club.name}_event_${ind}`} className='dashboard-event'>
            <div className='dashboard-event-content'>
              <img
                className="dashboard-clubicon"
                src={club.icon || require('./assets/default_logo.jpg')}
                alt="icon"
              />
              <div className='dashboard-event-desc'>
                <h4 className='dashboard-event-clubtitle'>{event.name}</h4>
                <span className='dashboard-event-clubtitle'>{club.name}</span>
              </div>
            </div>
            {date}
          </div>
        )
        if (isWithinFourWeeks(event.event_start)) {
          if (!timeline[club.name]) {
            timeline[club.name] = {
              icon: club.icon,
              events: [],
            }
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
      })
    })
  })

  if (!student) return <Loading />;

  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard'>
        <div className='dashboard-events'>
          <div className='dashboard-events-content'>
            <h1>Welcome back!</h1>
            <span>You have <b>{eventDashboard.today.length}</b> events happening today,<br/>and <b>{eventDashboard.upcoming.length}</b> important events coming up!</span>
            <div className='dashboard-eventlist-container'>
              <div className='dashboard-eventlist-today'>
                <h2>Events Happening Today</h2>
                {eventDashboard.today.length > 0 ? eventDashboard.today : "No events today."}
              </div>
              <div className='dashboard-eventlist-upcoming'>
                <h2>Upcoming Events</h2>
                {eventDashboard.upcoming.length > 0 ? eventDashboard.upcoming : "No upcoming events."}
              </div>
            </div>
            <span><i>*Only public events displayed. Invite-only events are hidden.</i></span>
          </div>
          <div className='dashboard-events-photo'>
            <img
              className="dashboard-flyer-bears-img"
              src={require('./assets/dashboard-flyer-bears.svg')}
              alt="flyer bears"
            />
          </div>
        </div>
        <div className='dashboard-app-tracker'>
          <h2>Application Tracker Board</h2>
          <span>Clubs added to the Application Tracker Board will be automatically added to the Master Application Timeline and Events</span>
          <div className='dashboard-app-tracker-content'>
            <div className='dashboard-app-tracker-list'>
              <h3>Interested</h3>
              {appTracker.interested_clubs.length > 0 ? appTracker.interested_clubs :
                <span>No interested clubs.</span>
              }
              <button className='dashboard-add-interested' onClick={() => setTrackerModal(true)}>+ New</button>
            </div>
            <div className='dashboard-app-tracker-list'>
              <h3>Applied</h3>
              {appTracker.applied_clubs.length > 0 ? appTracker.applied_clubs :
                <span>No clubs selected for the application process.</span>
              }
            </div>
            <div className='dashboard-app-tracker-list'>
              <h3>Interview</h3>
              {appTracker.interviewed_clubs.length > 0 ? appTracker.interviewed_clubs :
                <span>No clubs selected for the interview process.</span>
              }
            </div>
          </div>
        </div>
        <div className='dashboard-app-timeline'>
          <span className='dashboard-app-tl-header'>
            <h2>Master Application Timeline</h2>
            <i className="dashboard-subtext">*Timeline in PST</i>
          </span>
          <MasterTimeline data={timeline}/>
        </div>

        <Modal
          showModal={showTrackerModal}
          setShowModal={setTrackerModal}
          close={cancelEdit}
        >
          <div className="dashboard-modal">
            <AppTracker />
          </div>
        </Modal>
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({

});

export default connect(mapStateToProps, {})(withRouter(Dashboard));
