import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { google } from "calendar-link";
import moment from 'moment';
import 'moment-timezone';
import "./RecruitmentTL.scss"
import { justTimeFormat, simplestRangeFormat, START_DATETIME, END_DATETIME, dateTimeFormat } from '../../utils/formatTimeAndDate';
//import { propTypes } from 'react-bootstrap/esm/Image';

function generateGoogleEventLink(recruiting_event) {
    let finalDescription = recruiting_event.description;
    const hasVirtualLink = !!recruiting_event.virtual_link;
    const hasEventLink = !!recruiting_event.link;

    if (hasVirtualLink || hasEventLink)
        finalDescription += '\n\n';

    if (hasVirtualLink)
        finalDescription += `Virtual Meeting: <a href="${recruiting_event.virtual_link}">${recruiting_event.virtual_link}</a>\n\n`;

    if (hasEventLink)
        finalDescription += `Event Link: <a href="${recruiting_event.link}">${recruiting_event.link}</a>`;

    return google({
        title: recruiting_event.name,
        description: finalDescription.trim(),
        start: recruiting_event.event_start+"-08:00",
        end: recruiting_event.event_end+"-08:00"
    });
}

const RecruitmentTL = ({ adminCheck, profile, currRoute, events }) => {
    const orderedEvents = events.sort((a,b) => (a.event_start > b.event_start) ? 1 : ((b.event_start > a.event_start) ? -1 : 0))
    var numEvents = orderedEvents.length;
    
    var today = new Date();
    return (
        <div>
            {orderedEvents.map((event, i) => (
                <div key={i}>
                <div id="recr-box">
                    {/* <div className="name-time-box">
                    </div> */}
                    <div style={{width: "3vw"}}></div>
                    <div className="date-circle" id={(today.getFullYear() > parseInt(event.event_start.slice(0,4))) || (today.getMonth() + 1 > parseInt(event.event_start.slice(5,7)) || (((today.getMonth() + 1) == parseInt(event.event_start.slice(5,7))) && (today.getDate() > parseInt(event.event_start.slice(8,10))))) ? "filled": "unfilled"}>
                        {parseInt(event.event_start.slice(5,7))}/{parseInt(event.event_start.slice(8,10))}</div>
                    <div className="desc-box">
                        <div className="event-desc">
                        <p className="event-title">{event.name} </p>
                        {(event.event_start.slice(0,10) == event.event_end.slice(0,10)) ?
                        <div style={{display:'flex', flexDirection:'row', marginBottom:".5vw"}}>
                            {/* <div className="event-time">
                                {"" + (parseInt(event.event_start.slice(11,13)) % 12 === 0 ? 12 : parseInt(event.event_start.slice(11,13)) % 12) + event.event_start.slice(13,16) + " " + (parseInt(event.event_start.slice(11,13)) >= 12 ? "PM" : "AM")}
                            </div> */}

                            <Moment className="event-time"
                            id="first-time"
                            interval={0}
                            date={moment.tz(event.event_start, "America/Los_Angeles")}
                            format={justTimeFormat(event.event_start, event.event_end, START_DATETIME)}/>
                            <p className="event-time" style={{marginLeft:"-0.0vw"}}> - </p>

                            {/* <div className="event-time">
                                {"" + (parseInt(event.event_end.slice(11,13)) % 12 === 0 ? 12 : parseInt(event.event_end.slice(11,13)) % 12) + event.event_end.slice(13,16) + " " + (parseInt(event.event_end.slice(11,13)) >= 12 ? "PM" : "AM")}
                            </div> */}
                            <Moment className="event-time"
                            interval={0}
                            date={moment.tz(event.event_end, "America/Los_Angeles")}
                            format={justTimeFormat(event.event_start, event.event_end, END_DATETIME)}/>
                        </div> :
                        <div style={{display:'flex', flexDirection:'row', marginBottom:".5vw"}}>
                            <Moment className="event-time"
                            id="first-time"
                            interval={0}
                            date={moment.tz(event.event_start, "America/Los_Angeles")}
                            format={dateTimeFormat(event.event_start, event.event_end, START_DATETIME)}/>
                            {/* <div className="event-time">
                                {'' + parseInt(event.event_start.slice(5, 7)) + "/" + parseInt(event.event_start.slice(8,10)) + " " + (parseInt(event.event_start.slice(11,13)) % 12 === 0 ? 12 : parseInt(event.event_start.slice(11,13)) % 12) + event.event_start.slice(13,16) + " " + (parseInt(event.event_start.slice(11,13)) >= 12 ? "PM" : "AM")}
                            </div> */}
                            <p className="event-time" style={{marginLeft:"-0.0vw"}}>-</p>
                        <div>
                            <Moment className="event-time"
                            interval={0}
                            date={moment.tz(event.event_end, "America/Los_Angeles")}
                            format={dateTimeFormat(event.event_start, event.event_end, END_DATETIME)}/>
                            </div>
                            {/* <div className="event-time">
                                {'' + parseInt(event.event_end.slice(5, 7)) + "/" + parseInt(event.event_end.slice(8,10)) + " " + (parseInt(event.event_end.slice(11,13)) % 12 === 0 ? 12 : parseInt(event.event_end.slice(11,13)) % 12) + event.event_end.slice(13,16) + " " + (parseInt(event.event_end.slice(11,13)) >= 12 ? "PM" : "AM")}
                            </div> */}
                        </div> 
                        }
                        {event.description}
                        </div>
                        <div className = "recr-button-row">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={generateGoogleEventLink(event)} //gcal link
                                
                            >
                            {<img
                                    className="res-img"
                                    src={require('../assets/linkImages/gcal.PNG')}
                                    alt="resource"
                                    id="gcal"
                            />}
                            </a>
                            {(event.link != null) ? <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={event.link}
                            >
                            {<img
                                    className="res-img"
                                    src={require('../assets/linkImages/recrFB.PNG')}
                                    alt="resource"
                                    className="recrButton"
                            />}
                            </a> : null}
                           {(event.virtual_link != null) ? <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={event.virtual_link}
                            >
                            {<img
                                    className="res-img"
                                    src={require('../assets/linkImages/recrZM.PNG')}
                                    alt="resource"
                                    className="recrButton"
                            />}
                            </a> : null}
                        </div>
                    </div>
                </div>  
            </div>
        
            ))}
    </div>
    )
}
//export default RecruitmentTL;
const mapStateToProps = (state) => ({
    profile: state.profile.profile,
    events: state.profile.recruiting_events,
  });
 
const callMSP = (admin, currRoute) => {
    if (admin && currRoute.currRoute == "recruitment") {
        return (
            mapStateToProps
        )
    }
}
 
export default connect(callMSP)(RecruitmentTL);
