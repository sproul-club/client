import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import Modal from '../../../components/layout/modal/Modal';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './RecrAccord.scss';
import '../../club/EventAccord.css';
import { normalizeUrl, validURL } from '../../../utils/normalizeUrl';
import { NotificationManager } from 'react-notifications';

const RecrAccord = forwardRef((props, ref) => {
  const [name, setName] = useState(props.data.name);
  const [eventLink, setEventLink] = useState(props.data.link);
  const [startDate, setStartDate] = useState(
    props.data.event_start.substring(0, 10)
  );
  const [startTime, setStartTime] = useState(
    props.data.event_start.substring(11, 16)
  );
  const [endDate, setEndDate] = useState(props.data.event_end.substring(0, 10));
  const [endTime, setEndTime] = useState(
    props.data.event_end.substring(11, 16)
  );
  const [text, setText] = useState(props.data.description);
  const [virtLink, setVirtLink] = useState(props.data.virtual_link);
  const [invOnly, setInvOnly] = useState(props.data.invite_only);

  // HACK: ugly fix for accidental duplication of data for adding new events
  useEffect(() => {
    setName(props.data.name);
    setEventLink(props.data.link);
    setStartDate(props.data.event_start.substring(0, 10));
    setStartTime(props.data.event_start.substring(11, 16));
    setEndDate(props.data.event_end.substring(0, 10));
    setEndTime(props.data.event_end.substring(11, 16));
    setText(props.data.description);
    setVirtLink(props.data.virtual_link);
    setInvOnly(props.data.invite_only);
  }, [props.data]);

  const [showDelModal, setShowDelModal] = useState(false);

  const changedStart = startDate !== '2000-01-01';
  const changedEnd = endDate !== '2000-01-01';

  function cancelDel() {
    setShowDelModal(false);
  }

  if (name.slice(0, 6) === '[Event') {
    setName('');
  }

  if (text === '[enter description]') {
    setText('');
  }

  if (eventLink === '') {
    setEventLink(null);
  }

  if (virtLink === '') {
    setVirtLink(null);
  }

  useImperativeHandle(ref, () => ({
    checkSave() {
      var errPresent = false;
      if (name === '') {
        NotificationManager.error(
          'Event ' + props.position + ': name required',
          '',
          3000
        );
        errPresent = true;
      }
      if (text === '') {
        NotificationManager.error(
          'Event ' + props.position + ': description required',
          '',
          3000
        );
        errPresent = true;
      }
      if (changedStart === false) {
        NotificationManager.error(
          'Event ' + props.position + ': start date required',
          '',
          3000
        );
        errPresent = true;
      }
      if (errPresent === true) {
        return 1;
      }
      singleSave();

      return 0;
    },
    verifySave() {
      singleSave();
    },
  }));

  function singleDelete() {
    props.deleteRecrEvent(props.data.id);
    props.incNumEvents(-1);
    setShowDelModal(false);
  }

  function duplicateEvent() {
    props.dupEvent(props.data);
  }

  function singleSave() {
    if (eventLink && !validURL(eventLink)) {
      NotificationManager.error('Please enter a valid URL', '', 1500);
      return;
    }
    const start = Date.parse(startDate + ' ' + startTime);
    const end = Date.parse(endDate + ' ' + endTime);
    if (end < start) {
      NotificationManager.error('Event start must come before end', '', 3000);
      return;
    }
    props.entryChange(
      props.data.id,
      name,
      normalizeUrl(eventLink),
      startDate,
      startTime,
      endDate,
      endTime,
      text,
      invOnly,
      normalizeUrl(virtLink)
    );
    return 0;
  }
  return (
    <div>
      <div id="recr-wrap">
        <Accordion preExpanded={['a']} className="accordion" allowZeroExpanded>
          <AccordionItem uuid="a">
            <AccordionItemButton>
              <div className="event-container">
                <div className="event-flex-left"> {name}</div>
                <div className="event-flex-right"></div>
              </div>
              <div id="recr-unfold" className="accordion__button-club"></div>
            </AccordionItemButton>
            <AccordionItemPanel>
              <hr style={{ width: '103%', marginLeft: '-2.5%' }}></hr>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/*LEFT SIDE INPUTS*/}
                <div style={{ width: '50%' }}>
                  Name of event *
                  <div>
                    <input
                      type="text"
                      className="recr-input"
                      id="recr-name-input"
                      placeholder="Event name"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      maxLength={32}></input>
                  </div>
                  Start *
                  <div className="recr-date-row">
                    <input
                      type="date"
                      className="recr-input"
                      id="recr-date-input"
                      onChange={(e) => setStartDate(e.target.value)}
                      value={changedStart ? startDate : null}
                      required></input>
                    <input
                      type="time"
                      className="recr-input"
                      id="recr-date-input"
                      onChange={(e) => setStartTime(e.target.value)}
                      value={changedStart ? startTime : null}
                      required></input>

                    {/*BACKEND FOR THIS?*/}
                    <input
                      type="text"
                      className="recr-input"
                      id="recr-date-input"
                      value={'PST'}
                      readOnly></input>
                  </div>
                  End
                  <div className="recr-date-row">
                    <input
                      type="date"
                      className="recr-input"
                      id="recr-date-input"
                      onChange={(e) => setEndDate(e.target.value)}
                      value={changedEnd ? endDate : null}
                      required></input>
                    <input
                      type="time"
                      className="recr-input"
                      id="recr-date-input"
                      onChange={(e) => setEndTime(e.target.value)}
                      value={changedEnd ? endTime : null}
                      required></input>
                    <input
                      type="text"
                      className="recr-input"
                      id="recr-date-input"
                      value={'PST'}
                      readOnly></input>
                  </div>
                  Link(s)
                  <div>
                    <input
                      type="text"
                      className="recr-input"
                      id="recr-link-sel"
                      style={{ border: 'none' }}
                      value={'Event Link'}
                      readOnly></input>

                    <input
                      type="text"
                      className="recr-input"
                      id="recr-link"
                      value={eventLink}
                      onChange={(e) => setEventLink(e.target.value)}></input>
                    {/*<button className="link-del" id="link-remove">x</button>*/}
                  </div>
                  <div>
                    <input
                      type="text"
                      className="recr-input"
                      style={{ border: 'none' }}
                      id="recr-link-sel"
                      value={'Virtual Meeting Link'}
                      readOnly></input>
                    <input
                      type="text"
                      className="recr-input"
                      id="recr-link"
                      value={virtLink}
                      onChange={(e) => setVirtLink(e.target.value)}></input>
                  </div>
                  {/*<button className="link-del">+ Add another link</button>*/}
                </div>
                {/*RIGHT SIDE INPUTS*/}
                <div id="recr-right-inp">
                  Description *
                  <div>
                    <textarea
                      type="text"
                      className="recr-input"
                      id="recr-desc-input"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      maxLength={150}></textarea>
                  </div>
                  <div id="recr-char">
                    {150 - text.length} characters remaining
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <input
                      type="checkbox"
                      value="invite"
                      onChange={(e) => setInvOnly(e.target.checked)}
                      style={{ cursor: 'pointer' }}
                      checked={invOnly}></input>
                    <p id="inv-only">Invite Only Event</p>
                  </div>
                  <div id="recr-forge-holder">
                    <button className="recr-forge" onClick={duplicateEvent}>
                      <img
                        className="recr-img"
                        src={require('../../assets/recrDup.PNG')}></img>
                    </button>
                    <button
                      className="recr-forge"
                      onClick={() => setShowDelModal(true)}>
                      <img
                        className="recr-img"
                        src={require('../../assets/recrOop.PNG')}></img>
                    </button>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <Modal
        showModal={showDelModal}
        setShowModal={setShowDelModal}
        close={cancelDel}
        style={{ overflow: 'hidden' }}>
        <div id="recr-del-wrap">
          <div id="recr-del-center">
            Are you sure you want to delete?
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <button id="recr-del-button" onClick={singleDelete}>
                Delete
              </button>
              <button id="recr-cancel-button" onClick={cancelDel}>
                <u>Cancel</u>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default RecrAccord;
