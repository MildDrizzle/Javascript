const num = prompt("Number of Rows");
let pattern = "";

for (let rows = 1; rows <= num; rows++) {
  if (rows == num && num % 2 == 0) {
    continue;
  }
  for (let cols = 1; cols <= num; cols++) {
    if (cols == rows || cols == num - rows + 1) {
      pattern += "*";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
  pattern = "";
}
