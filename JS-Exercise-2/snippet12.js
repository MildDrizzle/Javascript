const stringChop = (string, chopLength) => {
  let choppedString = [];
  for (let i = 0; i < string.length; i += chopLength) {
    choppedString.push(string.slice(i, i + chopLength));
  }
  return choppedString;
};

console.log(stringChop("RapidOpsSolutions", 2));
