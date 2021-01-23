const logout = () => {
  localStorage.removeItem("currentUser");
  window.location = "login.html";
};

if (localStorage.getItem("currentUser") === null) {
  window.location = "login.html?msg=not";
}

document.getElementById("totalCourse").innerHTML = JSON.parse(
  localStorage.getItem("courses")
).length;
document.getElementById("totalUsers").innerHTML = JSON.parse(
  localStorage.getItem("users")
).length;
