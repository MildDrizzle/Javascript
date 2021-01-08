const static_array = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const num_string_range = (start, end, step) => {
  if (static_array.indexOf(start) !== -1 && static_array.indexOf(end) !== -1) {
    let newarray = [];
    for (
      let i = static_array.indexOf(start);
      i <= static_array.indexOf(end);
      i += step
    ) {
      newarray.push(static_array[i]);
    }
    return newarray;
  } else {
    return "Invalid Parameters";
  }
};

console.log(num_string_range("a", "z", 2));
