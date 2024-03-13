function formatTime(date){ // get time in hours, minutes, and seconds
  const inputDate = new Date(date); // initialize current "date" object
  // Format time
  const hours = inputDate.getHours();
  const minutes = inputDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${hours % 12}:${
    minutes < 10 ? '0' : ''
  }${minutes} ${ampm}`;
  return formattedTime
}
function formatDate(date) { // get date in terms of months, days, and years
  // formatDate
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  return formattedDate;
}
export function formatDateTime(date) {
  const formattedTime = formatDate(date) + ' ' + formatTime(date);
  return formattedTime;
}

export function formatCommentDate(inputDateTime) {
  const currentDate = new Date();
  const inputDate = new Date(inputDateTime);

  const timeDifferenceInSeconds = Math.floor((currentDate - inputDate) / 1000);
  const timeDifferenceInMinutes = Math.floor(timeDifferenceInSeconds / 60);
  const timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
  const timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
  // const timeDifferenceInWeeks = Math.floor(timeDifferenceInDays / 7);

  if (timeDifferenceInSeconds === 0) {
    return 'just now';
  } else if (timeDifferenceInSeconds < 60) {
    return `${timeDifferenceInSeconds}s `;
  } else if (timeDifferenceInMinutes < 60) {
    return `${timeDifferenceInMinutes}m `;
  } else if (timeDifferenceInHours < 24) {
    return `${timeDifferenceInHours}h `;
  } else if (timeDifferenceInDays < 7) {
    return `${timeDifferenceInDays}d `;
  } else {
    // If more than a week, format as "Feb 27, 2024"
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return inputDate.toLocaleDateString('en-US', options);
  }
}
