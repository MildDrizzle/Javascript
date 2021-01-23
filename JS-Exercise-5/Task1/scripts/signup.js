const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(document.getElementById("signupForm"));
  const username = formData.get("username");
  const password = formData.get("password");
  const confirmPassword = formData.get("cpassword");
  const type = formData.get("type");
  const id = "user" + Date.now();
  if (password !== confirmPassword) {
    alert("Password dosen't match");
    return;
  }
  if (localStorage.getItem("users") === null) {
    const users = [{ id, username: username, password: password, type: type }];
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    const users = JSON.parse(localStorage.getItem("users"));
    users.push({
      id,
      username: username,
      password: password,
      type: type,
    });
    localStorage.setItem("users", JSON.stringify(users));
  }
  window.location = "login.html?msg=new";
};
