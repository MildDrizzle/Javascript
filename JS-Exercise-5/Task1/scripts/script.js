const logout = () => {
  localStorage.removeItem("currentUser");
  window.location = "login.html";
};
