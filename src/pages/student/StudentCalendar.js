import React from 'react';
import Calendar from '../../components/calendar/Calendar';
import './StudentCalendar.scss';
import Footer from '../../components/layout/footer/Footer.js';

const StudentCalendar = () => {

  return (
    <div className="student-calendar-wrapper">
      <div className="student-calendar">
        <Calendar />
      </div>
      <Footer/>
    </div>
  )
}

export default StudentCalendar;