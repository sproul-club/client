import React, { useState, useEffect } from 'react';
import Modal from '../../layout/Modal';
import { normalizeUrl, validURL } from '../../utils/normalizeUrl';
import {
  NotificationManager,
  NotificationContainer,
} from 'react-notifications';


const EventComp = (props) => {
  /*Tracks input values for edit modal*/
  const [title, setTitle] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [text, setText] = useState('');

  /*Tracks current values in saved resources array*/
  const [propsTitle, setPropsTitle] = useState(props.data.name);
  const [propsEventLink, setPropsEventLink] = useState(props.data.link);
  const [propsStart, setPropsStart] = useState(props.data.event_start);
  const [propsEnd, setPropsEnd] = useState(props.data.event_end);
  const [propsText, setPropsText] = useState(props.data.description);

  /*Control displaying of each modal*/
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDelModal, setShowDelModal] = useState(false);

  /*Updates main resource array with entries in the edit modal*/
  function singleSave() {
    if (eventLink.length > 0 && !validURL(eventLink)) {
      NotificationManager.error('Please enter a valid URL', '', 1500);
      return
    }
    const start = Date.parse(startDate + ' ' + startTime);
    const end = Date.parse(endDate + ' ' + endTime);
    if (end < start) {
      NotificationManager.error("Event end must come before start", "", 3000);
      return;
    }
    setShowEditModal(false);
    props.entryChange(
      props.data.id,
      title,
      normalizeUrl(eventLink),
      startDate,
      startTime,
      endDate,
      endTime,
      text
    );
    setPropsTitle(title);
    setPropsEventLink(normalizeUrl(eventLink));
    setPropsStart(startDate.concat(' ' + startTime));
    setPropsEnd(endDate.concat(' ' + endTime));
    setPropsText(text);
  }

  /*Removes selected resource from main resource array*/
  function singleDelete() {
    props.removeEvent(props.data.id);
    setShowDelModal(false);
  }

  function cancelEdit() {
    setShowEditModal(false);
    setTitle(propsTitle);
    setEventLink(propsEventLink);
    // setStart(propsStart);
    // setEnd(propsEnd)
    setText(propsText);
  }

  /*onChange functions for edit modal*/
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

  function convertTime(datetime) {
    var dd = ' AM';

    var hour = datetime.getUTCHours();
    hour = hour - 7;
    if (hour < 0) {
      hour = hour + 24;
    }
    var h = hour;
    if (h >= 12) {
      hour = h - 12;
      dd = ' PM';
    }
    if (hour === 0) {
      hour = 12;
    }

    var minutes = datetime.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return hour + ':' + minutes + dd;
  }

  function formatDate(datetime) {
    const dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const monthArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    var month = monthArr[datetime.getMonth()];

    var day = datetime.getDate().toString();
    // var year = datetime.getFullYear();
    day = day.length > 1 ? day : '0' + day;

    var time = convertTime(datetime);
    return dayArr[datetime.getDay()] + ', ' + month + ' ' + day + ', ' + time;
  }

  function formatDates(start, end) {
    var startDate = new Date(start);
    var endDate = new Date(end);

    if (
      startDate.getDay() === endDate.getDay() &&
      startDate.getMonth() === endDate.getMonth() &&
      startDate.getDay() === endDate.getDay() &&
      startDate.getFullYear() === endDate.getFullYear()
    ) {
      return formatDate(startDate) + ' - ' + convertTime(endDate) + ' PT';
    } else {
      return formatDate(startDate) + ' - ' + formatDate(endDate) + ' PT';
    }
  }

  /*Update states to reflect current value in array*/
  if (propsTitle !== props.data.name) {
    setPropsTitle(props.data.name);
  }
  if (propsEventLink !== props.data.link) {
    setPropsEventLink(props.data.link);
  }
  if (propsStart !== props.data.event_start) {
    setPropsStart(props.data.event_start);
  }
  if (propsEnd !== props.data.event_end) {
    setPropsEnd(props.data.event_end);
  }
  if (propsText !== props.data.description) {
    setPropsText(props.data.description);
  }

  /*Updates entries in the edit modal to reflect saved resources*/
  useEffect(() => {
    setTitle(propsTitle);
    setEventLink(propsEventLink);
    setStartDate(propsStart.substring(0, 10));
    setStartTime(propsStart.substring(11, 16));
    setEndDate(propsEnd.substring(0, 10));
    setEndTime(propsEnd.substring(11, 16));
    setText(propsText);
  }, [propsTitle, propsEventLink, propsStart, propsEnd, propsText]);

  return (
    <div className="event">
      <div className="event-content">
        <div className="event-content-header">
          <div id="title-date">
            <div id="title-link">
              <div className="event-title">{propsTitle}</div>
              <a
                href={propsEventLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={require('../assets/linkImages/resLink.png')}
                  alt="event"
                />
              </a>
            </div>
          </div>
          <div className="buttonsWrapper">
            <img
              alt="edit"
              onClick={() => setShowEditModal(true)}
              src={require('../assets/linkImages/editLink.png')}
            />
            <img
              alt="remove"
              onClick={() => setShowDelModal(true)}
              src={require('../assets/linkImages/removeLink.png')}
            />
          </div>
        </div>
        <div className="event-date">{formatDates(propsStart, propsEnd)}</div>
        <div className="event-description">{propsText}</div>
      </div>

      {/*EDIT EVENT MODAL*/}
      <Modal showModal={showEditModal} setShowModal={setShowEditModal} close={cancelEdit}>
        <div className="eventModal">
          <h3 id="res-bold">Add New Event</h3>
          <p id="res-desc">Link an event for prospective or current members!</p>
          <div className="gray-modal">
            <div className="formElement">
              <p>Event Name</p>
              <input
                type="text"
                onChange={changeTitle}
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
                  required
                />
                <input
                  className="modal-input"
                  type="time"
                  onChange={changeStartTime}
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
                  onChange={changeEndDate}
                  value={endDate}
                  required
                />
                <input
                  className="modal-input"
                  type="time"
                  onChange={changeEndTime}
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
                onChange={changeText}
                maxLength={500}
              />
            </div>
          </div>
          <button type="submit" onClick={singleSave}>
            Save
          </button>
          <button id="cancel-button" onClick={cancelEdit}>
            {' '}
            Cancel{' '}
          </button>
        </div>
      </Modal>

      {/*DELETE RESOURCE MODAL*/}
      <Modal showModal={showDelModal} setShowModal={setShowDelModal}>
        <div className="del-modal">
          <p className="del-text">Are you sure you want to delete this?</p>
          <div className="del-buttons-flex">
            <button id="del-cancel" onClick={() => setShowDelModal(false)}>
              Cancel
            </button>
            <button id="del-del" onClick={singleDelete}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
      <NotificationContainer />
    </div>
  );
};

export default EventComp;
