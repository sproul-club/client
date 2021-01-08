import moment from 'moment';

export const START_DATETIME = 'start';
export const END_DATETIME = 'end';

function isSameYear(start, end) {
  return moment(start).isSame(end, 'year');
}

export function isSameDay(start, end) {
  return moment(start).isSame(end, 'day');
}

export function containsToday(start, end) {
  const s = moment(start);
  const e = moment(end);
  const today = moment();
  if (s.isSame(today, 'day') || (s.isBefore() && e.isSameOrAfter(today, 'day'))) {
    return true;
  }
  return false;
}

export function isUpcoming(start) {
  const s = moment(start);
  const today = moment();
  if (s.isAfter(today)) {
    return true;
  }
  return false;
}

export function simpleDayFormat() {
  return 'MM/DD';
}

export function simplestRangeFormat(start_dt, end_dt, datetype, timezone=true) {
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
        return `h:mm A ${timezone ? 'z' : ''}`;
      else if (sameYear)
        return `ddd, MMM D h:mm A  ${timezone ? 'z' : ''}`;
      else
        return `ddd, MMM D YYYY h:mm A  ${timezone ? 'z' : ''}`
    }

    default: {
      throw new Error('Invalid date type passed: ' + datetype);
    }
  }
}

export function justTimeFormat(start_dt, end_dt, datetype) {
  return 'h:mm A z'
}
