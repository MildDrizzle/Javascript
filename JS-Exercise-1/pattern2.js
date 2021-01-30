const num = prompt("Number of Rows");
let pattern = "";
for (let rows = 1; rows <= num; rows++) {
  for (let cols = num; cols > 0; cols--) {
    if (cols > rows) {
      pattern += " ";
    } else {
      pattern += "*";
    }
  }
  console.log(pattern);
  pattern = "";
}
