import React, { useState } from 'react';
import ReactMoment from 'react-moment';
import Tag from '../../components/tag/Tag';
import { simplestRangeFormat, END_DATETIME } from '../../utils/formatTimeAndDate';
import './KanbanClubInfo.scss';

const KanbanClubInfo = ({ club }) => {
    let majorsList = club.major_requirements.map((tag, i) => (
        <Tag key={i} label={tag} listId={i} />
    ));
    let classesList = club.class_requirements.map((tag, i) => (
        <Tag key={i} label={tag} listId={i} />
    ));
    let clubEvents = []
    if (club.events) {
        club.events.forEach((event, key) => {
            clubEvents.push(
                <div className="events">
                    <div className="event-title">
                        <a href={event.link} target="_blank" rel="noopener noreferrer"><h4>{event.name}</h4></a>
                    </div>
                    <span className='event-date'>
                        <ReactMoment
                        interval={0}
                        date={event.event_start}
                        format={simplestRangeFormat(event.event_start, event.event_end, END_DATETIME, false)}
                        />
                        {" - "}
                        <ReactMoment
                        interval={0}
                        date={event.event_end}
                        format={simplestRangeFormat(event.event_start, event.event_end, END_DATETIME, false)}
                        />
                    </span>
                    <div className='event-description'>{event.description}</div>
                </div>
            )
        })
    }
    return (
        <div className="club-events-wrapper">
            <div className="club-title">
                <img
                    className="club-icon"
                    src={club.icon || require('../assets/default_logo.jpg')}
                    alt="icon"
                />
                <span className="club-name"><h2>{club.name}</h2></span>
            </div>
            <div className="row">
                <div className="column">
                    <div class="column title">
                        <h3>Application Requirements</h3>
                    </div>
                    <div className="column head">
                        <h4>Majors</h4>
                    </div>
                    <div className='header-tags'>
                        {majorsList.length > 0 ? majorsList : 
                            <Tag key={0} label="None" listId={0} />
                        }
                    </div>
                    <div className="column head">
                        <h4>Classes</h4>
                    </div>
                    <div className='header-tags'>
                        {classesList.length > 0 ? classesList :
                            <Tag key={0} label="None" listId={0} />
                        }
                    </div>
                </div>
                <div className="column">
                    <div className="column title">
                        <h3>Events</h3>
                    </div>
                    <div className="column content">
                        {clubEvents.length > 0 ? clubEvents : 
                            <span>No events.</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default KanbanClubInfo;