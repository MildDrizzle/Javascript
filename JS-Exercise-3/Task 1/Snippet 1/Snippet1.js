const protectEmail = (email) => {
  if (email === null || email === "" || !emailValidater(email))
    return "Please Enter a Valid Email";
  let splittedString = email.split("@");
  //let avg = Math.floor(splittedString[0].length / 2);
  let arr = Array.from(splittedString[0]);
  // while (avg < arr.length) {

  //   arr[avg] = "*";
  //   avg++;
  // }
  for (let i = 2; i < arr.length - 1; i++) {
    arr[i] = "*";
  }
  return `${arr.join("")}@${splittedString[1]}`;
};

const emailValidater = (email) => {
  if (email === null || email === "") return false;
  const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return pattern.test(email);
};

document.write(protectEmail(prompt("Please Enter Your Email")));
