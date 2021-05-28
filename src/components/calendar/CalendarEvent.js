import React from 'react';

function CalendarEvent ({event}) {
    return (
        <div className="rbc-event-content-inner">
            <img src={event.icon.toString()}/>
            {event.title.toString()}
        </div>
    )
}


export default CalendarEvent;