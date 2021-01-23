const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("signupForm"));
  const username = formData.get("username");
  const password = formData.get("password");
  const confirmPassword = formData.get("cpassword");
  const type = formData.get("type");
  //Creating a random id for the user
  const id = "user" + Date.now();
  //If password and confirm password doesn't match then return
  if (password !== confirmPassword) {
    alert("Password dosen't match");
    return;
  }
  //If the localstorage=>users doesn't have values then just set it.
  if (localStorage.getItem("users") === null) {
    const users = [{ id, username: username, password: password, type: type }];
    localStorage.setItem("users", JSON.stringify(users));
  }
  //If the Localstorage=>users have values then parse it and push the new user into the array and store it.
  else {
    const users = JSON.parse(localStorage.getItem("users"));
    users.push({
      id,
      username: username,
      password: password,
      type: type,
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
  //After successfull registeration of the user then go to login page
  window.location = "login.html?msg=new";
};
