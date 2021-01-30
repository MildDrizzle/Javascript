"use strict";
const date1 = new Date("07/01/2018");
const date2 = new Date("05/03/2020");
let minutes,
  hours,
  days = [],
  weeks,
  months,
  year;
const calulateSpan = (totalDays) => {
  if (totalDays >= 365) {
    year = Math.floor(totalDays / 365);
    totalDays = totalDays % 365;
  }
  if (totalDays >= 30) {
    months = Math.floor(totalDays / 30);
    totalDays = totalDays % 30;
  }
  console.log(year + " years " + months + " months " + totalDays + " days");
};
const calculate = () => {
  const milliseconds = Math.abs(date2 - date1);
  minutes = milliseconds / 60000;
  hours = minutes / 60;
  days.push(Math.ceil(hours / 24));
  calulateSpan(days[0]);
  weeks = days[0] / 7;
  days.push(days[0] % 7);
  months = Math.ceil(days[0] / 30);
  days.push(days[0] % 30);
};
calculate();
console.log(`or ${months} Months  ${days.pop()} Days
or ${weeks} Weeks ${days.pop()} Days
or ${days.pop()} Days
or ${hours} Hours
or ${minutes} minutes
`);
