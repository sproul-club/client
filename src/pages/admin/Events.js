import React, { useState, useEffect } from 'react';
import Modal from '../../layout/Modal';
import { connect } from 'react-redux';
import EventComp from './EventComp.js';
import { addEvent, updateEvent, deleteEvent } from '../../actions/profile';
import { validURL, normalizeUrl } from '../../utils/normalizeUrl';
import './Events.css';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';

const Events = ({ addEvent, updateEvent, deleteEvent, events: eventState }) => {
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
  function addEv(e) {
    e.preventDefault();
    const start = startDate.concat(' ' + startTime);
    const end = endDate.concat(' ' + endTime);
    const emptyEvent = {
      name: title,
      link: normalizeUrl(eventLink),
      event_start: start,
      event_end: end,
      description: text,
    };
    // if (!validURL(eventLink)) return alert('Please enter a valid URL');
    if (eventLink.length > 0 && !validURL(eventLink)) {
      NotificationManager.error('Please enter a valid URL', '', 1500);
      return;
    }
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
    setEventLink('');
    setStartDate('');
    setStartTime('');
    setEndDate('');
    setEndTime('');
    setText('');
  }

  /*Passed down to eventComp to allow editing of event array above*/
  function entryChange(
    id,
    title,
    eventLink,
    startDate,
    startTime,
    endDate,
    endTime,
    text
  ) {
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
    updateEvent(id, {
      name: title,
      link: eventLink,
      event_start: start,
      event_end: end,
      description: text,
    });
    setEvents(tempArr);
  }

  /*Passed down to eventComp to allow it to remove event from state array, count--*/
  function removeEvent(id) {
    deleteEvent(id);
    const testEventList = events.filter((event) => event.id !== id);
    const newEventList = [...testEventList];
    setEvents(newEventList);
  }

  useEffect(() => {
    setEvents(eventState);
  }, [eventState]);

  const eventComps = events.map((ev, i) => (
    <EventComp
      key={i}
      num={i}
      data={ev}
      entryChange={entryChange}
      removeEvent={removeEvent}
    />
  ));

  return (
    <div className="events">
      <h3>Events</h3>
      <div className="admin-text">
        Add events related to recruitment, meetings, and other public events!
      </div>
      <div className="formGroup">
        <div className="events-list">{eventComps}</div>
        <img
          id="add-button"
          src={require('../assets/linkImages/addEvent.png')}
          onClick={() => setShowModal(true)}
          alt="add event"
        />
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal} close={cancelAdd}>
        <form className="eventModal" onSubmit={(e) => addEv(e)}>
          <h3 id="res-bold">Add New Event</h3>
          <p id="res-desc">Link an event for prospective or current members!</p>
          <div className="gray-modal">
            <div className="formElement">
              <p>Event Name</p>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder="Enter the title of your event"
                className="userInput modal-input"
                maxLength={100}
                required
              />
            </div>
            <div className="formElement">
              <p>Event Link</p>
              <input
                type="text"
                onChange={(e) => setEventLink(e.target.value)}
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
                  onChange={(e) => setStartDate(e.target.value)}
                  value={startDate}
                  required
                />
                <input
                  className="modal-input"
                  type="time"
                  onChange={(e) => setStartTime(e.target.value)}
                  value={startTime}
                  required
                />
              </div>
            </div>
            <div className="formElement">
              <p>Event End</p>
              <div className="input-time">
                <input
                  className="modal-input"
                  type="date"
                  onChange={(e) => setEndDate(e.target.value)}
                  value={endDate}
                  required
                />
                <input
                  className="modal-input"
                  type="time"
                  onChange={(e) => setEndTime(e.target.value)}
                  value={endTime}
                  required
                />
              </div>
            </div>
            <div className="formElement formElementDescription">
              <p>Description</p>
              <textarea
                className="descriptionInput"
                value={text}
                placeholder="Enter a short description about what your event is about and what attendees can expect!"
                onChange={(e) => setText(e.target.value)}
                maxLength={500}
              />
            </div>
          </div>
          <button type="submit">Save</button>
          <button id="cancel-button" onClick={cancelAdd}>
            {' '}
            Cancel{' '}
          </button>
        </form>
      </Modal>
      <NotificationContainer />
    </div>
  );
};

export default connect(null, { addEvent, updateEvent, deleteEvent })(Events);
