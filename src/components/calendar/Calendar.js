import React, { useEffect } from 'react';
import { Calendar as RBC, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar.scss';
import CalendarEvent from './CalendarEvent.js'

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
            'https://data.whicdn.com/images/333477434/original.jpg',
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
            'http://pm1.narvii.com/7620/6144829ee2b97d83e93fbc54bf5c7ae7f3dc748er1-627-629v2_uhq.jpg',
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
            'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg',
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
            'https://pbs.twimg.com/profile_images/1259982795318812672/4DTVxmBy_400x400.jpg',
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
            'https://i2.wp.com/i.pinimg.com/originals/1b/e7/89/1be78953afd8850b65d1c28c53e0d882.jpg',
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

  const eventColors = [
    "#ABDFFC",
    "#FBD6D5",
    "#FFF1AE",
    "#CDEFC6"
  ];

  var counter = 0;
  Object.keys(student.club_board).forEach((key) => {
    student.club_board[key].forEach((club, ind) => {
      var color = eventColors[counter % 4]
      counter++;
      club.events.forEach((event, ind) => {
        let calendarEvent = { start: new Date(event.event_start), end: new Date(event.event_end), title: event.name, icon: club.icon, color: color};
        calendarEventsList.push(calendarEvent);
      });
    });
  });

  function eventStyleGetter(event, start, end, isSelected) {
    var style = {
        backgroundColor: event.color,
    };
    return {
        style: style
    };
  }
  
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
        components={{event: CalendarEvent}}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        messages={{next:"▶",previous:"◀"}}
        popup
        eventPropGetter={eventStyleGetter}
      />    
    </div>
  )
}

export default Calendar;

