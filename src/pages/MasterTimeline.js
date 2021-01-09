import React, { useRef, useEffect, useState, createRef } from 'react';
import moment from 'moment';
import ReactMoment from 'react-moment';
import './MasterTimeline.css';
import CloseIcon from '@material-ui/icons/ChevronRightRounded';
import { dayDiff, simplestRangeFormat, START_DATETIME, END_DATETIME } from '../utils/formatTimeAndDate';


function MasterTimeline({ data }) {
  useEffect(() => {
    const scrollAll = (scrollRefs, hostRef) => {
      scrollRefs.current.forEach((ref, ind) => {
        weekdayRef.current.scrollLeft = hostRef.target.scrollLeft;
        ref.current.scrollLeft = hostRef.target.scrollLeft;
      })
    }
    hostScrollerRef.current.addEventListener("scroll", (el) => {scrollAll(scrollRefs, el)}, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollAll);
    };
  }, []);

  let [focused, setFocused] = useState(null);
  const timelineColors = ['#A0D7FF', '#FFF1AE', '#FBD6D5', '#CDEFC6'];
  let hostScrollerRef = useRef();
  let weekdayRef = useRef();
  let scrollRefs = useRef(Object.keys(data).map(() => createRef()));
  const weekdays = Array.from(Array(28)).map((_, ind) => {
    const day = moment().subtract(1, "days").add(ind, 'days');
    const today = moment();
    return (
      <span key={`day_${ind}`} className={`day subtext ${ind === 30 ? 'hidden' : ''}`}>
        <b>{day.format('ddd').toUpperCase()}</b>
        <b className={day.isSame(today, 'day') ? 'day-today day-num':'day-num'}>{day.format('D')}</b>
      </span>
    )
  })
  
  const renderedClubData = Object.keys(data).map((club, clubInd) => {
    return (
      <div key={`row_clubname_${clubInd}`} className='row'>
        <div className='left-col'>
          <div key={`clubname_${clubInd}`} className='club-name'>
            <img
              className='club-icon'
              src={data[club].icon || require('./assets/default_logo.jpg')}
              alt="icon"
            />
            <h4 className='dashboard-app-tl-clubname'>{club}</h4>
          </div>
        </div>
        <div className='right-col' ref={scrollRefs.current[clubInd]}>
          <div className='right-col-stretcher'>
            {data[club].events.map((row, rowInd) => {
              let renderedRow = [];
              let lastEnd, lastWidthString, lastDayLen = null;
              for (let i = 0, l = row.length; i < l; i++) {
                const event = row[i];
                const dayLen = dayDiff(event.event_start, event.event_end);
                let marginLeft;
                if (i === 0) {
                  const sinceLast = dayDiff(moment().subtract(1, "days"), event.event_start);
                  marginLeft = `calc((25.5%/7)*${sinceLast})`
                } else {
                  const sinceLast = dayDiff(moment(lastEnd), event.event_start);
                  marginLeft = `calc(((25.5%/7)*${sinceLast}) ${lastDayLen < 1 ? `- 0.8em - (25.5%/7)*${lastWidthString}` : '- 0.8em'})`
                }
                const widthString = dayLen > 1 ? dayLen : 1;
                renderedRow.push(
                  <button key={`row_${rowInd}_${i}`} className='event' onClick={() => setFocused({...event, icon:data[club].icon})} style={{
                    backgroundColor: timelineColors[clubInd%timelineColors.length],
                    width:  `calc((25.5%/7)*${widthString})`,
                    marginLeft: marginLeft
                    }}>
                      <p className='event-name'>{event.name}</p>
                      {dayLen >= 5 &&
                        <p className='event-name'>{event.name}</p>
                      }
                  </button>
                )
                if (i < l - 1) {
                  lastDayLen = dayLen;
                  lastEnd = event.event_end;
                  lastWidthString = widthString;
                }
              }
              return <div key={`row_${rowInd}`} className='event-concur-row'>{renderedRow}</div>;
            })}
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='container'>
      <div className='main-content'>
        <div className='moment-info row'>
            <div className='left-col'>
              <span><b className='month subtext'>{moment().format('MMMM')}</b></span>
            </div>
          <div className='right-col' ref={weekdayRef}>
            <div className='right-col-stretcher'>
              <div className='weekdays'>
                {weekdays}
              </div>
            </div>
          </div>
        </div>
        {renderedClubData}
        <div className='row'>
          <div className='left-col'></div>
          <div id='scroll-dummy' className='right-col' ref={hostScrollerRef}>
            <div className='right-col-stretcher'><br/></div>
          </div>
        </div>
      </div>
      {focused && 
        <div className='focused-container'>
          <button className='focused-button' onClick={() => setFocused(null)}><CloseIcon style={{color: '#8C8C8C'}}/></button>
          <div className='focused-content'>
            <div className='focused-club-icon-wrapper'>
              <img
                className='focused-club-icon'
                src={focused.icon || require('./assets/default_logo.jpg')}
                alt="icon"
              />
            </div>
            <div className='focused-title'>
              <h2>{focused.name}</h2>
            </div>
            <div className='focused-dates subtext'>
                <ReactMoment
                  interval={0}
                  date={focused.event_start}
                  format={simplestRangeFormat(focused.event_start, focused.event_end, END_DATETIME, false)}
                />
                {" - "}
                <ReactMoment
                  interval={0}
                  date={focused.event_end}
                  format={simplestRangeFormat(focused.event_start, focused.event_end, END_DATETIME, false)}
                />
              </div>
              <span className='focused-desc'>{focused.description}</span>
          </div>
        </div>
      }
    </div>
  )
}

export default MasterTimeline;