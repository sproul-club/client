import React, { useState, useEffect } from 'react';
import Modal from '../../layout/Modal';
import { connect } from 'react-redux';
import EventComp from './EventComp.js';
import {
  addEvent,
  updateEvent,
  deleteEvent } from '../../actions/profile';
import { validURL, normalizeUrl } from '../../utils/normalizeUrl';
import './Events.css';

const Events = ({
  addEvent,
  updateEvent,
  deleteEvent,
  events: eventState,
 }) => {
  /*Holds all existing events*/
  const [events, setEvents] = useState(eventState);

  /*Determines if add event modal is shown*/
  const [showModal, setShowModal] = useState(false);

  /*Holds input values in add modal*/
  const [title, setTitle] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [text, setText] = useState('');

  /*Adds event to array, count++, resets title and link state values */
  function addEv() {
    const start = startDate.concat(' ' + startTime);
    const end = endDate.concat(' ' + endTime);
    const emptyEvent = {
      name: title,
      link: normalizeUrl(eventLink),
      event_start: start,
      event_end: end,
      description: text,
    };
    if (!validURL(eventLink)) return alert('Please enter a valid URL');
    setEvents([...events, emptyEvent]);
    // call add event action
    addEvent(emptyEvent);

    //clear modal
    setShowModal(false);
    setTitle('');
    setEventLink('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setText('');
  }
  
  function cancelAdd() {
    setShowModal(false);
    setTitle('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setText('');
  }

  /*Passed down to eventComp to allow editing of event array above*/
  function entryChange(id, title, eventLink, startDate, startTime, endDate, endTime, text) {
    let tempArr = [...events];
    const start = startDate.concat(' ' + startTime);
    const end = endDate.concat(' ' + endTime);
    const tempObj = {
      id: id,
      name: title,
      link: eventLink,
      event_start: start,
      event_end: end,
      description: text,
    };
    tempArr[id] = tempObj;
    //update event action
    updateEvent(id, {name: title, link: eventLink, event_start: start, event_end: end, description: text})
    setEvents(tempArr);
  }

  /*onChange functions for add modal*/
  function changeTitle(event) {
    setTitle(event.target.value);
  }
 
  function changeLink(event) {
    setEventLink(event.target.value);
  }

  function changeStartDate(event) {
    setStartDate(event.target.value);
  }

  function changeStartTime(event) {
    setStartTime(event.target.value);
  }

  function changeEndDate(event) {
    setEndDate(event.target.value);
  }

  function changeEndTime(event) {
    setEndTime(event.target.value);
  }

  function changeText(event) {
    setText(event.target.value);
  }

  /*Passed down to eventComp to allow it to remove event from state array, count--*/
  function removeEvent(id) {
    deleteEvent(id);
    const testEventList = events.filter((event) => event.id !== id);
    const newEventList = [...testEventList];
    setEvents(newEventList);
  }
  
  useEffect(() => {
    setEvents(eventState)
  }, [eventState])

  const eventComps = events.map((ev, i) => (
    <EventComp
      key={i}
      num={i}
      data={ev}
      entryChange={entryChange}
      removeEvent={removeEvent}
    />
  ));

  function convertTime(datetime) {
    var dd = 'AM'

    var hour = datetime.getUTCHours();
    var h = hour;
    if (h >= 12) {
      hour = h - 12;
      dd = 'PM';
    }
    if (hour == 0) {
      hour = 12;
    }

    var minutes = datetime.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hour + ':' + minutes + dd
  }

  function formatDate(datetime) {
    const dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    
    var month = (1 + datetime.getMonth()).toString();
    var day = datetime.getDate().toString();
    var year = datetime.getFullYear();
    day = day.length > 1 ? day : '0' + day;

    var time = convertTime(datetime);
    return dayArr[datetime.getDay()] + ' ' + month + '/' + day + '/' + year + ' ' + time;
  }

  function formatDates(start, end) {
    var startDate = new Date(start);
    var endDate = new Date(end);

    if (startDate.getDay() == endDate.getDay() && startDate.getMonth() == endDate.getMonth() && 
    startDate.getDay() == endDate.getDay() && startDate.getFullYear() == endDate.getFullYear()) {
      return formatDate(startDate) + ' - ' + convertTime(endDate);
    }
    else {
      return formatDate(startDate) + ' - ' + formatDate(endDate);
    }
  }

  return (
    <div className="events">
      <h3>Events</h3>
      <div className="admin-text">
        Add events related to recruitment, meetings, and other public events!
      </div>
      <div className="formGroup">
        <div className="events-list">
            {eventComps}
        </div>
        <img
          id="add-button"
          src={require('../assets/linkImages/addEvent.png')}
          onClick={() => setShowModal(true)}
          alt="add event"
        />
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className = "eventModal">
        <h3 id="res-bold">Add New Event</h3>
        <p id="res-desc">
          Link an event for prospective or current members!
        </p>
        <div className="gray-modal">
          <div className="formElement">
            <p>Event Name</p>
            <input
              type="text"
              onChange={changeTitle}
              value={title}
              placeholder="Enter the title of your event"
              className="userInput modal-input"
            />
          </div>
          <div className="formElement">
            <p>Event Link</p>
            <input
              type="text"
              onChange={changeLink}
              value={eventLink}
              placeholder="+ Add a link to your event (Zoom, FB, ZmURl, etc)"
              className="userInput modal-input"
            />
          </div>
          <div className="formElement">
            <p>Event Start</p>
            <div className="input-time">
              <input
                className="modal-input"
                type="date"
                onChange={changeStartDate}
                value={startDate}
              />
              <input
                className="modal-input"
                type="time"
                onChange={changeStartTime}
                value={startTime}
              />
            </div>
          </div>
          <div className="formElement">
            <p>Event End</p>
            <div className="input-time">
              <input
                className="modal-input"
                type="date"
                onChange={changeEndDate}
                value={endDate}
              />
              <input
                className="modal-input"
                type="time"
                onChange={changeEndTime}
                value={endTime}
              />
            </div>
          </div>
          <div className="formElement formElementDescription">
            <p>Description</p>
            <textarea
              className="descriptionInput"
              value={text}
              placeholder="Enter a short description about what your event is about and what attendees can expect!"
              onChange={changeText}
            />
          </div>
          </div>
        <button type="submit" onClick={addEv}>
            Save
        </button>
        <button id="cancel-button" onClick={cancelAdd}>
            {' '}Cancel{' '}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default connect(null, { addEvent, updateEvent, deleteEvent })(Events);

