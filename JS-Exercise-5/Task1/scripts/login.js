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

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const msg = urlParams.get("msg");
if (msg === "new") {
  alert(
    "Welcome To the LMS, you've been successfully registered! Please Login"
  );
}
if (msg === "not") {
  alert("Please Login to Use LMS");
}
