const handleFormSubmit = (event) => {
  event.preventDefault();
  if (localStorage.getItem("users") === null) return;
  const formData = new FormData(document.getElementById("loginForm"));
  const username = formData.get("username");
  const password = formData.get("password");
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(
    (obj) => obj.username === username && obj.password === password
  );
  localStorage.setItem("currentUser", JSON.stringify(user));
  if (user.type === "admin") location.href = "index.html";
  else if (user.type === "user") location.href = "studentDashboard.html";
};
