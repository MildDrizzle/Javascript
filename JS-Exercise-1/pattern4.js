let num = prompt("Number of Rows");
let pattern = "";
let count = num * 2 - 1;
for (let rows = 1; rows <= count; rows++) {
  if (rows == num && num % 2 == 0) {
    continue;
  }
  for (let cols = 1; cols <= count; cols++) {
    if (cols == rows || cols == count - rows + 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
  pattern = "";
}
