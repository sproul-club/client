import React from 'react';
import Moment from 'react-moment';
import "./RecruitmentTL.css"
import { justTimeFormat, simplestRangeFormat, START_DATETIME, END_DATETIME } from '../utils/formatTimeAndDate';
 
function RecruitmentTL({ data }) {
    const orderedEvents = data.events.sort((a,b) => (a.event_start > b.event_start) ? 1 : ((b.event_start > a.event_start) ? -1 : 0))
    var numEvents = orderedEvents.length;
    var today = new Date();
    return orderedEvents.map((event, i) => (
        <div>
        <div id="recr-box">
            <div className="name-time-box">
                <text className="event-title">{event.name} </text>
                <div style={{display: "flex"}}>
                    <Moment className="event-time"
                    interval={0}
                    date={event.event_start}
                    format={justTimeFormat(event.event_start, event.event_end, START_DATETIME)}/>
                    <text className="event-time" style={{marginLeft:"-0.5vw"}}>-</text>
                </div>
                <Moment className="event-time"
                interval={0}
                date={event.event_end}
                format={justTimeFormat(event.event_start, event.event_end, END_DATETIME)}/>
            </div>
            <div className="date-circle" id={(today.getFullYear() > event.event_start.slice(0,4)) || (today.getMonth() > parseInt(event.event_start.slice(5,7)) || ((today.getMonth() == parseInt(event.event_start.slice(5,7))) && (today.getDay() > parseInt(event.event_start.slice(8,10))))) ? "filled": "unfilled"}>
                {parseInt(event.event_start.slice(5,7))}/{parseInt(event.event_start.slice(8,10))}</div>
            <div className="desc-box">
                <div className="event-desc">
                {event.description}
                </div>
                <div className = "recr-button-row">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="" //gcal link
                        
                    >
                       {<img
                            className="res-img"
                            //src={require('./recrEventLinks/gcal.PNG')}
                            alt="resource"
                            id="gcal"
                       />}
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="" //FB link
                    >
                       {<img
                            className="res-img"
                            //src={require('./recrEventLinks/recrFB.PNG')}
                            alt="resource"
                            className="recrButton"
                       />}
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="" //Zoom link
                    >
                       {<img
                            className="res-img"
                            //src={require('./recrEventLinks/recrZM.PNG')}
                            alt="resource"
                            className="recrButton"
                       />}
                    </a>
                </div>
            </div>
        </div>  
    </div>
 
    ));
}
export default RecruitmentTL;
