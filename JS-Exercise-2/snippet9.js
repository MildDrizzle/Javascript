const convertUnixTimestamp = (time) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateTime = new Date(time * 1000);
  const dt = `${days[dateTime.getDay()]}, ${
    months[dateTime.getMonth()]
  } ${dateTime.getDate()}, ${dateTime.getFullYear()} ${
    dateTime.getHours() % 12
  }:${dateTime.getMinutes()}:${dateTime.getSeconds()} ${
    dateTime.getHours() > 12 ? "PM" : "AM"
  }
  `;
  return dt;
};

console.log(convertUnixTimestamp(1607518718));
