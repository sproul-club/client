import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../actions/profile';
import { NotificationManager } from 'react-notifications';
import {addRecrEvent, updateRecrEvent, deleteRecrEvent } from '../../actions/profile';
import { validURL, normalizeUrl } from '../../utils/normalizeUrl';
import './RecrEvents.css';
import './Admin.css';
import RecrAccord from './RecrAccord';
import { ContactSupportOutlined } from '@material-ui/icons';
 
 
const RecrEvents = ({profile, events, incNumEvents, cancelEdit, addRecrEvent, updateRecrEvent, deleteRecrEvent}) => {
    var addSuccess = true;

    const addEv = async (e) => {
      e.preventDefault();
      const emptyEvent = {
        name: "[Event " + events.length + "]",
        link: null,
        virtual_link: null,
        event_start: "2000-01-01T00:00:00",
        event_end: "2000-01-01T00:00:00",
        description: "[enter description]",
        invite_only: false,
      };
  
      try {
          await addRecrEvent(emptyEvent);
      } catch (err) {
          addSuccess = false;
          console.log(err);
      }
      if (addSuccess == true) {
        incNumEvents(1);
      }
    };
 
    function entryChange(
      id,
      title,
      eventLink,
      startDate,
      startTime,
      endDate,
      endTime,
      text,
      inv_only,
      vir_link
    ) {
      const start = startDate.concat(' ' + startTime);
      const end = endDate.concat(' ' + endTime);
  
      //update event action
      updateRecrEvent(id, {
        name: title,
        link: eventLink || null,
        event_start: start,
        event_end: end,
        description: text,
        virtual_link: vir_link || null,
        invite_only: inv_only
      });
    }

    const dupEvent = async (event) => {
      const duplicatedEvent = {
        name: event.name + " copy",
        link: event.link,
        virtual_link: event.virtual_link,
        event_start: event.event_start,
        event_end: event.event_end,
        description: event.description,
        invite_only: event.invite_only,
      };
      try {
        await addRecrEvent(duplicatedEvent);
      } catch (err) {
          addSuccess = false;
          console.log(err);
      }
      if (addSuccess) {
        incNumEvents(1);
      }
    }
    const count = [1,2]
    function saveAll() {
      const retValues = []
      refs.current.forEach(child => {
        if (child !== null){
          if (child.checkSave() == 0) {
            child.verifySave();
          } else {
            retValues.push(1);
          }
        }
      })
      if (retValues.reduce(function(a,b) { return a+b;}, 0) == 0) {
        cancelEdit();
      } 
    }
 
  
    function delRef(index) {
      delete refs[index];
    }
    const refs = useRef([]);
    return (
        <div id="recr-main">
            <h3>Recruitment Timeline</h3>
            <div className="admin-text">
                Add events related to recruitment!
            </div>
            <hr style={{width: "97.5%", marginLeft: "-0.25%"}}></hr>
            <div style={{minHeight:"70%"}}>
                {events.map((ev, i) => (
                    <RecrAccord 
                        data={ev}
                        deleteRecrEvent = {deleteRecrEvent}
                        dupEvent = {dupEvent}
                        entryChange = {entryChange}
                        position = {i}
                        key = {i}
                        delRef = {delRef}
                        ref = {ins => refs.current[i] = ins}
                        incNumEvents = {incNumEvents}>
                    </RecrAccord>
                ))}
            </div>        
            <div id="recr-buttons">
                <button className="recr-button" id="recr-add" onClick={(e) => addEv(e)}>+ Add Event</button>
                <div id="recr-cancelsave">
                  <button className="recr-button" id="recr-cancel" onClick={cancelEdit}>Cancel</button>
                  <button className="recr-button" id="recr-save" onClick={saveAll}>Save</button>
                </div>
            </div>
        </div>
)};
 
const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    events: state.profile.recruiting_events
  });
 
export default connect(mapStateToProps, { addRecrEvent, updateRecrEvent, deleteRecrEvent })(RecrEvents);
