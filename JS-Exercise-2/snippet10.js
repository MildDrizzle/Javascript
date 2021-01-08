let findDifference1 = (date1, date2) => {
  let differenceInDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10);

  let differenceInYears = 0;
  let differenceInMonths = 0;

  if (differenceInDays >= 365) {
    differenceInYears = Math.floor(differenceInDays / 365);
    differenceInDays = differenceInDays % 365;
  }
  if (differenceInDays >= 12) {
    differenceInMonths = Math.floor(differenceInDays / 12);
    differenceInDays = differenceInDays % 12;
  }

  return (
    differenceInYears +
    " years " +
    differenceInMonths +
    " months " +
    differenceInDays +
    " days"
  );
};

let findDifference = (date1, date2) => {
  let differenceInMinutes = parseInt((date2 - date1) / (1000 * 60), 10);

  let differenceInHours = Math.floor(differenceInMinutes / 60);
  let differenceInDays = Math.floor(differenceInHours / 24);
  let differenceInWeeks =
    Math.floor(differenceInDays / 7) +
    " weeks " +
    (differenceInDays % 7) +
    " days";
  let differenceInMonths =
    Math.floor(differenceInDays / 30) +
    " months " +
    (differenceInDays % 30) +
    " days";
  let diffYears = findDifference1(date1, date2);

  return `${diffYears} 
or ${differenceInMonths} Months
or ${differenceInWeeks} Weeks
or ${differenceInDays} Days
or ${differenceInHours} Hours
or ${differenceInMinutes} Minutes
    `;
};

let d1 = new Date("01/03/2017");
let d2 = new Date(" 06/12/2019");

console.log(findDifference1(d1, d2));
