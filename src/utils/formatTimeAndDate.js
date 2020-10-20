import moment from 'moment';

export const START_DATETIME = 'start';
export const END_DATETIME = 'end';

function isSameYear(start, end) {
  return moment(start).isSame(end, 'year');
}

function isSameDay(start, end) {
  return moment(start).isSame(end, 'day');
}

export function simplestRangeFormat(start_dt, end_dt, datetype) {
  let sameYear = isSameYear(start_dt, end_dt);
  let sameDay = isSameDay(start_dt, end_dt);

  switch (datetype) {
    case START_DATETIME: {
      if (sameYear)
        return 'ddd, MMM D h:mm A';
      else
        return 'ddd, MMM D YYYY h:mm A'
    }

    case END_DATETIME: {
      if (sameDay)
        return 'h:mm A z';
      else if (sameYear)
        return 'ddd, MMM D h:mm A z';
      else
        return 'ddd, MMM D YYYY h:mm A z'
    }

    default: {
      throw new Error('Invalid date type passed: ' + datetype);
    }
  }
}