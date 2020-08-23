import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from 'react-accessible-accordion';
import './ClubPage.css';
import './admin/Events.css';
  
  function convertTime(datetime) {
      var dd = ' AM'
  
      var hour = datetime.getUTCHours();
      hour = hour - 7;
      if (hour < 0) {
      hour = hour + 24
      }
      var h = hour;
      if (h >= 12) {
      hour = h - 12;
      dd = ' PM';
      }
      if (hour == 0) {
      hour = 12;
      }
  
      var minutes = datetime.getMinutes();
      minutes = minutes < 10 ? "0" + minutes : minutes;
  
      return hour + ':' + minutes + dd
  }

  function formatDate(datetime) {
    if (typeof(datetime) !== Date) {
        datetime = new Date(datetime);
    }

    const dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    var month = (monthArr[datetime.getMonth()])

    var day = datetime.getDate().toString();
    var year = datetime.getFullYear();
    day = day.length > 1 ? day : '0' + day;

    var time = convertTime(datetime);
    return dayArr[datetime.getDay()] + ', ' + month + ' ' + day + ', ' + time;
  }
 
function EventAccord(props) {
    const accordList = props.data.events.map((event, i) =>
    <Accordion className="accordion-club" allowZeroExpanded key={i}>
        <AccordionItem key={event.event_start} className="accordion-group">
            <div className="event-flex-container">
                <div className="event-flex-left">{event.name}</div>
                <div className="event-flex-right">{formatDate(event.event_start)}</div>
            </div>
            <AccordionItemHeading className="accordion__heading-club">

                    <AccordionItemButton className="accordion__button-club">   
                    </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion__panel-event">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempor ipsum urna, at ullamcorper leo tincidunt vitae. Integer laoreet accumsan neque, et placerat turpis hendrerit nec. Sed id auctor ligula. Morbi ac convallis massa, sit amet finibus urna. Morbi sollicitudin leo eget elit mollis ultrices. Vestibulum faucibus dolor ac lacinia iaculis. In at velit tincidunt, tempus quam eget, suscipit massa. Ut porta purus nec ante mollis, id viverra purus efficitur. Nam rhoncus ligula purus, id tristique enim finibus sed. Suspendisse ultricies finibus purus, et volutpat tortor ultrices quis. Nam tempor, nisi eget congue tempus, ligula urna placerat massa, ac condimentum tortor ligula non mauris.
            </AccordionItemPanel>
        </AccordionItem>
    </Accordion>)
    
    return(
        accordList
    )
}
export default EventAccord
