import React, { useState } from 'react';
import Modal from '../../layout/Modal';
import { connect } from 'react-redux';
import { addEvent, updateEvent } from '../../actions/profile';
import DeleteModal from './DeleteModal';
import './Events.css';

const Events = ({ addEvent, updateEvent, events }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [title, setTitle] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [start, setStart] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [text, setText] = useState('');
  const [activeEvent, setActiveEvent] = useState({});

  const saveEvent = (event: null) => {
    const eventInfo = { title, eventLink, start, eventTime, text };
    event ? updateEvent(event.id, eventInfo) : addEvent(eventInfo);
  };

  const editEvent = (event) => {
    setTitle(event.title);
    setEventLink(event.eventLink);
    setStart(event.start);
    setEventTime(event.eventTime);
    setText(event.text);
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
    <div>
      <h3>Events</h3>
      <p>
        Add events related to recruitment, meetings, and other public events!
      </p>
      <div className="formGroup">
        <div className="events-list">
          {events.map((event) => (
            <>
              <div className="event">
                <div className="event-content">
                  <div className="event-content-header">
                    <div className="event-title">{event.title}</div>
                    <div className="event-date">{event.start}</div>
                  </div>
                  <div className="event-content-text">{event.text}</div>
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
      </div>
      <DeleteModal
        type="event"
        item={activeEvent}
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
      />
      <button onClick={openAddEvent}>Add Event</button>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div className="add-resource">
          <div className="formElement">
            <p>Event Name</p>
            <input
              type="text"
              onChange={(e) => setStart(e.target.value)}
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
                value="2014-10-31"
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
          <div className="formElement formElementDescription">
            <p>Description</p>
            <textarea
              className="descriptionInput"
              value={text}
              placeholder="Enter a short description about what your event is about and what attendees can expect!"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button type="submit">{activeEvent ? 'Update' : 'Add Event'}</button>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  events: state.profile.profile.events,
});

export default connect(mapStateToProps, { addEvent, updateEvent })(Events);
