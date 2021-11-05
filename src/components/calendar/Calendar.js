import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Calendar as RBC, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import Dropdown from '../../components/layout/dropdown/Dropdown.js';
import Switch from '@material-ui/core/Switch';
import './Calendar.scss';
import CalendarEvent from './CalendarEvent.js'

const localizer = momentLocalizer(moment)

let calendarEventsList = []; // populate this list with the events to be displayed

function Calendar({ student, tagOptions, state}) {
  const [clubs, setClubs] = useState([]);
  const [tags, setTags] = useState([]);
  const [recruiting, setRecruit] = useState('');
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    calendarEventsList = [];
  }, [calendarEventsList]);

   /* TEMPORARY HARDCODED STUDENT FOR TESTING. MAY NEED TO ADJUST IF USING FOR EVENTS */
   student = {
    name: 'Obama',
    majors: [],
    minors: [],
    interests: [],
    bookmarked_clubs: ['sproul.club', 'maybe club'],
    visited_clubs: [],
    club_board: {
      interested_clubs: [
        {
          name: 'sproul.club',
          icon:
            'https://sproul-club-images-prod.s3-us-west-1.amazonaws.com/logo/sproul.club-logo-cc6381f68d09a056ef7770a0e9fbdca8.png',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-29T23:59:00',
              event_start: '2021-10-29T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Application Due',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-16T23:59:00',
              event_start: '2021-10-12T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Workshop #1',
            },
          ],
          tags: ['Computer Science', 'Consulting'],
          recruiting: "Accepting new members",
          value: 0
        },
        {
          name: 'random club',
          icon:
            'https://data.whicdn.com/images/333477434/original.jpg',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-16T23:59:00',
              event_start: '2021-10-16T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #2',
            },
          ],
          value: 1,
          tags: ['Community Service', 'Environmental'],
          recruiting: "Accepting new members",
        },
      ],
      applied_clubs: [
        {
          name: 'devclub',
          icon:
            'http://pm1.narvii.com/7620/6144829ee2b97d83e93fbc54bf5c7ae7f3dc748er1-627-629v2_uhq.jpg',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-22T23:59:00',
              event_start: '2021-10-10T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Virtual Tabling',
            },
          ],
          tags: ['Design', 'Engineering', 'Consulting', 'Computer Science'],
          recruiting: "Not accepting new members",
          value: 2
        },
        {
          name: 'no club',
          icon:
            'https://pbs.twimg.com/profile_images/1082020318523412480/E87sUSUc_400x400.jpg',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-01-10T15:30:00',
              event_start: '2021-01-10T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #1',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-13T15:30:00',
              event_start: '2021-10-12T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Infosession #2',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-13T15:30:00',
              event_start: '2021-10-07T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'First Wave Recruitment',
            },
          ],
          tags: ['Social'],
          recruiting: "Accepting new members",
          value: 3
        },
        {
          name: 'maybe club',
          icon:
            'https://pbs.twimg.com/profile_images/1259982795318812672/4DTVxmBy_400x400.jpg',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-11T15:30:00',
              event_start: '2021-10-08T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Speaker Panel',
            },
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-13T15:30:00',
              event_start: '2021-10-12T11:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Speaker Panel #2',
            },
          ],
          tags: ['Computer Science', 'Research', 'CalGreek'],
          recruiting: "Not accepting new members",
          value: 4
        },
      ],
      interviewed_clubs: [
        {
          name: 'offbrand club',
          icon:
            'https://i2.wp.com/i.pinimg.com/originals/1b/e7/89/1be78953afd8850b65d1c28c53e0d882.jpg',
          events: [
            {
              description: 'See our Facebook events for more details.',
              event_end: '2021-10-04T23:59:00',
              event_start: '2021-09-30T08:00:00',
              id:
                'fall-2020-recruitment-with-180-degrees-consulting-at-uc-berkeley',
              link: 'https://www.facebook.com/events/784593735644618/',
              name: 'Virtual Tabling',
            },
          ],
          tags: ['Social', 'Research'],
          recruiting: "Not accepting new members",
          value: 5
        },
      ],
    },
  };

  const recruitOptions = [
    { value: 1, label: 'Accepting new members' },
    { value: 0, label: 'Not accepting new members' },
  ];

  let clubOptions = []; // only contains clubs in the application tracker board
  Object.keys(student.club_board).forEach((key) => {
    student.club_board[key].forEach((club, ind) => {
      clubOptions.push({label: club.name, value: club.value});
    });
  });

  // styles for dropdown
  const customStyles = {
    multiValue: (provided, state) => ({
      ...provided,
      background: '#D1D3D4',
      color: '#2b2b2b',
      'border-radius': 4,
    }),
    control: (provided, state) => ({
      display: 'flex',
      width: 225,
      margin: 7,
      marginBottom: 8,
      fontSize: 12,
      fontFamily: 'Qanelas Soft',
      fontWeight: 400,
      fontStyle: 'normal',
      borderRadius: 5,
      border: 'solid 1px #949494',
      // border: (state.selectProps.error) ? 'solid 1px #ff2d2d' : 'solid 1px #949494',
    }),
    menu: (provided, state) => ({
      ...provided,
      margin: 8,
      marginTop: 2,
      width: 225,
      fontSize: '12px',
      fontFamily: 'Qanelas Soft',
      fontWeight: 300,
      fontStyle: 'normal',
      textAlign: 'left',
      color:
        state.selectProps.value && state.selectProps.value.length >= 3
          ? '#cccccc'
          : '#4e4e4e',
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      background: '#D1D3D4',
      color: '#2b2b2b',
      borderRadius: 10,
      '&:hover': {
        color: 'hsl(0,0%,40%)',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#4e4e4e',
    }),
    multiValueLabel: (provided, state) => ({
      ...provided,
      'margin-left': '4px',
      padding: '2px',
      'padding-left': '5px',
      fontSize: '12px',
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      width: 0,
    }),

    clearIndicator: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      padding: '5px 8px',
    }),
    '@media only screen and (min-width: 1700px)': {
      menu: (provided, state) => ({
        ...provided,
        width: 500,
      }),
    },
  };

  const BookmarkedSwitch = withStyles((theme) => ({
    root: {
      width: 36,
      height: 20,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#54A0F1',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#54A0F1',
        border: 'none',
      },
    },
    thumb: {
      width: 18,
      height: 18,
    },
    track: {
      borderRadius: 20 / 2,
      border: `none`,
      backgroundColor: '#E6E6E6',
      opacity: 1,
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  const handleSwitchcChange = (event) => {
    setBookmarked(event.target.checked);
  };
  
  const eventColors = [
    "#ABDFFC",
    "#FBD6D5",
    "#FFF1AE",
    "#CDEFC6"
  ];

  function addAllEvents() {
    var counter = 0;
    Object.keys(student.club_board).forEach((key) => {
      student.club_board[key].forEach((club, ind) => {
        var color = eventColors[counter % 4]
        counter++;
        club.events.forEach((event, ind) => {
          let calendarEvent = { club: club, start: new Date(event.event_start), end: new Date(event.event_end), title: event.name, icon: club.icon, color: color, description: event.description, link: event.link};
          calendarEventsList.push(calendarEvent);
        });
      });
    });
    return calendarEventsList;
  }

  function createCalendarEventsList() {
    var eventsList = addAllEvents();
    var clubList = [];

    if ((clubs !== null) && (clubs.length !== 0)) {
      var clubList = [];
      clubs.forEach((c) => {
        clubList.push(c.label);
      });
      eventsList = eventsList.filter((event) => clubList.includes(event.club.name));
    }

    if ((tags !== null) && (tags.length !== 0)) {
      eventsList = eventsList.filter((event) => {
        let tagExists = false;
        for (let i = 0; i < tags.length; i++) {
          tagExists = event.club.tags.includes(tags[i].label);
          if (tagExists) {break;}
        }
        return tagExists;
      });
    }

    if ((recruiting !== null) && (recruiting.length !== 0)) {
      eventsList = eventsList.filter((event) => event.club.recruiting === recruiting.label);
    }

    if (bookmarked) {
      eventsList = eventsList.filter((event) => student.bookmarked_clubs.includes(event.club.name));
    }
    return eventsList
  }

  function eventStyleGetter(event, start, end, isSelected) {
    var style = {
        backgroundColor: event.color,
    };
    return {
        style: style
    };
  }
  return (
    <div className="calendar-wrapper">
      <div className="calendar-header">
        <h2>Calendar</h2>
        <span>
          <i>
            *Times are in PT
          </i>
        </span>
      </div>
      <div className="calendar-filters"> {/*NO FILTERS HAVE LOGIC YET. EVENTS SHOWN ARE ALL HARDCODED EVENTS*/}
        <div className="calendar-filters-left">
          {/* filter by club names. known bug: options disappear after selecting other options */}
          <Dropdown
            options={clubOptions}
            multi={true}
            search={true}
            placeholder="Select clubs"
            style={customStyles}
            defaultValue={clubs}
            set={setClubs}
          />
          {/* filter by club tags */}
          <Dropdown
            options={tagOptions}
            multi={true}
            search={true}
            placeholder="Select tags (maximum 3 tags)"
            style={customStyles}
            defaultValue={tags}
            set={setTags}
          />
          <Dropdown
            options={recruitOptions}
            multi={false}
            search={false}
            placeholder="Recruitment status"
            style={customStyles}
            defaultValue={recruiting}
            set={setRecruit}
          />
        </div>
        <div className="calendar-filters-right">
          Bookmarked Clubs &nbsp;
          <BookmarkedSwitch checked={bookmarked} onChange={handleSwitchcChange}/>
        </div>
      </div>
      <RBC
        views={["month"]}
        localizer={localizer}
        events={createCalendarEventsList()}
        components={{event: CalendarEvent}}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 700 }}
        messages={{next:"▶",previous:"◀"}}
        popup
        eventPropGetter={eventStyleGetter}
      />    
    </div>
    
  )
}


const mapStateToProps = (state) => ({
  tagOptions: state.profile.tagOptions, //not positive this will work if not logged into a club admin account
});

export default connect(mapStateToProps, {})(Calendar)
