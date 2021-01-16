import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import "./RecruitmentTL.css"
import { justTimeFormat, simplestRangeFormat, START_DATETIME, END_DATETIME } from '../utils/formatTimeAndDate';
//import { propTypes } from 'react-bootstrap/esm/Image';
 
const RecruitmentTL = ({ adminCheck, profile, currRoute, events }) => {
    const orderedEvents = events.sort((a,b) => (a.event_start > b.event_start) ? 1 : ((b.event_start > a.event_start) ? -1 : 0))
    var numEvents = orderedEvents.length;
    
    var today = new Date();
    return (
        <div>
            {orderedEvents.map((event, i) => (
                <div>
                <div id="recr-box">
                    <div className="name-time-box">
                        {console.log("EVENT INFO")}
                        {console.log(event)}
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
                    <div className="date-circle" id={(today.getFullYear() > parseInt(event.event_start.slice(0,4))) || (today.getMonth() + 1 > parseInt(event.event_start.slice(5,7)) || (((today.getMonth() + 1) == parseInt(event.event_start.slice(5,7))) && (today.getDate() > parseInt(event.event_start.slice(8,10))))) ? "filled": "unfilled"}>
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
                                    src={require('./assets/linkImages/gcal.PNG')}
                                    alt="resource"
                                    id="gcal"
                            />}
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={event.link}
                            >
                            {<img
                                    className="res-img"
                                    src={require('./assets/linkImages/recrFB.PNG')}
                                    alt="resource"
                                    className="recrButton"
                            />}
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={event.virtual_link}
                            >
                            {<img
                                    className="res-img"
                                    src={require('./assets/linkImages/recrZM.PNG')}
                                    alt="resource"
                                    className="recrButton"
                            />}
                            </a>
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