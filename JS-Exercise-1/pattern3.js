const num = prompt("Number of Rows");
let pattern = "";
for (let rows = 1; rows <= num; rows++) {
  for (let cols = num - rows; cols > 0; cols--) {
    pattern += " ";
  }
  for (let cols = 0; cols < rows; cols++) {
    pattern += "* ";
  }
  console.log(pattern);
  pattern = "";
}
