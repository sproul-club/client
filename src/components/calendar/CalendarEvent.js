import React from 'react';
import Popover from '@material-ui/core/Popover';
import Moment from 'react-moment';
import { simplestRangeFormat, START_DATETIME, END_DATETIME } from '../../utils/formatTimeAndDate';
import './CalendarEvent.scss';

function CalendarEvent ({event}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <div>
            <div className="rbc-event-content-inner" onClick={handleClick}>
                <img src={event.icon.toString()}/>
                {event.title.toString()}
            </div>
            
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <div className="popover-wrapper">
                    <div className="popover-flex-left"><img src={event.icon.toString()}/></div>
                    <div className="popover-flex-right">
                        <div className="popover-event-title">{event.title}</div>
                        <div className="popover-event-times"> 
                            <Moment
                            interval={0}
                            date={event.start}
                            format={simplestRangeFormat(event.start, event.end, START_DATETIME)}/>
                            {" - "}
                            <Moment
                            interval={0}
                            date={event.end}
                            format={simplestRangeFormat(event.start, event.end, END_DATETIME)} />
                        </div>
                        <div className="popover-event-description">{event.description}</div>
                    </div>
                </div>
            </Popover>            
        </div>
    )
}


export default CalendarEvent;