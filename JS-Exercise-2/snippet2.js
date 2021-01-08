const dashEvenNum = (number) => {
  dashedNum = [number[0]];

  for (let i = 1; i < number.length; i++) {
    if (number[i - 1] % 2 == 0 && number[i] % 2 == 0) {
      dashedNum.push("-", number[i]);
    } else {
      dashedNum.push(number[i]);
    }
  }
  return dashedNum.join("");
};

console.log(dashEvenNum("02544168"));
