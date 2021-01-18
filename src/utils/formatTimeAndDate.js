import moment from 'moment';

export const START_DATETIME = 'start';
export const END_DATETIME = 'end';

function isSameYear(start, end) {
  return moment(start).isSame(end, 'year');
}

export function dayDiff(start, end, ceil=false) {
  let e = moment(end).startOf('day');
  let s = moment(start).startOf('day');
  if (ceil) {
    e = e.add(1, 'days');
    s = s.add(1, 'days');
  }
  return e.diff(s, 'days');
}

export function isSameDay(start, end) {
  return moment(start).isSame(end, 'day');
}

export function isWithinFourWeeks(start) {
  const sunday = moment().startOf('week');
  return moment(start).isSameOrAfter(sunday, 'day') && moment(start).isBefore(sunday.add(30, 'days'));
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

export function eventsOverlap(eventList, e1) {
  for (let i = 0, l = eventList.length; i < l; i++) {
    const e2 = eventList[i];
    const e1Start = moment(e1.event_start);
    const e1End= moment(e1.event_end);
    const e2Start = moment(e2.event_start);
    const e2End= moment(e2.event_end);
    if(
      (e2Start.isSameOrBefore(e1Start) && e2End.isSameOrAfter(e1Start))
      || (e1Start.isSameOrBefore(e2Start) && e1End.isSameOrAfter(e2Start))
    ) {
      return true;
    }
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
  return 'h:mm A'
}

export function dateTimeFormat(start_dt, end_dt, datatype) {
  return 'M/D h:mm A'
}

