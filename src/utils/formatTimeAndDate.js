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
    //day = day.length > 1 ? day : '0' + day;

    var time = convertTime(datetime);
    return dayArr[datetime.getDay()] + ', ' + month + ' ' + day + ', ' + time;
  }

  // const dateWithTimeZone = (d) => {
  //   let date = new Date(d);
  
  //   let utcDate = new Date(date.toLocaleString('en-US', { timeZone: "UTC" }));
  //   let tzDate = new Date(date.toLocaleString('en-US', { timeZone: "America/Los_Angeles" }));
  //   console.log(date);
  //   console.log(utcDate);
  //   console.log(tzDate);
  //   let offset = utcDate.getTime() - tzDate.getTime();
  
  //   date.setTime( date.getTime() + offset );
  
  //   return date;
  // };

  const formatTime = (hr, min) => {
    var dd = ' AM';
    if (min < 10) {
      min = '0' + min;
    }
    if (hr <= 12) {
      return '' + hr + ':' + min + dd;
    } else {
      hr -= 12;
      dd = " PM";
      return '' + hr + ':' + min + dd;
    }
  };

export function formatDates(start, end) {
    var dow = new Date(start).getDay();
    var dow2 = new Date(end).getDay();
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

    console.log(dow);

    var mon = parseInt(start.slice(5,7));
    var day = parseInt(start.slice(8,10));
    var yr = parseInt(start.slice(0,4));
    var hr = parseInt(start.slice(11,13));
    var min = parseInt(start.slice(14,16));
    var mon2 = parseInt(end.slice(5,7));
    var day2 = parseInt(end.slice(8,10));
    var yr2 = parseInt(end.slice(0,4));
    var hr2 = parseInt(end.slice(11,13));
    var min2 = parseInt(end.slice(14,16));

    var time = formatTime(hr, min);
    var time2 = formatTime(hr2, min2);

    if (
      mon === mon2 &&
      day === day2 &&
      yr === yr2
    ) {
      return dayArr[dow] + ', ' + monthArr[mon-1] + ' ' + day + ' ' + time + " - " + time2 + " PT";
    } else {
      return dayArr[dow] + ', ' + monthArr[mon-1] + ' ' + day + ' ' + time + " - " + 
      dayArr[dow2] + ', ' + monthArr[mon2-1] + ' ' + day2 + ' ' + time2 + " PT";
    }


    // if (
    //   startDate.getDay() === endDate.getDay() &&
    //   startDate.getMonth() === endDate.getMonth() &&
    //   startDate.getDay() === endDate.getDay() &&
    //   startDate.getFullYear() === endDate.getFullYear()
    // ) {
    //   return formatDate(startDate) + ' - ' + convertTime(endDate) + ' PT';
    // } else {
    //   return formatDate(startDate) + ' - ' + formatDate(endDate) + ' PT';
    // }
  }