const handleFormSubmit = (event) => {
  event.preventDefault();
  //If there are no users in the localstorage then redirect to signup page
  if (localStorage.getItem("users") === null) {
    alert("There are no users in the LMS. Please create a new user first.");
    window.location = "signup.html";
  }
  const formData = new FormData(document.getElementById("loginForm"));
  const username = formData.get("username");
  const password = formData.get("password");
  const users = JSON.parse(localStorage.getItem("users"));
  //Find the user from the array of objects
  const user = users.find(
    (obj) => obj.username === username && obj.password === password
  );
  // If the user is not found then give message
  if (user === undefined) {
    alert("No User Found with given credentials!");
    return;
  }
  //If the user is found then set the localstorage=>currentuser
  localStorage.setItem("currentUser", JSON.stringify(user));
  //If the user is admin then have him admin access otherwise have him student access.
  if (user.type === "admin") location.href = "index.html";
  else if (user.type === "user") location.href = "studentDashboard.html";
};

//Get msg from the url for redirection and new user
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
