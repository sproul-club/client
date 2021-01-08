import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import "./EventAccord.css";

import Moment from 'react-moment';
import { simplestRangeFormat, START_DATETIME, END_DATETIME } from '../utils/formatTimeAndDate';

function EventAccord({ data }) {

  const orderedEvents = data.events.sort((a,b) => (a.event_start > b.event_start) ? 1 : ((b.event_start > a.event_start) ? -1 : 0))


  return orderedEvents.map((event, i) => (
    <Accordion className="accordion" allowZeroExpanded key={i}>
      <AccordionItem key={event.event_start} className="accordion-group">
      <AccordionItemButton>
        <div className="event-container">
          <div className="event-flex-left">{event.name}</div>
          <div className="event-flex-right">
            <Moment
              interval={0}
              date={event.event_start}
              format={simplestRangeFormat(event.event_start, event.event_end, START_DATETIME)}/>
            {" - "}
            <Moment
              interval={0}
              date={event.event_end}
              format={simplestRangeFormat(event.event_start, event.event_end, END_DATETIME)} />
          </div>
        </div>
        <div className="accordion__button-club"></div>
        <AccordionItemPanel className="accordion__panel-event">
          {event.description}
          <br></br>
          {(event.link ? 
          <div id="gray-ev-link">
            event link
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={event.link}
              key={i}
            >
              <img
                className="res-img"
                src={require('./assets/linkImages/resLink.png')}
                alt="resource"
              />
            </a>
          </div>
          : null)}
        </AccordionItemPanel>
        </AccordionItemButton>
      </AccordionItem>
      <hr width="90%"></hr>
    </Accordion>
  ));
}
export default EventAccord;
