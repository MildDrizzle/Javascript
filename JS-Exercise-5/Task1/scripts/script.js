//Logout currently logged in user.
const logout = () => {
  localStorage.removeItem("currentUser");
  window.location = "login.html";
};

//If no one is logged in then restrict page access
if (localStorage.getItem("currentUser") === null) {
  window.location = "login.html?msg=not";
}

//Display total courses and users on the index page
document.getElementById("totalCourse").innerHTML = JSON.parse(
  localStorage.getItem("courses")
).length;
document.getElementById("totalUsers").innerHTML = JSON.parse(
  localStorage.getItem("users")
).length;
