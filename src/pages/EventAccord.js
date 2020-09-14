import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Moment from 'react-moment';
import { simplestRangeFormat, START_DATETIME, END_DATETIME } from '../utils/formatTimeAndDate';

function EventAccord({ data }) {
  return data.events.map((event, i) => (
    <Accordion className="accordion-club" allowZeroExpanded key={i}>
      <AccordionItem key={event.event_start} className="accordion-group">
        <div className="event-flex-container">
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
