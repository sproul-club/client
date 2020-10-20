import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { formatDates } from '../utils/formatTimeAndDate';

function EventAccord({ data }) {

  const orderedEvents = data.events.sort((a,b) => (a.event_start > b.event_start) ? 1 : ((b.event_start > a.event_start) ? -1 : 0))


  return orderedEvents.map((event, i) => (
    <Accordion className="accordion-club" allowZeroExpanded key={i}>
      <AccordionItem key={event.event_start} className="accordion-group">
        <div className="event-flex-container">
          <div className="event-flex-left">{event.name}</div>
          <div className="event-flex-right">
            {formatDates(event.event_start, event.event_end)}
          </div>
        </div>
        <AccordionItemHeading className="accordion__heading-club">
          <AccordionItemButton className="accordion__button-club"></AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordion__panel-event">
          {event.description}
          <br></br>
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
        </AccordionItemPanel>
      </AccordionItem>
      <hr width="90%"></hr>
    </Accordion>
  ));
}
export default EventAccord;
