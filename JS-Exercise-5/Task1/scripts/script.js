const logout = () => {
  localStorage.removeItem("currentUser");
  window.location = "login.html";
};

if (localStorage.getItem("currentUser") === null) {
  window.location = "login.html?msg=not";
}
