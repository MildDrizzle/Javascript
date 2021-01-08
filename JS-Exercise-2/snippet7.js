const getMonthName = (dateStr) => {
  var months = [
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
  const [day, month, year] = dateStr.split("/");
  return months[new Date(`${year}-${month}-${day}`).getMonth()];
};

console.log(getMonthName("01/11/2020"));
