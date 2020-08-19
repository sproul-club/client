import React, { useState } from 'react';
import Modal from '../../layout/Modal';
import { connect } from 'react-redux';
import { addEvent, updateEvent } from '../../actions/profile';
import DeleteModal from './DeleteModal';
import './Events.css';

const Events = ({ addEvent, updateEvent, profile: { events } }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [title, setTitle] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [start, setStart] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');
  const [text, setText] = useState('');
  const [activeEvent, setActiveEvent] = useState(null);

  const saveEvent = (event: null) => {
    const eventInfo = {
      name: title,
      link: eventLink,
      'event-start': start,
      'event-end': eventTime,
      description: text,
    };
    activeEvent !== null
      ? updateEvent(event.id, eventInfo)
      : addEvent(eventInfo, events);
  };

  const editEvent = (event) => {
    setTitle(event.name);
    setEventLink(event.link);
    setStart(event['event-start']);
    setEventTime(event['event-end']);
    setText(event.description);
    setActiveEvent(event);
    setShowModal(true);
  };

  const openAddEvent = () => {
    setTitle('');
    setEventLink('');
    setStart('');
    setEventTime('');
    setText('');
    setActiveEvent(null);
    setShowModal(true);
  };

  const openDeleteModal = (event) => {
    setActiveEvent(event);
    setShowDeleteModal(true);
  };

  return (
    <div className="events">
      <h3>Events</h3>
      <p>
        Add events related to recruitment, meetings, and other public events!
      </p>
      <div className="formGroup">
        <div className="events-list">
          {events && 
            events.map((event) => (
            <>
              <div className="event">
                <div className="event-content">
                  <div className="event-content-header">
                    <div className="event-title">{event.name}</div>
                    <div className="event-date">
                      {event['event-start']} - {event['event-end']}
                    </div>
                  </div>
                  <div className="event-content-text">{event.description}</div>
                </div>
                <div className="event-controls">
                  <i
                    className="fas fa-trash"
                    onClick={() => openDeleteModal(event)}
                  ></i>
                  <i
                    className="fas fa-edit"
                    onClick={() => editEvent(event)}
                  ></i>
                </div>
              </div>
            </>
          ))}
        </div>
        <img
          className="add-button"
          src={require('../assets/linkImages/addEvent.png')}
          onClick={openAddEvent}
          alt='add event'
        />
      </div>
      <DeleteModal
        type="event"
        item={activeEvent}
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
      />

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
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="Enter the title of your event"
              className="userInput modal-input"
            />
          </div>
          <div className="formElement">
            <p>Event Link</p>
            <input
              type="text"
              onChange={(e) => setEventLink(e.target.value)}
              value={eventLink}
              placeholder="+ Add a link to your event (zoom, FB, zmurl, etc)"
              className="userInput modal-input"
            />
          </div>
          <div className="formElement">
            <p>Event Start</p>
            <div className="input-time">
              <input
                className="modal-input"
                type="date"
                onChange={(e) => setStart(e.target.value)}
                value={start}
              />
              <input
                className="modal-input"
                type="time"
                onChange={(e) => setEventTime(e.target.value)}
                value={eventTime}
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
              />
              <input
                className="modal-input"
                type="time"
                onChange={(e) => setEventEndTime(e.target.value)}
                value={eventEndTime}
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
            />
          </div>
        </div>
        <button type="submit" onClick={saveEvent}>
            {activeEvent ? 'Update' : 'Add Event'}
          </button>
          </div>
      </Modal>
    </div>
  );
};

export default connect(null, { addEvent, updateEvent })(Events);
