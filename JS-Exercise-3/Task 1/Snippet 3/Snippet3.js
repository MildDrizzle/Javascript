const emailValidater = (email) => {
  if (email === null || email === "") return "Invalid Email";
  const pattern = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  return pattern.test(email) ? "Valid Email" : "Invalid Email";
};

document.write(emailValidater(prompt("Please Enter a Email")));
