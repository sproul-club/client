export function convertTime(datetime) {
    var dd = ' AM';

    var hour = datetime.getUTCHours();
    hour = hour - 7;
    if (hour < 0) {
      hour = hour + 24;
    }
    var h = hour;
    if (h >= 12) {
      hour = h - 12;
      dd = ' PM';
    }
    if (hour === 0) {
      hour = 12;
    }

    var minutes = datetime.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return hour + ':' + minutes + dd;
  }

export function formatDate(datetime) {
    const dayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const monthArr = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    var month = monthArr[datetime.getMonth()];

    var day = datetime.getDate().toString();
    // var year = datetime.getFullYear();
    day = day.length > 1 ? day : '0' + day;

    var time = convertTime(datetime);
    return dayArr[datetime.getDay()] + ', ' + month + ' ' + day + ', ' + time;
  }

export function formatDates(start, end) {
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