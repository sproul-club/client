import React, { useEffect } from 'react';
import { Calendar as RBC, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.scss';

const localizer = momentLocalizer(moment)

let calendarEventsList = []; // populate this list with the events to be displayed

function Calendar({ student }) {
  useEffect(() => {
    calendarEventsList = [];
  }, [calendarEventsList]);

  /* TEMPORARY HARDCODED STUDENT FOR TESTING. MAY NEED TO ADJUST IF USING FOR EVENTS */
  student = {
    name: 'Obama',
    majors: [],
    minors: [],
    interests: [],
    favorited_clubs: ['Karasuno High VBC', 'User Testing'],
    visited_clubs: [],
    club_board: {
      interested_clubs: [
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-05-04T23:59:00',
              event_start: '2021-04-25T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Application Due',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-04-16T23:59:00',
              event_start: '2021-04-12T08:00:00',
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
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-04-16T23:59:00',
              event_start: '2021-04-16T08:00:00',
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
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-22T23:59:00',
              event_start: '2021-01-10T08:00:00',
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
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-10T15:30:00',
              event_start: '2021-01-10T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #1',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-13T15:30:00',
              event_start: '2021-01-12T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #2',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-13T15:30:00',
              event_start: '2021-01-07T11:00:00',
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
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-11T15:30:00',
              event_start: '2021-01-08T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Speaker Panel',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-13T15:30:00',
              event_start: '2021-01-12T11:00:00',
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
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-09-04T23:59:00',
              event_start: '2021-10-30T08:00:00',
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

  Object.keys(student.club_board).forEach((key) => {
    student.club_board[key].forEach((club, ind) => {
      club.events.forEach((event, ind) => {
        let calendarEvent = { start: new Date(event.event_start), end: new Date(event.event_end), title: event.name };
        calendarEventsList.push(calendarEvent);
      });
    });
  });
  
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h2>Master Calendar</h2>
        <span>
          <i>
            *Times are in PST
          </i>
        </span>
      </div>
      <RBC
        views={["month"]}
        localizer={localizer}
        events={calendarEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={{next:"▶",previous:"◀"}}
        popup
      />    
    </div>
  )
}

export default Calendar;

