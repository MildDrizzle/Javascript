const date1 = new Date("07/01/2018");
const date2 = new Date("05/03/2020");

const findDifferenceBetweenDates = (date1, date2) => {
  let differenceDays = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  let differenceYear = 0;
  let differenceMonths = 0;

  if (differenceDays >= 365) {
    differenceYear = Math.floor(differenceDays / 365);
    differenceDays = differenceDays % 365;
  }
  if (differenceDays >= 30) {
    differenceMonths = Math.floor(differenceDays / 30);
    differenceDays = differenceDays % 30;
  }
  console.log(
    differenceYear +
      " years " +
      differenceMonths +
      " months " +
      differenceDays +
      " days"
  );
};

findDifferenceBetweenDates(date1, date2);
