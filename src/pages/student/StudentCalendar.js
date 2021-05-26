import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './StudentCalendar.scss';

const localizer = momentLocalizer(moment)

let myEventsList = [];

const StudentCalendar = ({student, useStudent}) => {
  useEffect(() => {
    myEventsList = [];
  }, [myEventsList]);

  if (!useStudent) { // placeholder code for viewing full calendar page
  }

    Object.keys(student.club_board).forEach((key) => {
      student.club_board[key].forEach((club, ind) => {
        club.events.forEach((event, ind) => {
          let calendarEvent = { start: new Date(event.event_start), end: new Date(event.event_end), title: event.name };
          myEventsList.push(calendarEvent);
        });
      });
    });
  
  return (
    <Calendar
      views={["month"]}
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      messages={{next:"▶",previous:"◀"}}
      popup
    />
  )
}

export default StudentCalendar;

