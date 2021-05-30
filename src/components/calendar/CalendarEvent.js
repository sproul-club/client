import React from 'react';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './CalendarEvent.scss';

const useStyles = makeStyles((theme) => ({
    button: {
        padding: 0,
        fontFamily: 'Qanelas Soft',
        textTransform: "none"
      },
  }));

function CalendarEvent ({event}) {
    const classes = useStyles();
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
        <div className="rbc-event-content-inner">
            <div>
                <Button className={classes.button} onClick={handleClick}>
                    <img src={event.icon.toString()}/>
                    {event.title.toString()}
                </Button>

                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    {event.title}
                </Popover>
            </div>
            
        </div>
    )
}


export default CalendarEvent;