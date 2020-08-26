import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function convertTime(datetime) {
    var hour = datetime.getHours();
    var minutes = datetime.getMinutes();
    var dd = hour > 12 ? 'PM' : 'AM';
    hour = hour > 12 ? hour - 12 : hour;

    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    return `${hour}:${minutes} ${dd}`;
}

function formatDate(datetime) {
    const dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var month = monthArr[datetime.getMonth()];

    var day = datetime.getDate().toString();
    day = day.length > 1 ? day : ('0' + day);

    var time = convertTime(datetime);
    return dayArr[datetime.getDay()] + ', ' + month + ' ' + day + ', ' + time;
}

function formatDates(start, end) {
    var startDate = new Date(start);
    var endDate = new Date(end);

    if (
        startDate.getDay() === endDate.getDay() &&
        startDate.getMonth() === endDate.getMonth() &&
        startDate.getDay() === endDate.getDay() &&
        startDate.getFullYear() === endDate.getFullYear()
    ) {
        return formatDate(startDate) + ' - ' + convertTime(endDate) + ' PT';
    } else {
        return formatDate(startDate) + ' - ' + formatDate(endDate) + ' PT';
    }
}
function EventAccord(props) {
    const accordList = props.data.events.map((event, i) =>
    <Accordion className="accordion-club" allowZeroExpanded key={i}>
        <AccordionItem key={event.event_start} className="accordion-group">
            <div className="event-flex-container">
                <div className="event-flex-left">
                    {event.name}
                </div>
                <div className="event-flex-right">{formatDates(event.event_start, event.event_end)}</div>
            </div>
            <AccordionItemHeading className="accordion__heading-club">
                <AccordionItemButton className="accordion__button-club">
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion__panel-event">
                {event.description}
                <br></br>
                <div id="gray-ev-link">
                    event link
                    <a target="_blank" rel="noopener noreferrer" href={event.link} key={i}>
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
    </Accordion>)

    return(
        accordList
    )
}
export default EventAccord