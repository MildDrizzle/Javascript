const printTable = (row, column) => {
  if (row === 0 || column === 0 || row === null || column === null) {
    document.write("Error");
    return;
  }
  document.write("<Table>");
  for (let tableRow = 1; tableRow <= row; tableRow++) {
    document.write("<tr>");
    for (let tableColumn = 1; tableColumn <= column; tableColumn++) {
      document.write(`<td>Row-${tableRow} Column-${tableColumn}</td>`);
      // let val = prompt("Please Enter Content");
      // document.write(`<td>${val}</td>`);
    }
    document.write("</tr>");
  }
  document.write("</Table>");
};

const row = prompt("Enter Number of Rows", 2);
const column = prompt("Enter Number of Columns", 5);

printTable(row, column);
