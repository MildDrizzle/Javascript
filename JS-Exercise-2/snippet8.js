const differenceBetweenDates = (date1, date2) => {
  let dateOne = new Date(date1);
  let dateTwo = new Date(date2);
  let differenceDate = Math.abs(dateTwo - dateOne);
  let year = Math.floor(differenceDate / (1000 * 3600 * 24 * 365));
  let month = Math.floor(differenceDate / (1000 * 3600 * 24 * 30)) - year * 12;
  let day =
    Math.floor(differenceDate / (1000 * 3600 * 24)) -
    month * 30 -
    year * 12 * 30;
  return `${year} years, ${month} months, ${day} days`;
};

console.log(differenceBetweenDates("01-07-2018", " 03-05-2020"));
