let num = prompt("Number of Rows");
let pattern = "";
for (let rows = 1; rows <= num; rows++) {
  for (let cols = 1; cols <= rows; cols++) {
    pattern += "* ";
  }
  console.log(pattern);
  pattern = "";
}
